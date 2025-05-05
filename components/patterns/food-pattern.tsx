export function FoodPattern({ className = "absolute inset-0 z-0 opacity-10" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="food-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Fork */}
            <path
              d="M20,10 L20,30 M15,10 L15,25 M25,10 L25,25 M15,25 C15,28 20,30 20,30 C20,30 25,28 25,25"
              stroke="#3B82F6"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Spoon */}
            <path
              d="M70,10 C65,10 60,15 60,20 C60,25 65,30 70,30 C75,30 80,25 80,20 C80,15 75,10 70,10 Z M70,30 L70,40"
              stroke="#3B82F6"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Plate */}
            <circle cx="40" cy="70" r="15" stroke="#60A5FA" strokeWidth="1.5" fill="none" />
            <circle cx="40" cy="70" r="10" stroke="#60A5FA" strokeWidth="1" fill="none" />
            {/* Chef Hat */}
            <path
              d="M80,70 C80,65 75,60 70,60 C65,60 60,65 60,70 L60,80 L80,80 L80,70 Z"
              stroke="#93C5FD"
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M65,60 C65,55 70,50 75,55" stroke="#93C5FD" strokeWidth="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#food-pattern)" />
      </svg>
    </div>
  )
}
