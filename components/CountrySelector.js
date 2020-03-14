import { useState, useRef } from 'react'

import useStats from '../utils/useStats'

const Dropdown = ({ handleCountrySelect, selectEl, stats }) => {
  return (
    <select
      defaultValue="worldwide"
      onChange={() => handleCountrySelect(selectEl)}
      ref={selectEl}
    >
      <option key="worldwide" value="worldwide">
        Worldwide
      </option>
      {Object.entries(stats.countries).map(([country, code]) => (
        <option key={`${country}-${code}`} value={code} data-name={country}>
          {country}
        </option>
      ))}
    </select>
  )
}

const CountrySelector = ({ handleCountrySelect }) => {
  const { stats, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  )
  const selectEl = useRef(null)

  return (
    <>
      <span>Select Country: </span>
      {stats && (
        <Dropdown
          handleCountrySelect={handleCountrySelect}
          selectEl={selectEl}
          stats={stats}
        />
      )}
    </>
  )
}

export default CountrySelector
