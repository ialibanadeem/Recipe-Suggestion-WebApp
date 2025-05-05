export function DecorativeWave({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 0L48 8C96 16 192 32 288 34.7C384 37.3 480 26.7 576 21.3C672 16 768 16 864 24C960 32 1056 48 1152 50.7C1248 53.3 1344 42.7 1392 37.3L1440 32V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
        fill="#DBEAFE"
        fillOpacity="0.5"
      />
      <path
        d="M0 40L48 42.7C96 45.3 192 50.7 288 56C384 61.3 480 66.7 576 64C672 61.3 768 50.7 864 48C960 45.3 1056 50.7 1152 56C1248 61.3 1344 66.7 1392 69.3L1440 72V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V40Z"
        fill="#BFDBFE"
        fillOpacity="0.7"
      />
    </svg>
  )
}
