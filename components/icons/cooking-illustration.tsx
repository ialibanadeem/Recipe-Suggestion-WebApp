export function CookingIllustration({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="200" cy="220" rx="180" ry="20" fill="#EBF5FF" />
      <rect x="120" y="100" width="160" height="120" rx="10" fill="#93C5FD" />
      <rect x="140" y="80" width="120" height="20" rx="5" fill="#60A5FA" />
      <circle cx="200" cy="140" r="40" fill="#DBEAFE" />
      <path
        d="M180 140C180 129.507 188.507 121 199 121H201C211.493 121 220 129.507 220 140C220 150.493 211.493 159 201 159H199C188.507 159 180 150.493 180 140Z"
        fill="#3B82F6"
      />
      <rect x="150" y="180" width="100" height="10" rx="5" fill="#2563EB" />
      <rect x="170" y="200" width="60" height="10" rx="5" fill="#2563EB" />
      <circle cx="300" cy="80" r="30" fill="#BFDBFE" />
      <circle cx="300" cy="80" r="20" fill="#3B82F6" />
      <path d="M290 80L310 80" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <path d="M300 70L300 90" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <circle cx="100" cy="120" r="25" fill="#BFDBFE" />
      <circle cx="100" cy="120" r="15" fill="#3B82F6" />
      <path d="M92 120L108 120" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M100 112L100 128" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
