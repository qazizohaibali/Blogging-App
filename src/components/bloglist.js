// import React from 'react'



const Bloglist = () => {
  return (
     <div className="space-y-3">
          <div className="flex items-center">
            {/* <img src="" alt="" /> */}
            <div>IMAGE</div>
            <div>
              <div>Blog Title</div>
              <div>Published at 02 May 2023</div>
            </div>
          </div>
          <div>Blogs Description</div>
          <div className="flex gap-3">
            <div className="cursor-pointer bg-[#ff0000] hover:bg-[#ff3333] rounded-lg text-white font-medium py-2 px-4">Delete</div>
            <div className="cursor-pointer bg-[#7575a3] hover:bg-[#9494b8] rounded-lg text-white font-medium py-2 px-4">Edit</div>
          </div>
        </div>
  )
}

export default Bloglist





