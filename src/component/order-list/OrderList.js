import React, { useEffect, useState } from "react"

const OrderList = ({ data }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (data || data.length > 0) {
      setLoading(false)
    }
  }, [data])

  return (
    <div className="bg-background_color rounded-2xl w-full min-w-64 px-4 py-8 m-3 mx-auto text-regular_text">
      <div className=" flex flex-row *:px-4 *:py-2 *:text-center justify-between *:text-sm *:font-bold">
        <span className="w-[30%]">قیمت</span>
        <span className="w-[30%]">مقدار</span>
        <span className="w-[30%]">باقی</span>
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
            <span className="w-[30%]">{orders.price}</span>
            <span className="w-[30%]">{orders.amount}</span>
            <span className="w-[30%]">{orders.remain}</span>
          </div>
        ))
      ) : (
        <div>
          <span className="text-center h-16 mt-4">
            <p className="text-red_text text-base">داده ای برای نمایش وجود ندارد</p>
          </span>
        </div>
      )}
    </div>
  )
}

export default OrderList
