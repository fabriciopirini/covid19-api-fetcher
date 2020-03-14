import { useState, useEffect } from 'react'

const useStats = url => {
  const [stats, setStats] = useState()
  useEffect(() => {
    async function fetchData() {
      console.log('Fetching data')
      const data = await fetch(url).then(data => data.json())
      setStats(data)
    }
    fetchData()
  }, [stats])
  return stats
}

export default useStats
