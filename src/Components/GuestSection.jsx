import React from 'react'
import PropTypes from 'prop-types'

function GuestSection({ label, textLabel, count, onDecrement, onIncrement }) {
  return (
    <div className='flex flex-col gap-2'>
      <h3 className='text-md font-semibold leading-none'>
        {label}
        <span className='text-sm font-light text-gray-300 block'>
          {textLabel}
        </span>
      </h3>
      <div className='flex gap-2 items-center'>
        <button
          className='border h-5 w-5 flex items-center justify-center'
          onClick={onDecrement}
        >
          -
        </button>
        {count}
        <button
          className='border h-5 w-5 flex items-center justify-center'
          onClick={onIncrement}
        >
          +
        </button>
      </div>
    </div>
  )
}

GuestSection.propTypes = {
  label: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired
}

export default GuestSection
