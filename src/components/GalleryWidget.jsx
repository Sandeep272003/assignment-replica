import React, {useEffect, useRef, useState} from 'react'

export default function GalleryWidget(){
  const [images,setImages] = useState([])
  const inputRef = useRef(null)

  useEffect(()=>{
    try{
      const raw = localStorage.getItem('galleryImages_v2')
      if(raw) setImages(JSON.parse(raw))
    }catch(e){}
  },[])

  useEffect(()=>{
    localStorage.setItem('galleryImages_v2', JSON.stringify(images))
  },[images])

  const handleFiles = (files) => {
    const arr = Array.from(files).slice(0,12)
    arr.forEach(file=>{
      const reader = new FileReader()
      reader.onload = (e)=>{
        setImages(prev => [{id: cryptoId(), src: e.target.result}, ...prev])
      }
      reader.readAsDataURL(file)
    })
  }

  const cryptoId = ()=> Math.random().toString(36).slice(2,9)

  const removeImage = (id)=>{
    setImages(prev => prev.filter(i=>i.id!==id))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold">Gallery</h4>
        <div className="text-sm text-gray-500">Right widget • gallery</div>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <input ref={inputRef} type="file" accept="image/*" multiple className="hidden" onChange={(e)=>handleFiles(e.target.files)}/>
        <button onClick={()=>inputRef.current?.click()} className="px-4 py-2 rounded-lg bg-accent text-white font-medium shadow">Add image</button>
        <button onClick={()=>setImages([])} className="px-3 py-2 rounded-lg bg-gray-100 text-sm">Clear</button>
        <div className="text-xs text-gray-500 ml-3">Images persist in your browser (localStorage)</div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {images.length===0 && <div className="col-span-3 text-sm text-gray-500">No images yet — click Add image to upload.</div>}
        {images.map(img=>(
          <div key={img.id} className="relative rounded-lg overflow-hidden border">
            <img src={img.src} alt="gallery" className="object-cover w-full h-28"/>
            <button onClick={()=>removeImage(img.id)} className="absolute top-2 right-2 bg-white/90 rounded-full w-8 h-8 flex items-center justify-center text-sm shadow">✕</button>
          </div>
        ))}
      </div>
    </div>
  )
}
