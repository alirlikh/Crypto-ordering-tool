import React, { useEffect, useMemo, useState } from "react"
import { fetchMarkets } from "../../services/markets/markets.api"
import Pagination from "../../component/pagination/Pagination"
import usePagination from "../../hook/UsePagination"
import Card from "../../component/card/Card"
import Loader from "../../component/loader/Loader"

function Markets() {
  const [marketData, setMarketData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("IRT")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchMarkets("v1/mkt/markets/")
        setMarketData(result.results)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const filteredData = useMemo(() => {
    if (!marketData || marketData.length === 0) return []
    return marketData.filter((item) => item.currency2.code === activeTab)
  }, [marketData, activeTab])

  const itemsPerPage = 10

  const { currentData, currentPage, totalPages, goToNextPage, goToPreviousPage, setPage } =
    usePagination(filteredData, itemsPerPage)

  if (loading) return <Loader />
  return (
    <div className="relative overflow-x-auto w-full md:w-3/4  text-center mx-auto rounded-lg pb-10">
      <div className=" bg-probe_chart_card  text-bold_text flex justify-start  *:py-3 *:px-6  rounded-md py-2 px-2 md:w-52 w-full ">
        <button
          className={`w-1/2 md:w-24 text-base outline-0 ${
            activeTab === "IRT"
              ? "border-b-2 border-green_text text-lg rounded bg-tab-selection font-extrabold"
              : ""
          }`}
          onClick={() => {
            setActiveTab("IRT")
          }}
        >
          تومان
        </button>
        <button
          className={`w-1/2 md:w-24 text-base outline-0 ${
            activeTab === "USDT"
              ? "border-b-2 border-green_text text-lg rounded bg-tab-selection font-extrabold"
              : ""
          }`}
          onClick={() => {
            setActiveTab("USDT")
          }}
        >
          تتر
        </button>
      </div>
      <Card tableData={currentData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setPage}
        onNext={goToNextPage}
        onPrevious={goToPreviousPage}
      />
    </div>
  )
}

export default Markets
