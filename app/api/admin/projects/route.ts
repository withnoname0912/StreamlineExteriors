import { NextResponse } from "next/server"
import { readProjects, writeProjects, type GalleryProject } from "@/lib/projects-db"

export const dynamic = "force-dynamic"

const PASSWORD = process.env.ADMIN_PASSWORD || "streamline2024"

function checkAuth(req: Request): boolean {
  return req.headers.get("authorization") === `Bearer ${PASSWORD}`
}

export async function GET(req: Request) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  return NextResponse.json(readProjects())
}

export async function POST(req: Request) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const body: GalleryProject = await req.json()
  const projects = readProjects()

  if (projects.find((p) => p.id === body.id)) {
    return NextResponse.json({ error: "ID already exists" }, { status: 409 })
  }

  projects.push(body)
  writeProjects(projects)
  return NextResponse.json(body, { status: 201 })
}
