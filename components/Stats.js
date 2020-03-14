import styled from 'styled-components'

import useStats from '../utils/useStats'
import CountrySelector from './CountrySelector'

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`

const StatBlock = styled.div`
  background: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`

const Stats = ({ country, countryName, baseUrl, handleCountrySelect }) => {
  const Error = ({ error }) => (
    <>
      <h2>Error</h2>
      <span>{error}</span>
    </>
  )

  const Loading = () => (
    <>
      <h2>Loading...</h2>
    </>
  )

  const { stats, loading, error } =
    country === 'worldwide'
      ? useStats(baseUrl)
      : useStats(`${baseUrl}/countries/${country}`)

  if (error) {
    return <Error error={error} />
  }

  return (
    <>
      {loading && <Loading />}
      {stats && !loading && (
        <>
          <StatGrid>
            <StatBlock>
              <strong>Confirmed: </strong>
              <span>{stats.confirmed.value}</span>
            </StatBlock>
            <StatBlock>
              <strong>Recovered: </strong>
              <span>{stats.recovered.value}</span>
            </StatBlock>
            <StatBlock>
              <strong>Deaths: </strong>
              <span>{stats.deaths.value}</span>
            </StatBlock>
          </StatGrid>
        </>
      )}
    </>
  )
}

export default Stats
