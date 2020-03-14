import { useState } from 'react'
import Select from '@atlaskit/select'
import styled from 'styled-components'

import useStats from '../utils/useStats'

const SingleSelect = styled(Select)`
  display: inline-block;
  margin: 1rem;
  width: 20rem;
`

const Dropdown = ({ handleCountrySelect, stats }) => {
  const options = Object.entries(stats.countries).map(([country, code]) => {
    return { label: country, value: code }
  })

  return (
    <SingleSelect
      className="single-select"
      classNamePrefix="react-select"
      options={[{ label: 'Worldwide', value: 'worldwide' }, ...options]}
      placeholder="Choose a country"
      onChange={handleCountrySelect}
    />
  )
}

const CountrySelector = ({ handleCountrySelect }) => {
  const { stats, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  )

  return (
    <>
      {stats && (
        <Dropdown handleCountrySelect={handleCountrySelect} stats={stats} />
      )}
    </>
  )
}

export default CountrySelector
