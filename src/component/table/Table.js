import React, { useState } from "react"
import Link from "react-router-dom"
import LinkButton from "../link-button/LinkButton"

const Table = ({ tableData }) => {
  const results = tableData

  return (
    <table className="w-full text-sm text-right ">
      <thead className="text-lg  uppercase  bg-probe_chart_card text-regular_text border-b">
        <tr className="*:text-nowrap">
          <th scope="col" className="px-6 pr-10 py-4">
            نام رمز ارز
          </th>
          <th scope="col" className="px-6 py-4">
            آخرین قیمت
          </th>
          <th scope="col" className="px-6 py-4">
            تغییرات
          </th>
          <th scope="col" className="px-6 py-4">
            نمودار
          </th>
          <th scope="col" className="px-6 py-4">
            {/* <span className="sr-only">Edit</span> */}
          </th>
        </tr>
      </thead>
      <tbody>
        {results.length > 0 ? (
          results.map((item) => (
            <tr key={item.id} className=" bg-probe_chart_card hover:bg-hover-col h-16  opacity-95">
              <td
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-regular_text "
              >
                <div className="flex flex-row ">
                  <div className="mx-2 p-2 shrink-0 relative">
                    {" "}
                    <img
                      src={item.currency1.image ? item.currency1.image : ""}
                      alt="crypto image"
                      className="w-10"
                    />
                    <img
                      src={item.currency2.image ? item.currency2.image : ""}
                      alt="crypto image"
                      className="absolute bottom-2 right-2"
                      width={20}
                    />
                  </div>
                  <div className="flex flex-col mx-2 p-2">
                    <span className="text-bold_text text-xl">{item.currency1.title_fa}</span>
                    <span>
                      {item.currency1.code}/{item.currency2.code}
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-bold_text my-2">{item.price}</td>
              <td
                className={`px-6 py-4 text-bold_text my-2 ${
                  item.price_info.change > 0 ? "text-green_text" : "text-red_text"
                }`}
              >
                {item.price_info.change}%
              </td>
              <td className="px-6 py-4 text-bold_text my-2">{item.name}</td>
              <td className="px-6 py-4 text-bold_text text-right my-2">
                <LinkButton href={`orders/${item.id}`} name={"مشاهده"} />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className="text-center h-16">
              <p className="text-red_text">داده ای برای نمایش وجود ندارد</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Table
