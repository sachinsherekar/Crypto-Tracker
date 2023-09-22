import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../components/Coin/CoinInfo";
import LineChart from "../components/Coin/LineChart";
import PriceToggle from "../components/Coin/ToggleComponent";
import SelectDays from "../components/Coin/SelectDays";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import { coinObject } from "../functions/coinObject";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import { settingChartData } from "../functions/settingChartData";

function CoinPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState(120);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    setLoading(true);
    // const data = await getCoinData(id);
    // if (data) {
    //   coinObject(setCoin, data); //For Coin Obj being passed in the List
    //   const prices = await getCoinPrices(id, days, priceType);
    //   if (prices) {
    //     settingChartData(setChartData, prices, data);
    //     setLoading(false);
    //   }
    // }



    try {
      const data = await getCoinData(id);
      if (data) {
        const prices = await getCoinPrices(id, days, priceType);
        if (prices) {
          coinObject(setCoin, data); // Update coin state

          settingChartData(setChartData, prices, data); // Use data object

          setLoading(false);
        }
      }
    } catch (error) {
      // Handle errors appropriately
      console.error("Error fetching data:", error);
      setLoading(false);
    }



    
  };

  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices) {
      settingChartData(setChartData, prices, coin);
      setLoading(false);
    }
  };

  const handlePriceTypeChange = async (event) => {
    setLoading(true);
    setPriceType(event.target.value);
    const prices = await getCoinPrices(id, days, event.target.value);
    if (prices) {
      settingChartData(setChartData, prices, coin);
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      {loading || !coin?.id || !chartData ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coin} delay={0.1} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <PriceToggle
              handlePriceTypeChange={handlePriceTypeChange}
              priceType={priceType}
            />
            <LineChart chartData={chartData} priceType={priceType} />
          </div>
          <CoinInfo name={coin.name} desc={coin.desc} />
        </>
      )}
      {/* <Footer /> */}
    </div>
  );
}

export default CoinPage;