"use client"

import { useRef, useState, useEffect } from "react"

type VideoItem = {
  src: string
  label: string
  sublabel?: string
}

function VideoPanel({ video, index }: { video: VideoItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = panelRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setTimeout(() => {
            videoRef.current?.play().catch(() => {})
            setPlaying(true)
            setStarted(true)
          }, index * 400)
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [started, index])

  function togglePlay() {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true) }
    else { v.pause(); setPlaying(false) }
  }

  function toggleMute(e: React.MouseEvent) {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <div ref={panelRef} className="relative overflow-hidden group cursor-pointer" style={{ aspectRatio: "16/9" }} onClick={togglePlay}>
      <video
        ref={videoRef}
        src={video.src}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-700 pointer-events-none" />

      {/* Play icon */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 border border-white/40 flex items-center justify-center backdrop-blur-sm bg-black/25">
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
              <path d="M7 4L18 11L7 18V4Z" fill="white" />
            </svg>
          </div>
        </div>
      )}

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-5 pb-5 pt-12"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)" }}>
        <div>
          <p className="font-display font-black text-white uppercase leading-none tracking-[-0.01em] mb-0.5"
            style={{ fontSize: "clamp(14px, 1.6vw, 22px)" }}>
            {video.label}
          </p>
          {video.sublabel && (
            <p className="text-white/55 text-[9px] font-medium uppercase tracking-[0.3em]">{video.sublabel}</p>
          )}
        </div>
        <button
          onClick={toggleMute}
          className="flex items-center gap-1.5 border border-white/20 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white hover:border-white/40 transition-colors duration-300 shrink-0"
        >
          {muted ? (
            <svg width="11" height="11" viewBox="0 0 13 13" fill="none">
              <path d="M2 4.5H4.5L7.5 2V11L4.5 8.5H2V4.5Z" stroke="white" strokeWidth="1.2" strokeLinejoin="round"/>
              <path d="M10 4.5L12 6.5M12 4.5L10 6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="11" height="11" viewBox="0 0 13 13" fill="none">
              <path d="M2 4.5H4.5L7.5 2V11L4.5 8.5H2V4.5Z" stroke="white" strokeWidth="1.2" strokeLinejoin="round"/>
              <path d="M10 3.5C10.8 4.3 11.3 5.35 11.3 6.5C11.3 7.65 10.8 8.7 10 9.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          )}
          {muted ? "Unmute" : "Mute"}
        </button>
      </div>
    </div>
  )
}

export default function DualVideoShowcase({ videos }: { videos: [VideoItem, VideoItem] }) {
  return (
    <section className="border-t border-white/[0.05] bg-black">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20">

        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-10 bg-[#14008B]" />
          <span className="text-[10px] font-medium uppercase tracking-[0.44em] text-white">
            Featured Projects
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {videos.map((v, i) => (
            <VideoPanel key={i} video={v} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
