import React, { useState } from "react"
import Button from "../button/Button"

const AddOrder = ({
  setUserInputValue,
  userInputValue,
  setPayment,
  oredersLength,
  activeTabObject
}) => {
  const [percentageAmount, setPercentageAmount] = useState()
  const [error, setError] = useState()

  const checkInput = (e) => {
    const inputValue = e.target.value
    setPercentageAmount(inputValue)

    if (oredersLength === 0) {
      setError("تراکنش امکان پذیر نمی یاشد")
    } else {
      if (inputValue === "") {
        setError("لطفا مقدار را وارد نمایید")
      } else if (Number(inputValue) > 100) {
        setError("لطفا مقدار را بین بازه 0 تا 100 وارد نمایید")
      } else if (Number(inputValue) < 0) {
        setError("لطفا مقدار را بین بازه 0 تا 100 وارد نمایید")
      } else {
        setError("")
      }
    }
  }

  const handleSubmit = () => {
    if (!error) {
      setUserInputValue(percentageAmount)
      setPayment(true)
    }
  }

  return (
    <div className="bg-background_color rounded-2xl w-full px-4 py-4 m-4 mx-auto ">
      <div className="flex flex-col justify-around md:flex-row items-center *:my-2">
        <div>
          <label htmlFor="userData" className=""></label>
          <input
            // w-32 md:w-72
            className=" h-14 sm:w-64 w-52 md:w-48 lg:w-72 rounded focus:outline-0 active:outline-0 outline-0 p-2 text-center ltr-grid bg-input-color text-bold_text"
            name="userData"
            placeholder="مقدار درصدی مورد نظر را وارد کنید"
            type="number"
            min={0}
            max={100}
            step={1}
            value={percentageAmount}
            onChange={checkInput}
          />
        </div>
        <Button
          disabled={!percentageAmount}
          onClick={handleSubmit}
          className={`${activeTabObject.code === "sell" ? "bg-tab-red" : ""} ${
            percentageAmount ? "" : "opacity-45"
          }`}
        >
          {activeTabObject.name}
        </Button>
      </div>

      {error && <div className="text-red_text text-right p-2 m-1 relative -left-1/4">{error}</div>}
    </div>
  )
}

export default AddOrder
