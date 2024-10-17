import React from 'react'
import { Button } from './Button'

interface DashboardCourseComponentProps {
    id: string; 
    title: string; 
}

export default function DashboardCourseComponent({id, title }: DashboardCourseComponentProps){
  return(
    <Button 
      className="h-24 sm:h-32 md:h-40 text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-white shadow-lg transform transition-all duration-300 hover:scale-105">
      <div className="flex flex-col items-center justify-center h-full">
        <span className="text-base sm:text-lg md:text-xl font-semibold mb-2">{id}</span>
        <span className="text-center px-2 text-lg sm:text-xl md:text-2xl font-bold">{title}</span>
      </div>
    </Button>
  )
}
