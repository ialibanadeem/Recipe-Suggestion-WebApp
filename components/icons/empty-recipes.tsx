export function EmptyRecipesIcon({ className = "w-32 h-32 mx-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="40" width="120" height="150" rx="8" fill="#EBF5FF" />
      <rect x="50" y="60" width="100" height="5" rx="2.5" fill="#BFDBFE" />
      <rect x="50" y="75" width="100" height="5" rx="2.5" fill="#BFDBFE" />
      <rect x="50" y="90" width="70" height="5" rx="2.5" fill="#BFDBFE" />
      <rect x="50" y="115" width="100" height="5" rx="2.5" fill="#BFDBFE" />
      <rect x="50" y="130" width="100" height="5" rx="2.5" fill="#BFDBFE" />
      <rect x="50" y="145" width="70" height="5" rx="2.5" fill="#BFDBFE" />
      <circle cx="150" cy="50" r="30" fill="#3B82F6" fillOpacity="0.2" />
      <circle cx="150" cy="50" r="20" fill="#3B82F6" />
      <path d="M145 50L155 50" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M150 45L150 55" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
