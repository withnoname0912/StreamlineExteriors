import { NextResponse } from "next/server"
import { readProjects, writeProjects, type GalleryProject } from "@/lib/projects-db"

export const dynamic = "force-dynamic"

const PASSWORD = process.env.ADMIN_PASSWORD || "streamline2024"

function checkAuth(req: Request): boolean {
  return req.headers.get("authorization") === `Bearer ${PASSWORD}`
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params
  const body: GalleryProject = await req.json()
  const projects = readProjects()
  const idx = projects.findIndex((p) => p.id === id)
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 })
  projects[idx] = { ...body, id }
  writeProjects(projects)
  return NextResponse.json(projects[idx])
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params
  const projects = readProjects()
  const filtered = projects.filter((p) => p.id !== id)
  if (filtered.length === projects.length) return NextResponse.json({ error: "Not found" }, { status: 404 })
  writeProjects(filtered)
  return NextResponse.json({ ok: true })
}
