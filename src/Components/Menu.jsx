/* eslint-disable react/jsx-closing-tag-location */
import { useState, useContext } from 'react'
import { ApiContext } from '../context/ApiContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXmark,
  faMagnifyingGlass,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'
import GuestSection from './GuestSection'

function Menu() {
  const {
    data,
    showMenu,
    setShowMenu,
    currentCity,
    setCurrentCity,
    guests,
    setGuests,
    filters,
    setFilters,
    setQuery
  } = useContext(ApiContext)

  const [adults, setAdults] = useState(0)
  const [childrens, setChildrens] = useState(0)

  const uniqueCities = [...new Set(data.map((item) => item.city))]

  const decrementGuests = (amountGuest, setAmountGuest) => {
    if (amountGuest === 0) {
      return
    }
    setAmountGuest((prevAmountGuest) => prevAmountGuest - 1)
    setGuests((prevGuests) => prevGuests - 1)
  }

  const incrementGuests = (amountGuest, setAmountGuest) => {
    setAmountGuest((prevAmountGuest) => prevAmountGuest + 1)
    setGuests((prevGuests) => prevGuests + 1)
  }

  const handleQuery = (currentCity, guests) => {
    setQuery({ currentCity, guests })
    setShowMenu(!showMenu)
  }

  return (
    <div
      className={`absolute top-0 left-0 min-h-screen w-full bg-[#4f4f4f] transition-all duration-500 ${
        showMenu ? ' bg-opacity-40 z-10' : 'bg-opacity-0 -z-10'
      }`}
    >
      <nav
        className={`fixed top-0 left-0 w-full bg-white h-[80vh] sm:h-[50vh] transition-transform duration-300 ${
          showMenu ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='w-[90%] mx-auto py-4 flex justify-between items-center'>
          <p className='text-sm font-semibold'>Edit your Search</p>
          <FontAwesomeIcon
            icon={faXmark}
            className='h-[20px] cursor-pointer'
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <div className='w-[90%] mx-auto border border-1 rounded-xl flex flex-col sm:flex-row shadow-md'>
          <button
            className='flex flex-col border border-l-0 border-t-0 border-r-0 border-b-1 px-4 py-2 sm:w-1/3 sm:border-b-0  '
            onClick={() => setFilters({ city: true, guest: false })}
          >
            <span className='text-xs font-bold uppercase text-black'>
              Location
            </span>
            <span
              className={`${currentCity ? 'text-black' : 'text-[#BDBDBD]'}`}
            >{`${currentCity ? `${currentCity}, Finland` : 'Add city'}`}</span>
          </button>
          <button
            className={`flex flex-col border border-l-0 border-t-0 border-r-0 border-b-1 px-4 py-2 sm:w-1/3 sm:border-b-0 ${
              guests ? 'text-black' : 'text-[#BDBDBD]'
            }`}
            onClick={() => setFilters({ city: false, guest: true })}
          >
            <span className='text-xs font-bold uppercase'>Guests</span>
            <span>{guests > 0 ? guests : 'Add guests'}</span>
          </button>
          <div className=' hidden sm:flex sm:items-center sm:justify-center sm:gap-2 sm:px-2 sm:w-1/3'>
            <button
              className='flex items-center justify-center gap-4 text-white font-semibold bg-[#EB5757] rounded-xl border-none px-4 py-4 '
              onClick={() => handleQuery(currentCity, guests)}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: '#fff' }}
                className='bg-[#EB5757]'
              />
              <span>Search</span>
            </button>
          </div>
        </div>
        <div className='w-[90%] mx-auto flex flex-col sm:flex-row mt-8'>
          <div className='px-4 flex flex-col gap-6 sm:w-1/3'>
            {filters.city &&
              uniqueCities.map((city, index) => (
                <div
                  key={index}
                  className='flex items-center gap-2 cursor-pointer text-sm'
                  onClick={() => setCurrentCity(city)}
                >
                  <FontAwesomeIcon icon={faLocationDot} className='h-[20px]' />
                  <span>{city}, Finland</span>
                </div>
              ))}
          </div>
          <div className='px-4 flex flex-col gap-10 sm:w-1/3'>
            {filters.guest && (
              <>
                <GuestSection
                  label='Adults'
                  count={adults}
                  textLabel='Ages 13 or above'
                  onDecrement={() => decrementGuests(adults, setAdults)}
                  onIncrement={() => incrementGuests(adults, setAdults)}
                />
                <GuestSection
                  label='Children'
                  count={childrens}
                  textLabel='Ages 2 - 12'
                  onDecrement={() => decrementGuests(childrens, setChildrens)}
                  onIncrement={() => incrementGuests(childrens, setChildrens)}
                />
              </>
            )}
          </div>
        </div>
        <div className='w-full flex justify-center absolute bottom-10 sm:hidden'>
          <button
            className='w-[125px] py-4 flex items-center justify-center gap-4 border-none rounded-xl bg-[#EB5757] text-white'
            onClick={() => handleQuery(currentCity, guests)}
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: '#fff' }}
              className='bg-[#EB5757]'
            />
            <span>Search</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Menu
