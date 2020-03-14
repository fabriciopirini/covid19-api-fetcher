import { useState, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'

import CountrySelector from '../components/CountrySelector'
import Stats from '../components/Stats'
import useStats from '../utils/useStats'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

const IndexPage = () => {
  const [country, setCountry] = useState({
    name: 'Worldwide',
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
      <GlobalStyle />
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
