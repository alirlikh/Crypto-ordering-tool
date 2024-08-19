import React, { useEffect, useMemo, useState } from "react"
import { fetchMarkets } from "../../services/markets/markets.api"
import axios from "axios"
import Table from "../../component/table/Table"
import Pagination from "../../component/pagination/Pagination"
import usePagination from "../../hook/UsePagination"

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

  if (loading) return <p>Loading...</p>
  return (
    <div className="relative overflow-x-auto shadow-md w-full md:w-3/4  text-center mx-auto rounded-lg">
      <div className="border-b bg-probe_chart_card  text-bold_text flex justify-start  *:p-3 *:mx-3">
        <button
          className={` ${activeTab === "IRT" ? "border-b-2 border-green_text text-lg" : ""}`}
          onClick={() => {
            setActiveTab("IRT")
          }}
        >
          تومان
        </button>
        <button
          className={`  ${activeTab === "USDT" ? "border-b-2 border-green_text text-lg" : ""}`}
          onClick={() => {
            setActiveTab("USDT")
          }}
        >
          تتر
        </button>
      </div>
      <Table tableData={currentData} />
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
