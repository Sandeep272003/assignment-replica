import React from 'react'
import WidgetTabs from './WidgetTabs'
import GalleryWidget from './GalleryWidget'

export default function RightWidgets(){
  return (
    <div className="flex flex-col gap-6">
      <div className="p-6 bg-card rounded-3xl shadow-card border border-transparent">
        <WidgetTabs />
      </div>

      <div className="p-6 bg-card rounded-3xl shadow-card border border-transparent">
        <GalleryWidget />
      </div>
    </div>
  )
}
