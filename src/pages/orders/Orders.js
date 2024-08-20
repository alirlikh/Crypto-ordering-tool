import React, { useEffect, useMemo, useState } from "react"
import OrderList from "../../component/order-list/OrderList"
import { fetchOrder, fetchMatches } from "../../services/orders/orders.api"
import { Link, NavLink, useParams } from "react-router-dom"
import AddOrder from "../../component/add-order/AddOrder"
import MatchList from "../../component/match-list/MatchList"
import CurrencyResult from "../../component/currency-result/CurrencyResult"
import { ReceiptCard } from "../../component/receipt-card/ReceiptCard"
import Decimal from "decimal.js"
import Loader from "../../component/loader/Loader"
import { Return } from "../../assets/icon/Retun"

function Orders() {
  const [activeTab, setActiveTab] = useState("buy")
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState()
  const [orderResult, setOrderResult] = useState({ remain: new Decimal(0), value: new Decimal(0) })
  const [userInputValue, setUserInputValue] = useState(0)
  const [LocalData, setLocalData] = useState(null)
  const [payment, setPayment] = useState(false)
  const { currencyId } = useParams()

  const tabs = [
    { id: 1, name: "خرید", code: "buy" },
    { id: 2, name: "فروش", code: "sell" },
    { id: 3, name: "معاملات", code: "matches" }
  ]

  const activeTabObject = useMemo(() => {
    return tabs.find((tab) => tab.code === activeTab)
  }, [activeTab])

  const handleTabClick = (e) => {
    setActiveTab(e.target.id)
  }

  const getLocalData = () => {
    let ld = JSON.parse(localStorage.getItem("coin"))
    setLocalData(ld)
  }

  const removeLocalData = () => {
    localStorage.removeItem("coin")
  }

  const getOrders = async (id, type) => {
    try {
      const response = await fetchOrder(id, type)
      setOrders(response.data.orders.slice(0, 10))
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const getMatches = async (id) => {
    try {
      const response = await fetchMatches(id)
      setOrders(response.data.slice(0, 10))
      setLoading(false)
    } catch (error) {
      console.log(error)

      setLoading(false)
    }
  }

  useEffect(() => {
    const fetchData = () => {
      if (activeTab === "matches") {
        getMatches(currencyId)
      } else if (!payment) {
        getOrders(currencyId, activeTab)
      } else {
        // برای ثبت سفارش دیتا لازم دریافت میشود
        getOrders(currencyId, activeTab === "sell" ? "buy" : "sell")
      }
    }
    getLocalData()
    fetchData()
    const intervalId = setInterval(fetchData, 3000)
    return () => clearInterval(intervalId)
  }, [activeTab, payment])

  if (loading) return <Loader />

  return (
    <div>
      <div className="bg-probe_chart_card flex flex-col justify-center items-center sm:w-full   md:w-1/2 mx-auto rounded-lg md:px-12 md:py-6 px-4 py-3">
        <div className="self-start">
          <NavLink to={"/"} onClick={removeLocalData}>
            <Return color={"#666666"} />
          </NavLink>
        </div>
        <div className=" flex flex-row md:flex-row *:px-6  *:py-1  *:w-28 justify-center items-center m-4 *:text-center border-b-2 border-gray-300 pb-2">
          {tabs.map((tab) => (
            <button
              id={tab.code}
              key={tab.id}
              className={` text-bold_text ${
                activeTab === tab.code
                  ? " text-xl font-bold rounded border-b-2  bg-tab-selection"
                  : "text-lg font-medium"
              } ${
                activeTab === "sell"
                  ? "border-tab-red"
                  : activeTab === "buy"
                  ? "border-green_text"
                  : "border-bold_text"
              }`}
              onClick={handleTabClick}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="flex flex-row items-center">
          <div>
            <img
              src={LocalData && LocalData.currency1.image ? LocalData.currency1.image : ""}
              alt="crypto image"
              className="w-10"
            />
          </div>
          <div className="flex flex-col mx-2 p-2">
            <span className="text-bold_text text-sm font-extrabold">
              {LocalData && LocalData.currency1.title_fa}
            </span>
            <span className="text-bold_text">
              {LocalData && LocalData.currency1.code}/{LocalData && LocalData.currency2.code}
            </span>
          </div>
        </div>
        <div className="w-full ">
          {activeTab != "matches" ? (
            <>
              <OrderList data={orders} />
              <CurrencyResult
                data={orders}
                orderResult={orderResult}
                setOrderResult={setOrderResult}
              />

              {!payment && (
                <AddOrder
                  userInputValue={userInputValue}
                  setUserInputValue={setUserInputValue}
                  setPayment={setPayment}
                  oredersLength={orders.length}
                  activeTabObject={activeTabObject}
                />
              )}
              {payment && (
                <ReceiptCard
                  percentageValue={userInputValue}
                  orderResult={orderResult}
                  setPayment={setPayment}
                  activeTabObject={activeTabObject}
                />
              )}
            </>
          ) : (
            <>
              <MatchList data={orders} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Orders
