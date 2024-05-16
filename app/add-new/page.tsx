'use client'
import Card from '@/components/Card'

function page() {
  return (
    <div className="flex justify-center mt-12">
      <Card>
        <h1 className="text-white font-bold  text-4xl mb-2 hero__title">
          ➕Add New To Do
        </h1>
        <input type="text" className='rounded px-1 py-1 text-blue-950 font-bold w-full' placeholder='Enter new Todo' />
        <textarea rows='8' placeholder='Enter here a description' className=' rounded mt-3 px-1 text-blue-950 font-bold w-full'></textarea>
        {/* <p className="text-blue-100 font-bold mt-6">
          This app crafted using Typescript,TailwindCss
          </p> */}
          <button onClick={()=>alert("Todo added successfully!")} className='py-3 mt-3 w-1/3 font-bold text-white text-xl bg-slate-700 rounded transition-all hover:bg-slate-800'>Add</button>
      </Card>
    </div>
  )
}

export default page