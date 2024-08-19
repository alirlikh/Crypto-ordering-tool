import request from "../api"

export const fetchOrder = (market_id, type) => {
  return request.get(`v2/mth/actives/${market_id}/?type=${type}`)
}
// export const fetchBuyOrder = (market_id, type) => {
//   return request.get(`v2/mth/actives/${market_id}/?type=${type}`)
// }
export const fetchMatches = (market_id) => {
  return request.get(`v1/mth/matches/${market_id}/`)
}
