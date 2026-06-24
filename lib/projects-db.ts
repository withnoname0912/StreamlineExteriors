import { kv } from "@vercel/kv"
import { readFileSync } from "fs"
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

const KV_KEY = "projects"

function loadLocalProjects(): GalleryProject[] {
  try {
    const raw = readFileSync(join(process.cwd(), "data", "projects.json"), "utf-8")
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export async function readProjects(): Promise<GalleryProject[]> {
  try {
    const data = await kv.get<GalleryProject[]>(KV_KEY)
    if (data && data.length > 0) return data
    // First boot: seed KV from the bundled JSON
    const seed = loadLocalProjects()
    if (seed.length > 0) await kv.set(KV_KEY, seed)
    return seed
  } catch {
    // Local dev fallback (no KV configured)
    return loadLocalProjects()
  }
}

export async function writeProjects(projects: GalleryProject[]): Promise<void> {
  await kv.set(KV_KEY, projects)
}
