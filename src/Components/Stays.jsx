import { useContext, useState, useEffect } from 'react'
import { ApiContext } from '../context/ApiContext'
import StayCard from './StayCard'

function Stays() {
  const { data, search, query } = useContext(ApiContext)

  const staysToShow = data.filter((stay) =>
    !query
      ? stay
      : stay.city === query.currentCity && stay.maxGuests >= query.guests
  )

  return (
    <main className='w-[90%] mx-auto '>
      <div className='flex justify-between items-center py-8'>
        <h3 className='text-lg font-bold'>Stays in Finland</h3>
        <span className='text-sm'>{staysToShow.length} stays</span>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 '>
        {staysToShow.map((stay) => (
          <StayCard key={stay.title} stay={stay} />
        ))}
      </div>
    </main>
  )
}

export default Stays
