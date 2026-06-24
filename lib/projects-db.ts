import { readFileSync, writeFileSync, mkdirSync } from "fs"
import { join } from "path"

export type GalleryProject = {
  id: string
  title: string
  location: string
  city: string
  category: "residential" | "commercial" | "multifamily" | "gutters" | "renovation"
  image: string
  imageX: number
  imageY: number
  material: string
  type: string
  year: number
  featured: boolean
}

const DB_PATH = join(process.cwd(), "data", "projects.json")

export async function readProjects(): Promise<GalleryProject[]> {
  try {
    return JSON.parse(readFileSync(DB_PATH, "utf-8"))
  } catch {
    return []
  }
}

export async function writeProjects(projects: GalleryProject[]): Promise<void> {
  const token = process.env.GITHUB_TOKEN

  // Local dev: write directly to filesystem
  if (!token) {
    mkdirSync(join(process.cwd(), "data"), { recursive: true })
    writeFileSync(DB_PATH, JSON.stringify(projects, null, 2))
    return
  }

  // Production: commit via GitHub API
  const owner = "withnoname0912"
  const repo = "StreamlineExteriors"
  const path = "data/projects.json"
  const content = Buffer.from(JSON.stringify(projects, null, 2)).toString("base64")

  const fileRes = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    { headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github.v3+json" } }
  )
  const fileData = await fileRes.json()

  await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Update projects via admin panel",
        content,
        sha: fileData.sha,
      }),
    }
  )
}
