import { readFileSync, writeFileSync, mkdirSync } from "fs"
import { join } from "path"

const DB_PATH = join(process.cwd(), "data", "projects.json")

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

export function readProjects(): GalleryProject[] {
  try {
    return JSON.parse(readFileSync(DB_PATH, "utf-8"))
  } catch {
    return []
  }
}

export function writeProjects(projects: GalleryProject[]): void {
  mkdirSync(join(process.cwd(), "data"), { recursive: true })
  writeFileSync(DB_PATH, JSON.stringify(projects, null, 2))
}
