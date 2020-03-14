import { useState, useRef } from 'react'

import useStats from '../utils/useStats'

const CountrySelector = ({ handleCountrySelect }) => {
  const { stats, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  )
  const selectEl = useRef(null)

  return (
    <>
      <span>Select Country: </span>
      {stats && (
        <>
          <select
            defaultValue="worldwide"
            onChange={() => handleCountrySelect(selectEl)}
            ref={selectEl}
          >
            <option key="worldwide" value="worldwide">
              Worldwide
            </option>
            {Object.entries(stats.countries).map(([country, code]) => (
              <option
                key={`${country}-${code}`}
                value={code}
                data-name={country}
              >
                {country}
              </option>
            ))}
          </select>
        </>
      )}
    </>
  )
}

export default CountrySelector
