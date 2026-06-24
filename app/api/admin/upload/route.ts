import { NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import { join, extname } from "path"
import { randomUUID } from "crypto"

export const dynamic = "force-dynamic"

const PASSWORD = process.env.ADMIN_PASSWORD || ""

function checkAuth(req: Request): boolean {
  return req.headers.get("authorization") === `Bearer ${PASSWORD}`
}

export async function POST(req: Request) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const formData = await req.formData()
  const file = formData.get("file") as File | null
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 })

  const ext = extname(file.name).toLowerCase() || ".jpg"
  const allowed = [".jpg", ".jpeg", ".png", ".webp", ".heic"]
  if (!allowed.includes(ext)) {
    return NextResponse.json({ error: "Invalid file type" }, { status: 400 })
  }

  const filename = `${randomUUID()}${ext}`
  const uploadDir = join(process.cwd(), "public", "uploads")
  await mkdir(uploadDir, { recursive: true })

  const bytes = await file.arrayBuffer()
  await writeFile(join(uploadDir, filename), Buffer.from(bytes))

  return NextResponse.json({ url: `/uploads/${filename}` })
}
