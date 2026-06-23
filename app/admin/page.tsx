"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import type { GalleryProject } from "@/lib/projects-db"

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = GalleryProject["category"]
type FilterValue = "all" | Category

const CATEGORIES: { label: string; value: Category }[] = [
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Multifamily", value: "multifamily" },
  { label: "Gutters", value: "gutters" },
  { label: "Renovation", value: "renovation" },
]

const CATEGORY_LABEL: Record<Category, string> = {
  residential: "Residential",
  commercial: "Commercial",
  multifamily: "Multifamily",
  gutters: "Gutters",
  renovation: "Renovation",
}

const BLANK_FORM = (): Omit<GalleryProject, "id"> => ({
  title: "",
  location: "",
  city: "",
  category: "residential",
  image: "",
  imageX: 50,
  imageY: 50,
  material: "",
  type: "",
  year: new Date().getFullYear(),
  featured: false,
})

// ─── Helpers ──────────────────────────────────────────────────────────────────

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60)
}

// ─── Login Screen ─────────────────────────────────────────────────────────────

function LoginScreen({ onLogin }: { onLogin: (pw: string) => void }) {
  const [pw, setPw] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(false)
    const res = await fetch("/api/admin/projects", {
      headers: { Authorization: `Bearer ${pw}` },
    })
    setLoading(false)
    if (res.ok) {
      sessionStorage.setItem("admin_token", pw)
      onLogin(pw)
    } else {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-[400px]">
        <div className="mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#14008B] mb-3">
            Streamline Exteriors
          </p>
          <h1 className="text-white font-display font-black uppercase text-4xl leading-none tracking-tight">
            Admin Panel
          </h1>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50 mb-2">
              Password
            </label>
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="w-full bg-[#141414] border border-white/10 text-white text-[13px] px-4 py-3 outline-none focus:border-[#14008B] transition-colors placeholder:text-white/20"
              placeholder="Enter admin password"
              autoFocus
            />
            {error && (
              <p className="text-red-400 text-[11px] mt-2 tracking-wide">
                Incorrect password.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !pw}
            className="w-full bg-[#14008B] text-white text-[11px] font-semibold uppercase tracking-[0.28em] py-3.5 hover:bg-[#1a00b0] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  )
}

// ─── Photo Position Picker ────────────────────────────────────────────────────

function PositionPicker({
  src,
  x,
  y,
  onChange,
}: {
  src: string
  x: number
  y: number
  onChange: (x: number, y: number) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  function updateFromEvent(e: React.MouseEvent | MouseEvent) {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const nx = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100))
    const ny = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100))
    onChange(Math.round(nx), Math.round(ny))
  }

  function onMouseDown(e: React.MouseEvent) {
    dragging.current = true
    updateFromEvent(e)
  }

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (dragging.current) updateFromEvent(e)
    }
    function onMouseUp() {
      dragging.current = false
    }
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="space-y-3">
      <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/40">
        Drag to position preview frame
      </p>

      {/* Image preview container */}
      <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        className="relative overflow-hidden cursor-crosshair select-none border border-white/10"
        style={{ aspectRatio: "4/3" }}
      >
        <img
          src={src}
          alt="Position preview"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ objectPosition: `${x}% ${y}%` }}
        />
        {/* Crosshair indicator */}
        <div
          className="absolute w-6 h-6 pointer-events-none"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="absolute left-1/2 top-0 w-px h-full bg-white/70" />
          <div className="absolute top-1/2 left-0 h-px w-full bg-white/70" />
        </div>
        {/* Position badge */}
        <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white bg-black/60 px-2 py-0.5">
          {x}% {y}%
        </div>
        <div className="absolute top-3 right-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50 bg-black/50 px-2 py-0.5">
          drag to pan
        </div>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-1.5">
            X Position
          </label>
          <input
            type="range"
            min={0}
            max={100}
            value={x}
            onChange={(e) => onChange(Number(e.target.value), y)}
            className="w-full accent-[#14008B]"
          />
        </div>
        <div>
          <label className="block text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-1.5">
            Y Position
          </label>
          <input
            type="range"
            min={0}
            max={100}
            value={y}
            onChange={(e) => onChange(x, Number(e.target.value))}
            className="w-full accent-[#14008B]"
          />
        </div>
      </div>
    </div>
  )
}

// ─── Project Form ─────────────────────────────────────────────────────────────

function ProjectForm({
  initial,
  token,
  onSave,
  onCancel,
}: {
  initial: GalleryProject | null
  token: string
  onSave: () => void
  onCancel: () => void
}) {
  const isEdit = !!initial
  const [form, setForm] = useState<Omit<GalleryProject, "id">>(
    initial ? { ...initial } : BLANK_FORM()
  )
  const [editId] = useState(initial?.id ?? "")
  const [previewUrl, setPreviewUrl] = useState<string>(initial?.image ?? "")
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [dropActive, setDropActive] = useState(false)
  const [error, setError] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  function set<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((f) => ({ ...f, [k]: v }))
  }

  async function uploadFile(file: File) {
    setUploading(true)
    const local = URL.createObjectURL(file)
    setPreviewUrl(local)
    const fd = new FormData()
    fd.append("file", file)
    const res = await fetch("/api/admin/upload", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: fd,
    })
    setUploading(false)
    if (res.ok) {
      const { url } = await res.json()
      set("image", url)
      setPreviewUrl(url)
    } else {
      setError("Upload failed. Try again.")
      setPreviewUrl(form.image)
    }
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (f) uploadFile(f)
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault()
    setDropActive(false)
    const f = e.dataTransfer.files?.[0]
    if (f) uploadFile(f)
  }

  async function handleSave() {
    if (!form.title.trim()) { setError("Title is required."); return }
    if (!form.image) { setError("Photo is required."); return }
    setSaving(true)
    setError("")

    const id = isEdit ? editId : slugify(form.title) || `project-${Date.now()}`
    const payload: GalleryProject = { ...form, id }

    const res = await fetch(
      isEdit ? `/api/admin/projects/${editId}` : "/api/admin/projects",
      {
        method: isEdit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
    )
    setSaving(false)
    if (res.ok) {
      onSave()
    } else {
      const body = await res.json().catch(() => ({}))
      setError(body.error || "Save failed. Try again.")
    }
  }

  const showPicker = previewUrl && !uploading

  return (
    <div className="bg-[#0a0a0a] border-t border-white/[0.06] px-6 sm:px-10 lg:px-16 py-10">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-white font-display font-black uppercase text-2xl tracking-tight mb-8">
          {isEdit ? "Edit Project" : "Add New Project"}
        </h2>

        {/* ── Photo drop zone ── */}
        {!showPicker && (
          <div className="mb-8">
            <label className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-3">
              Photo
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDropActive(true) }}
              onDragLeave={() => setDropActive(false)}
              onDrop={onDrop}
              className={`border-2 border-dashed rounded-none cursor-pointer flex items-center justify-center py-14 transition-colors ${
                dropActive
                  ? "border-[#14008B] bg-[#14008B]/5"
                  : "border-white/15 hover:border-white/30"
              }`}
            >
              {uploading ? (
                <span className="text-[12px] text-white/40 tracking-wide">Uploading…</span>
              ) : (
                <span className="text-[12px] text-white/30 tracking-wide">
                  Drop photo here or click to browse
                </span>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={onFileChange}
              className="hidden"
            />
          </div>
        )}

        {/* ── Position picker (after upload) ── */}
        {showPicker && (
          <div className="mb-8 space-y-4">
            {/* Thumbnail strip */}
            <div className="flex gap-2 items-center">
              <div
                className="relative overflow-hidden border border-[#14008B] shrink-0"
                style={{ width: 72, height: 54 }}
              >
                <img
                  src={previewUrl}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: `${form.imageX}% ${form.imageY}%` }}
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  setPreviewUrl(form.image)
                  fileInputRef.current?.click()
                }}
                className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/30 hover:text-white/60 transition-colors px-3 py-1 border border-white/10 hover:border-white/25"
              >
                Change Photo
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={onFileChange}
                className="hidden"
              />
            </div>

            <PositionPicker
              src={previewUrl}
              x={form.imageX}
              y={form.imageY}
              onChange={(x, y) => setForm((f) => ({ ...f, imageX: x, imageY: y }))}
            />
          </div>
        )}

        {/* ── Form fields ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          {/* Title */}
          <div className="sm:col-span-2">
            <label className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-2">
              Title
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              placeholder="e.g. Okanagan Modern Residence"
              className="w-full bg-[#141414] border border-white/10 text-white text-[13px] px-4 py-3 outline-none focus:border-[#14008B] transition-colors placeholder:text-white/20"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-2">
              Category
            </label>
            <select
              value={form.category}
              onChange={(e) => set("category", e.target.value as Category)}
              className="w-full bg-[#141414] border border-white/10 text-white text-[13px] px-4 py-3 outline-none focus:border-[#14008B] transition-colors appearance-none"
            >
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* Year */}
          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-2">
              Year
            </label>
            <input
              type="number"
              value={form.year}
              onChange={(e) => set("year", Number(e.target.value))}
              min={2000}
              max={2100}
              className="w-full bg-[#141414] border border-white/10 text-white text-[13px] px-4 py-3 outline-none focus:border-[#14008B] transition-colors"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-2">
              Location
            </label>
            <input
              type="text"
              value={form.location}
              onChange={(e) => set("location", e.target.value)}
              placeholder="e.g. Kelowna, BC"
              className="w-full bg-[#141414] border border-white/10 text-white text-[13px] px-4 py-3 outline-none focus:border-[#14008B] transition-colors placeholder:text-white/20"
            />
          </div>

          {/* City slug */}
          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-2">
              City (slug)
            </label>
            <input
              type="text"
              value={form.city}
              onChange={(e) => set("city", e.target.value)}
              placeholder="e.g. kelowna"
              className="w-full bg-[#141414] border border-white/10 text-white text-[13px] px-4 py-3 outline-none focus:border-[#14008B] transition-colors placeholder:text-white/20"
            />
          </div>

          {/* Material */}
          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-2">
              Material
            </label>
            <input
              type="text"
              value={form.material}
              onChange={(e) => set("material", e.target.value)}
              placeholder="e.g. James Hardie Lap · EZ Trims"
              className="w-full bg-[#141414] border border-white/10 text-white text-[13px] px-4 py-3 outline-none focus:border-[#14008B] transition-colors placeholder:text-white/20"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-2">
              Project Type
            </label>
            <input
              type="text"
              value={form.type}
              onChange={(e) => set("type", e.target.value)}
              placeholder="e.g. Custom New Build"
              className="w-full bg-[#141414] border border-white/10 text-white text-[13px] px-4 py-3 outline-none focus:border-[#14008B] transition-colors placeholder:text-white/20"
            />
          </div>

          {/* Featured toggle */}
          <div className="flex items-center gap-3 sm:col-span-2">
            <button
              type="button"
              onClick={() => set("featured", !form.featured)}
              className={`relative w-10 h-5 rounded-full transition-colors ${
                form.featured ? "bg-[#14008B]" : "bg-white/15"
              }`}
            >
              <span
                className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                  form.featured ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
              Featured Project
            </span>
          </div>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-[11px] tracking-wide mb-4">{error}</p>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="flex-1 bg-[#14008B] text-white text-[11px] font-semibold uppercase tracking-[0.28em] py-4 hover:bg-[#1a00b0] transition-colors disabled:opacity-40"
          >
            {saving ? "Saving…" : isEdit ? "Save Changes" : "Add Project"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-8 border border-white/15 text-white text-[11px] font-semibold uppercase tracking-[0.28em] py-4 hover:border-white/30 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  onEdit,
  onDelete,
}: {
  project: GalleryProject
  onEdit: () => void
  onDelete: () => void
}) {
  const [confirmDelete, setConfirmDelete] = useState(false)

  return (
    <div className="bg-[#111] border border-white/[0.06] overflow-hidden group">
      {/* Photo */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: `${project.imageX}% ${project.imageY}%` }}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-black/70 text-white text-[8px] font-semibold uppercase tracking-[0.3em] px-2 py-1">
            {CATEGORY_LABEL[project.category]}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#14008B]" />
        )}
      </div>

      {/* Info */}
      <div className="px-4 pt-3 pb-2">
        <h3 className="font-display font-black text-white uppercase leading-tight text-base tracking-tight mb-0.5 truncate">
          {project.title}
        </h3>
        <p className="text-white/50 text-[10px] tracking-wide truncate">{project.material}</p>
        <p className="text-white/25 text-[9px] tracking-wide mt-0.5">{project.location} · {project.year}</p>
      </div>

      {/* Actions */}
      <div className="flex border-t border-white/[0.06]">
        <button
          onClick={onEdit}
          className="flex-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40 hover:text-white hover:bg-white/[0.04] transition-all py-3"
        >
          Edit
        </button>
        <div className="w-px bg-white/[0.06]" />
        {confirmDelete ? (
          <>
            <button
              onClick={onDelete}
              className="flex-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all py-3"
            >
              Confirm
            </button>
            <div className="w-px bg-white/[0.06]" />
            <button
              onClick={() => setConfirmDelete(false)}
              className="flex-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40 hover:text-white hover:bg-white/[0.04] transition-all py-3"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setConfirmDelete(true)}
            className="flex-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40 hover:text-red-400 hover:bg-red-500/5 transition-all py-3"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  )
}

// ─── Main Admin Panel ─────────────────────────────────────────────────────────

export default function AdminPage() {
  const [token, setToken] = useState("")
  const [projects, setProjects] = useState<GalleryProject[]>([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState<FilterValue>("all")
  const [formMode, setFormMode] = useState<"closed" | "add" | "edit">("closed")
  const [editingProject, setEditingProject] = useState<GalleryProject | null>(null)

  // Try to restore session on mount
  useEffect(() => {
    const saved = sessionStorage.getItem("admin_token")
    if (saved) setToken(saved)
  }, [])

  const fetchProjects = useCallback(async (t: string) => {
    setLoading(true)
    const res = await fetch("/api/admin/projects", {
      headers: { Authorization: `Bearer ${t}` },
    })
    setLoading(false)
    if (res.ok) setProjects(await res.json())
  }, [])

  useEffect(() => {
    if (token) fetchProjects(token)
  }, [token, fetchProjects])

  function handleLogin(pw: string) {
    setToken(pw)
  }

  function signOut() {
    sessionStorage.removeItem("admin_token")
    setToken("")
    setProjects([])
    setFormMode("closed")
  }

  function openAdd() {
    setEditingProject(null)
    setFormMode("add")
    setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }), 50)
  }

  function openEdit(p: GalleryProject) {
    setEditingProject(p)
    setFormMode("edit")
    setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }), 50)
  }

  async function handleDelete(id: string) {
    const res = await fetch(`/api/admin/projects/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
    if (res.ok) fetchProjects(token)
  }

  function handleFormSave() {
    setFormMode("closed")
    setEditingProject(null)
    fetchProjects(token)
  }

  function handleFormCancel() {
    setFormMode("closed")
    setEditingProject(null)
  }

  if (!token) return <LoginScreen onLogin={handleLogin} />

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/95 backdrop-blur-sm">
        <div className="px-6 sm:px-10 lg:px-16 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#14008B]">
              Streamline Exteriors
            </span>
            <span className="text-white/20 text-[10px] hidden sm:inline">
              {projects.length} projects
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={openAdd}
              className="bg-[#14008B] text-white text-[10px] font-semibold uppercase tracking-[0.24em] px-4 py-2 hover:bg-[#1a00b0] transition-colors"
            >
              + Add Project
            </button>
            <button
              onClick={signOut}
              className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/30 hover:text-white/60 transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      {/* ── Page title + filters ── */}
      <div className="px-6 sm:px-10 lg:px-16 pt-8 pb-6 border-b border-white/[0.06]">
        <h1 className="font-display font-black uppercase text-3xl text-white tracking-tight mb-6">
          Admin Panel
        </h1>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.26em] border transition-all ${
              filter === "all"
                ? "bg-[#14008B] border-[#14008B] text-white"
                : "border-white/[0.12] text-white/50 hover:border-white/30 hover:text-white"
            }`}
          >
            All ({projects.length})
          </button>
          {CATEGORIES.map((c) => {
            const count = projects.filter((p) => p.category === c.value).length
            return (
              <button
                key={c.value}
                onClick={() => setFilter(c.value)}
                className={`px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.26em] border transition-all ${
                  filter === c.value
                    ? "bg-[#14008B] border-[#14008B] text-white"
                    : "border-white/[0.12] text-white/50 hover:border-white/30 hover:text-white"
                }`}
              >
                {c.label} ({count})
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Project grid ── */}
      <div className="px-6 sm:px-10 lg:px-16 py-8">
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <span className="text-white/30 text-[12px] tracking-widest uppercase">Loading…</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex items-center justify-center py-24">
            <span className="text-white/20 text-[12px] tracking-widest uppercase">
              No projects in this category.
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                onEdit={() => openEdit(p)}
                onDelete={() => handleDelete(p.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Add / Edit Form ── */}
      {formMode !== "closed" && (
        <ProjectForm
          initial={formMode === "edit" ? editingProject : null}
          token={token}
          onSave={handleFormSave}
          onCancel={handleFormCancel}
        />
      )}
    </div>
  )
}
