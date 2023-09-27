import { useContext } from 'react'
import Logo from '../assets/logo.svg'
import { ApiContext } from '../context/ApiContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Menu from './Menu'

function Header() {
  const { currentCity, setFilters, showMenu, setShowMenu, guests } =
    useContext(ApiContext)

  return (
    <header className='w-[90%] mx-auto py-4 sm:flex sm:items-center sm:justify-between sm:py-8'>
      <div className='flex items-center'>
        <img src={Logo} alt='Windbnb' className='h-6' />
      </div>
      <div className='w-[100%] max-w-[400px] flex items-center mx-auto mt-5 text-xs border rounded-xl shadow-md sm:mx-0 sm:mt-0 sm:text-sm'>
        <button
          className={`w-[42.5%] border border-l-0 border-t-0 border-r-sm border-b-0 py-2 text-sm ${
            currentCity ? 'text-black' : 'text-[#BDBDBD]'
          }`}
          onClick={() => {
            setFilters({
              city: true,
              guest: false
            })
            setShowMenu(!showMenu)
          }}
        >
          {currentCity ? `${currentCity}, Finland` : 'Add city'}
        </button>
        <button
          className={`w-[42.5%] border border-l-0 border-t-0 border-r-sm border-b-0 py-2 text-sm ${
            guests ? 'text-black' : 'text-[#BDBDBD]'
          }`}
          onClick={() => {
            setFilters({
              city: false,
              guest: true
            })
            setShowMenu(!showMenu)
          }}
        >
          {guests > 0 ? guests : 'Add guests'}
        </button>
        <button className='w-[15%] py-2' onClick={() => setShowMenu(!showMenu)}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: '#eb5757' }}
          />{' '}
        </button>
      </div>
      <Menu />
    </header>
  )
}

export default Header
