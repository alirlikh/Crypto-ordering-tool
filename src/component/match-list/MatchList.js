import React, { useEffect, useState } from "react"

const MatchList = ({ data }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (data && data.time != "") {
      setLoading(false)
    }
  }, [data])

  return (
    <div className="bg-background_color rounded-2xl w-full min-w-64 px-4 py-8 m-3 mx-auto text-regular_text">
      <div className=" flex flex-row *:px-4 *:py-2 *:text-center justify-between *:text-sm *:font-bold">
        <span>قیمت</span>
        <span>مقدار</span>
        <span>زمان</span>
      </div>
      {loading ? (
        <div className="text-center h-16 mt-4">
          <p className="text-gray-500 text-base">در حال بارگذاری...</p>
        </div>
      ) : data && data.length > 0 ? (
        data.map((orders, index) => (
          <div
            key={index}
            className="flex flex-row *:px-4 *:py-2 *:text-center justify-between *:text-xs "
          >
            <span>{orders.price && orders.price}</span>
            <span>{orders.match_amount && orders.match_amount}</span>
            <span>
              {orders.time &&
                new Date(orders.time * 1000).toLocaleString("fa", {
                  timeStyle: "short"
                })}
            </span>
          </div>
        ))
      ) : (
        <div className="text-center h-16 mt-4">
          <p className="text-red_text text-base">داده ای برای نمایش وجود ندارد</p>
        </div>
      )}
    </div>
  )
}

export default MatchList
