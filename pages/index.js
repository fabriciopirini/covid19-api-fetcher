import { useState, useEffect } from 'react'

import useStats from '../utils/useStats'
import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'

const IndexPage = () => {
  const [country, setCountry] = useState({
    name: 'worldwide',
    code: 'worldwide',
  })
  const baseUrl = 'https://covid19.mathdro.id/api'

  const handleCountrySelect = selectEl => {
    const dropdown = selectEl.current
    const name = dropdown.options[dropdown.selectedIndex].dataset.name
    const code = dropdown.value

    setCountry({
      name,
      code,
    })
  }

  return (
    <>
      <CountrySelector handleCountrySelect={handleCountrySelect} />
      <Stats
        country={country.code}
        countryName={country.name}
        baseUrl={baseUrl}
      />
    </>
  )
}

export default IndexPage
