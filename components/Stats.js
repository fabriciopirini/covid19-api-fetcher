import styled from 'styled-components'

import useStats from '../utils/useStats'

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

const Stats = ({ country, countryName, baseUrl }) => {
  const Header = () => <h1>Cases of Coronavirus ({countryName})</h1>

  const { stats, loading, error } =
    country === 'worldwide'
      ? useStats(baseUrl)
      : useStats(`${baseUrl}/countries/${country}`)

  if (error) {
    return (
      <div>
        <Header />
        <h2>Error</h2>
        <span>{error}</span>
      </div>
    )
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {stats && !loading && (
        <>
          <Header />
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
