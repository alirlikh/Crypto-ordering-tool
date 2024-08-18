import request from "../api"

export const getOrder = (market_id) => {
  return request.get(`v2/mth/actives/${market_id}/?type=sell`)
}
