import React, {useState} from 'react'
import clsx from 'clsx'

const TABS = ['about me','experiences','recommended']

export default function WidgetTabs(){
  const [tab,setTab] = useState('about me')

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Profile</h3>
        <div className="text-sm text-gray-500">Right widget • tabs</div>
      </div>

      <div className="flex gap-3 mb-6">
        {TABS.map(t=>(
          <button
            key={t}
            onClick={()=>setTab(t)}
            className={clsx(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              tab===t ? 'bg-accent text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="min-h-[160px]">
        {tab==='about me' && (
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop&crop=faces" alt="avatar" className="w-full h-full object-cover"/>
              </div>
              <div>
                <div className="text-sm text-gray-700 leading-relaxed">Hi — I’m a frontend developer focused on creating clean, accessible user interfaces. I enjoy building responsive components and delightful micro-interactions.</div>
                <div className="mt-3 text-xs text-gray-500">Location • Bengaluru, India</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <div className="text-xs text-gray-500">Skills</div>
                <div className="mt-2 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-subtle text-xs">React</span>
                  <span className="px-3 py-1 rounded-full bg-subtle text-xs">Tailwind</span>
                  <span className="px-3 py-1 rounded-full bg-subtle text-xs">Accessibility</span>
                </div>
              </div>
              <div className="w-28">
                <div className="text-xs text-gray-500">Availability</div>
                <div className="mt-2 text-sm font-medium">Open to work</div>
              </div>
            </div>
          </div>
        )}

        {tab==='experiences' && (
          <div className="space-y-3">
            <ExperienceItem title="Frontend Intern" meta="Acme Corp • Jun 2024 - Present" body="Worked on component library, performance tuning and accessibility."/>
            <ExperienceItem title="React Developer (Freelance)" meta="2023" body="Built responsive dashboards and landing pages."/>
          </div>
        )}

        {tab==='recommended' && (
          <div className="space-y-3">
            <Recommendation name="John Doe" role="Manager at Acme" rating={4} text={'Delivered high quality UI work on time. Great communicator.'}/>
            <Recommendation name="Priya Singh" role="Team Lead" rating={5} text={'Very proactive and detail oriented.'}/>
          </div>
        )}
      </div>
    </div>
  )
}

function ExperienceItem({title,meta,body}){
  return (
    <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-medium">{title}</div>
          <div className="text-xs text-gray-500">{meta}</div>
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-700">{body}</div>
    </div>
  )
}

function Recommendation({name,role,rating,text}){
  return (
    <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-medium">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
        <div className="text-sm">{'★'.repeat(rating)}{'☆'.repeat(5-rating)}</div>
      </div>
      <div className="mt-2 text-sm text-gray-700">{text}</div>
    </div>
  )
}
