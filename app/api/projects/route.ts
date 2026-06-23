import { NextResponse } from "next/server"
import { readProjects } from "@/lib/projects-db"

export const dynamic = "force-dynamic"

export async function GET() {
  const projects = readProjects()
  return NextResponse.json(projects)
}
