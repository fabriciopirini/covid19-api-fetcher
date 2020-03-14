import useStats from '../utils/useStats'

const Stats = ({ country, countryName, baseUrl }) => {
  const { stats, loading, error } =
    country === 'worldwide'
      ? useStats(baseUrl)
      : useStats(`${baseUrl}/countries/${country}`)

  if (error) {
    return (
      <div>
        <h2>Error: </h2>
        <span>{error}</span>
      </div>
    )
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {stats && !loading && (
        <>
          <h2>Stats for {countryName}:</h2>
          <div>
            <strong>Confirmed: </strong>
            <span>{stats.confirmed.value}</span>
          </div>
          <div>
            <strong>Recovered: </strong>
            <span>{stats.recovered.value}</span>
          </div>
          <div>
            <strong>Deaths: </strong>
            <span>{stats.deaths.value}</span>
          </div>
        </>
      )}
    </>
  )
}

export default Stats
