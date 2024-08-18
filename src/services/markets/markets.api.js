import request from "../api"

export const fetchMarkets = async () => {
  try {
    const response = await request.get("v1/mkt/markets/")

    return response.data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}
