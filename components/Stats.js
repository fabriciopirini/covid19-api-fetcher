import useStats from '../utils/useStats'

const Stats = () => {
  const stats = useStats('https://covid19.mathdro.id/api')
  return (
    <>
      {!stats && <p>Loading...</p>}
      {stats && (
        <>
          <h1>Stats:</h1>
          <h2>Confirmed: </h2>
          <span>{stats.confirmed.value}</span>
          <h2>Recovered: </h2>
          <span>{stats.recovered.value}</span>
          <h2>Deaths: </h2>
          <span>{stats.deaths.value}</span>
        </>
      )}
    </>
  )
}

export default Stats
