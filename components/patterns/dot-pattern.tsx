export function DotPattern({ className = "absolute inset-0 z-0 opacity-10" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="2" fill="#3B82F6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>
    </div>
  )
}
