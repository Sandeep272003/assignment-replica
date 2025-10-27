import React from 'react'
import RightWidgets from './components/RightWidgets'

export default function App(){
  return (
    <div className="min-h-screen flex items-start justify-center p-8 bg-bg">
      <div className="w-full max-w-[1280px] flex gap-8">
        <div className="hidden md:block md:w-1/2">
          {/* left half intentionally empty for laptop layouts */}
          <div className="h-full w-full rounded-3xl border border-dashed border-gray-200 flex items-center justify-center text-gray-300">
            {/* Decorative placeholder; remove if exact empty required */}
            <div className="text-center">
              <div className="text-2xl font-semibold">Left area</div>
              <div className="text-sm mt-2">
  Intentionally empty on &gt;=768px
</div>

            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <RightWidgets />
        </div>
      </div>
    </div>
  )
}
