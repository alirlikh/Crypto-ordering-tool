import React, { useState } from "react"
import Button from "../button/Button"

const AddOrder = () => {
  const [percentageAmount, setPercentageAmount] = useState()
  const [error, setError] = useState()

  const checkInput = (e) => {
    const inputValue = e.target.value
    setPercentageAmount(inputValue)
    if (inputValue === "") {
      setError("لطفا مقدار را وارد نمایید")
    } else if (Number(inputValue) > 100 && 0 < Number(inputValue)) {
      setError("لطفا مقدار را بین بازه 0 تا 100 وارد نمایید")
    } else {
      setError("")
    }
  }

  const handleSubmit = () => {
    console.log(percentageAmount)
  }

  return (
    <div className="bg-background_color rounded-2xl w-full px-4 py-4 m-4 mx-auto ">
      <div className="flex flex-row justify-around">
        <div>
          <label htmlFor="userData" className=""></label>
          <input
            className="md:w-72 h-14 w-32 rounded focus:outline-0 active:outline-0 p-2"
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
        <Button onClick={handleSubmit}>ثبت</Button>
      </div>

      {error && <div className="text-red_text">{error}</div>}
    </div>
  )
}

export default AddOrder
