import request from "../api"

export const getSellOrder = (market_id) => {
  return request.get(`v2/mth/actives/${market_id}/?type=sell`)
}
export const getBuyOrder = (market_id) => {
  return request.get(`v2/mth/actives/${market_id}/?type=buy`)
}
export const getMatches = (market_id) => {
  return request.get(`v1/mth/matches/${market_id}/`)
}
