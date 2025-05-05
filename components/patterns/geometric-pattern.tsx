export function GeometricPattern({ className = "absolute inset-0 z-0 opacity-10" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="geometric-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(10)"
          >
            <rect x="15" y="0" width="10" height="10" fill="#93C5FD" fillOpacity="0.3" />
            <rect x="0" y="15" width="10" height="10" fill="#60A5FA" fillOpacity="0.3" />
            <rect x="30" y="30" width="10" height="10" fill="#3B82F6" fillOpacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
      </svg>
    </div>
  )
}
