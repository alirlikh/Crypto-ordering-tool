import React from "react"

const OrderList = ({ data }) => {
  return (
    <div className="bg-background_color rounded-2xl w-full min-w-64 px-4 py-8 m-3 mx-auto text-regular_text">
      <div className=" flex flex-row *:px-4 *:py-2 *:text-center justify-between *:text-sm *:font-bold">
        <span>قیمت</span>
        <span>مقدار</span>
        <span>باقی</span>
      </div>
      {data.map((orders, index) => (
        <div
          key={index}
          className="flex flex-row *:px-4 *:py-2 *:text-center justify-between *:text-xs "
        >
          <span>{orders.price}</span>
          <span>{orders.amount}</span>
          <span>{orders.remain}</span>
        </div>
      ))}
    </div>
  )
}

export default OrderList
