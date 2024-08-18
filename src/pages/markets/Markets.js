import React, { useEffect, useState } from "react"
import { fetchMarkets } from "../../services/markets/markets.api"
import axios from "axios"

function Markets() {
  const [marketData, setMarketData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchMarkets("v1/mkt/markets/")
        setMarketData(result)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p>Loading...</p>
  return (
    <>
      {marketData.results.map((item, index) => (
        <div key={index}>{item.title_fa}</div>
      ))}
    </>
  )
}

export default Markets
