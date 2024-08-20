import React, { useEffect, useState } from "react"
import Decimal from "decimal.js"

const CurrencyResult = ({ data, orderResult, setOrderResult }) => {
  useEffect(() => {
    if (data && data.length > 0) {
      const total = data.reduce(
        (acc, item) => {
          const value = Number(item.value)
          const remain = Number(item.remain)
          acc.remain = acc.remain.plus(remain)
          acc.value = acc.value.plus(value)
          return acc
        },
        { remain: new Decimal(0), value: new Decimal(0) }
      )

      setOrderResult(total)
    }
  }, [data])

  return (
    <div className="bg-background_color rounded-2xl w-full min-w-64 py-8 m-3 mx-auto text-regular_text">
      <div className="flex flex-col px-6  text-sm font-bold">
        <div className="flex flex-row  justify-between items-center ">
          <span>جمع باقی</span>
          <div className="flex-1 border-b border-dashed border-gray-300 h-[1px]"></div>
          <span>{data && data.length > 0 ? new Decimal(orderResult.remain).toString() : "-"}</span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span> ارزش</span>
          <div className="flex-1 border-b border-dashed border-gray-300 h-[1px]"></div>
          <span>{data && data.length > 0 ? new Decimal(orderResult.value).toString() : "-"}</span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span>میانگین قیمت</span>
          <div className="flex-1 border-b border-dashed border-gray-300 h-[1px]"></div>
          <span>
            {data && data.length > 0
              ? new Decimal(orderResult.value).div(new Decimal(orderResult.remain)).toString()
              : "-"}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CurrencyResult
