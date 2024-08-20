import React from "react"
import LinkButton from "../link-button/LinkButton"
import Decimal from "decimal.js"
import { NavLink } from "react-router-dom"

const Card = ({ tableData }) => {
  const results = tableData

  const setLocalData = (data) => {
    let tmp = JSON.stringify(data)
    let coin = localStorage.getItem("coin")
    if (!!coin) {
      localStorage.removeItem("coin")
    }

    localStorage.setItem("coin", tmp)
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center p-2 my-2 bg-probe_chart_card text-regular_text *:text-sm rounded-md">
        <div className="flex flex-row w-full justify-between items-center px-4 pb-2 border-b-2 border-gray-300 ">
          <div className="md:w-1/6  w-2/5">
            <span>نام رمز ارز</span>
          </div>
          <div className="md:w-1/5  w-1/3">
            <span>آخرین قیمت </span>
          </div>
          <div className="md:w-1/6 w-1/4 text-sm">
            <span>تغییرات</span>
          </div>
          {/* <div className="hidden md:block md:w-1/5 ">
            <span>نمودار</span>
          </div> */}
          <div className="hidden md:block md:w-1/5">
            <span> </span>
          </div>
        </div>
        {results.length > 0 ? (
          results.map((item, index) => (
            <NavLink
              key={item.id}
              to={`orders/${item.id}`}
              className={"flex flex-row w-full justify-between items-center  "}
              onClick={() => setLocalData(item)}
            >
              <div
                key={item.id}
                className="flex flex-row w-full justify-between items-center px-4 *:ltr-grid *:text-center  hover:bg-hover-col "
              >
                <div className="flex flex-row  md:w-1/5  w-2/5">
                  <div className=" shrink-0 relative">
                    <img
                      src={item.currency1.image ? item.currency1.image : ""}
                      alt={item.currency1.title_fa}
                      className="w-10"
                    />
                    <img
                      src={item.currency2.image ? item.currency2.image : ""}
                      alt={item.currency2.title_fa}
                      className="absolute bottom-2 right-0"
                      width={20}
                    />
                  </div>
                  <div className="flex flex-col mx-2 p-2">
                    <span className="text-bold_text text-sm font-extrabold">
                      {item.currency1.title_fa}
                    </span>
                    <span>
                      {item.currency1.code}/{item.currency2.code}
                    </span>
                  </div>
                </div>
                <div className="tab2  ltr-grid md:w-1/5  w-1/3">
                  <span>{item.price ? new Decimal(item.price).toFixed().toString() : "-"}</span>
                </div>
                <div className="tab3 md:w-1/6 w-1/4 ltr-grid">
                  <span
                    className={` px-6 py-4 text-bold_text my-2 ltr-grid ${
                      item.price_info.change > 0 ? "text-green_text" : "text-red_text"
                    }`}
                  >
                    {item.price_info.change
                      ? `%${new Decimal(item.price_info.change).toFixed(2).toString()}`
                      : "-"}
                  </span>
                </div>
                {/* <div className="tab4  hidden md:block  md:w-1/5">
              <span>نمودار</span>
            </div> */}
                <div className="tab5  md:w-1/5 px-6 py-4 text-bold_text text-right my-2 hidden md:block">
                  <button
                    onClick={() => setLocalData(item)}
                    className={
                      "bg-btn-green transition-all duration-150 hover:brightness-[0.8] text-black font-medium py-3 px-6 rounded"
                    }
                  >
                    مشاهده
                  </button>
                </div>
              </div>
            </NavLink>
          ))
        ) : (
          <div>
            <span className="text-center h-16">
              <p className="text-red_text">داده ای برای نمایش وجود ندارد</p>
            </span>
          </div>
        )}
      </div>
    </>
  )
}

export default Card
