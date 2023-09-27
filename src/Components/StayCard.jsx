/* eslint-disable multiline-ternary */
import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function StayCard({ stay }) {
  const { photo, superHost, type, beds, rating, title } = stay

  return (
    <article className='w-full mx-auto'>
      <div className='w-full h-[300px] flex items-center overflow-hidden rounded-xl'>
        <img
          src={photo}
          alt={`${title} photo`}
          className='w-full object-cover rounded-xl h-full'
        />
      </div>

      <div className='flex items-center justify-between h-10'>
        {superHost ? (
          <div className='border border-black rounded-xl py-1 px-2'>
            <p className=' text-[10px] md:text-xs uppercase font-bold sm:text-sm'>
              Super Host
            </p>
          </div>
        ) : null}
        {type === 'Entire apartment' ? (
          <p className='text-xs font-medium sm:text-sm'>
            {type}. {beds} beds
          </p>
        ) : (
          <p className='text-xs font-medium sm:text-sm'>{type}</p>
        )}
        <div className='flex items-center gap-2'>
          <FontAwesomeIcon icon={faStar} style={{ color: '#eb5757' }} />
          <p className='text-xs font-medium sm:text-sm'>{rating}</p>
        </div>
      </div>
      <p className='font-semibold text-sm md:text-base leading-4 h-8'>
        {title}
      </p>
    </article>
  )
}

StayCard.propTypes = {
  stay: PropTypes.object.isRequired
}

export default StayCard
