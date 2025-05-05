export function GradientMesh({ className = "absolute inset-0 z-0 opacity-30" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DBEAFE" />
            <stop offset="50%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          </filter>
        </defs>
        <g filter="url(#goo)">
          <circle cx="10%" cy="30%" r="60" fill="url(#blue-gradient)" />
          <circle cx="50%" cy="70%" r="80" fill="url(#blue-gradient)" />
          <circle cx="80%" cy="20%" r="40" fill="url(#blue-gradient)" />
          <circle cx="30%" cy="85%" r="70" fill="url(#blue-gradient)" />
          <circle cx="70%" cy="50%" r="50" fill="url(#blue-gradient)" />
        </g>
      </svg>
    </div>
  )
}
