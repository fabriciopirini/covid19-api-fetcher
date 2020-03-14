import { useState, useEffect } from 'react'

const useStats = url => {
  const [stats, setStats] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError()
      const data = await fetch(url)
        .then(res => {
          if (res.status >= 400 && res.status < 600) {
            throw 'Country not available right now'
          }
          return res.json()
        })
        .then(data => {
          setStats(data)
        })
        .catch(err => {
          setError(err)
        })
      setLoading(false)
    }
    fetchData()
  }, [url])

  return {
    stats,
    loading,
    error,
  }
}

export default useStats
