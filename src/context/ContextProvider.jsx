import { useState, useEffect } from 'react'
import { ApiContext } from './ApiContext'
import PropTypes from 'prop-types'
import apiData from '../../stays.json'

function ContextProvider({ children }) {
  const [data, setData] = useState(apiData)
  const [currentCity, setCurrentCity] = useState('')
  const [guests, setGuests] = useState(0)
  const [showMenu, setShowMenu] = useState(false)
  const [filters, setFilters] = useState({ city: true, guests: false })
  const [query, setQuery] = useState(null)

  useEffect(() => {
    console.log(data.length)
  }, [])

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <ApiContext.Provider
      value={{
        data,
        setData,
        currentCity,
        setCurrentCity,
        guests,
        setGuests,
        showMenu,
        setShowMenu,
        handleMenu,
        filters,
        setFilters,
        query,
        setQuery
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ContextProvider
