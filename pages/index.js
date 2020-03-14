import { useState, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'

import CountrySelector from '../components/CountrySelector'
import Stats from '../components/Stats'
import useStats from '../utils/useStats'
import Header from '../components/Header'

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

  const handleCountrySelect = selectedOption => {
    const name = selectedOption.label
    const code = selectedOption.value

    setCountry({
      name,
      code,
    })
  }

  return (
    <>
      <GlobalStyle />
      <Header
        countryName={country.name}
        handleCountrySelect={handleCountrySelect}
      />
      <Stats
        baseUrl={baseUrl}
        country={country.code}
        countryName={country.name}
        handleCountrySelect={handleCountrySelect}
      />
    </>
  )
}

export default IndexPage
