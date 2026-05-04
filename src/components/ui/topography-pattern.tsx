

import { memo } from 'react'

export const TopographyPattern = memo(function TopographyPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="topo" width="400" height="400" patternUnits="userSpaceOnUse">
            <path d="M0 200 C 50 180, 100 220, 150 200 S 250 180, 300 200 S 350 220, 400 200" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M0 150 C 50 130, 100 170, 150 150 S 250 130, 300 150 S 350 170, 400 150" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M0 250 C 50 230, 100 270, 150 250 S 250 230, 300 250 S 350 270, 400 250" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M0 100 C 80 80, 120 120, 200 100 S 320 80, 400 100" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M0 300 C 80 280, 120 320, 200 300 S 320 280, 400 300" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo)" />
      </svg>
    </div>
  )
})
