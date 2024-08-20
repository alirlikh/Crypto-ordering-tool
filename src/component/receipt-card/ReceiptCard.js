import Decimal from "decimal.js"
import React, { useEffect, useState } from "react"
import Button from "../button/Button"

export const ReceiptCard = ({ percentageValue, orderResult, setPayment }) => {
  const [average, setAverage] = useState(0)
  const [volume, setVolume] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let avg = new Decimal(orderResult.value).div(new Decimal(orderResult.remain))
    let vlm = new Decimal(orderResult.remain).mul(percentageValue).div(100)
    let total = new Decimal(avg).mul(new Decimal(vlm))

    setAverage(avg.toString())
    setVolume(vlm.toString())
    setTotalPrice(total.toString())
  }, [])

  return (
    <div className="bg-background_color rounded-2xl w-full min-w-64 px-4 py-8 m-3 mx-auto text-regular_text">
      <div className="flex flex-col">
        <h3 className="text-base font-bold text-center">سفارش</h3>
        <div className="flex flex-row justify-between items-center">
          <span className="m-2">درصد خواسته:</span>
          <div className="flex-1 border-b border-dashed border-gray-300 h-[1px]"></div>
          <span className="m-2">%{percentageValue}</span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="m-2">حجم:</span>
          <div className="flex-1 border-b border-dashed border-gray-300 h-[1px]"></div>
          <span className="m-2">{volume}</span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="m-2">مبلغ میانگین هر واحد:</span>
          <div className="flex-1 border-b border-dashed border-gray-300 h-[1px] "></div>
          <span className="m-2">{average}</span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="m-2">هزینه کل:</span>
          <div className="flex-1 border-b border-dashed border-gray-300 h-[1px]"></div>

          <span className="m-2">{totalPrice}</span>
        </div>
        <div className="flex flex-row justify-center items-center">
          <Button onClick={() => setPayment(false)} className={"bg-tab-red"}>
            خروج
          </Button>
        </div>
      </div>
    </div>
  )
}
