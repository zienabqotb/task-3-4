import React from 'react'

export default function step({num,content}) {
  return (
    <div className="flex justify-center gap-4 ">
        <div className="step-number w-8 h-8 px-3 pt-1 rounded-full bg-[#BEE2FD] " >{num}</div>
        <div className="content-step ">
            <h2 className=" text-[#ABBCFF] font-bold text-[12px]  ">STEP {num}</h2>
            <p className="font-bold text-[14px] text-white">{content}</p>
        </div>
    </div>
  )
}
