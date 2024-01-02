import React,{useState,useEffect} from "react";
import "../styles/Dashboard.css";
import Sidebar from "../layouts/Sidebar";
import DashboardIcon1 from "../assets/DashbaordIcon1.svg";
import DashboardIcon2 from "../assets/DashbaordIcon2.svg";
import DashboardIcon3 from "../assets/DashbaordIcon3.svg";
import DashboardIcon4 from "../assets/DashbaordIcon4.svg";
import SalesOverviewChart from "../components/charts/SalesOverViewChart";
import StockOverViewChart from "../components/charts/StockOverViewChart";
import ProductOverViewChart from "../components/charts/ProductOverViewChart";
import axios from "axios";


function Dashboard() {


  const [categoriesData, setCategoriesData] = useState([]);
  const [brandData, setBrandData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const [totalSales, setTotalSales] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/category");
        setCategoriesData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


 


  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/brand");
        setBrandData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData2();
  }, []);

  useEffect(() => {
    const fetchData3 = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/product");
        setProductData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData3();
  }, []);

  useEffect(() => {
    const fetchData4 = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/inventorydata");
        setInventoryData(response.data);
        const sales = response.data.reduce((total, item) => {
          return total + item.price * item.inventory;
        }, 0);
  
        setTotalSales(sales);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData4();
  }, []);

  const activeCategoriesCount = categoriesData.filter(category => category.status === 'Active').length;
  const activeBrandCount = brandData.filter(brand => brand.status === 'Active').length;
  const activeProductCount = productData.products ? productData.products.length : 0;

  return (
    <Sidebar>
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <div className="DashbaordContainerTop">
              <h4>Sales Overview</h4>
              <SalesOverviewChart />
            </div>
          </div>
        </div>
        <div className="d-flex row mb-4">
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <div className="d-flex DashboardSummaryCount">
              <div
                className="col-1 SideCardcolor"
                style={{ background: "#E00000" }}
              ></div>
              <div className="col-7 d-flex flex-column align-items-center justify-content-md-center">
                <h3>Total Value</h3>
                <p>${totalSales.toFixed(2)}</p>
              </div>
              <div className="col-5 d-flex align-items-center justify-content-md-center">
                <img src={DashboardIcon1} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <div className="d-flex DashboardSummaryCount">
              <div
                className="col-1 SideCardcolor"
                style={{ background: "#0400E0" }}
              ></div>
              <div className="col-7 d-flex flex-column align-items-center justify-content-md-center">
                <h3>Products</h3>
                <p>{activeProductCount}</p>
              </div>
              <div className="col-5 d-flex align-items-center justify-content-md-center">
                <img src={DashboardIcon2} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <div className="d-flex DashboardSummaryCount">
              <div
                className="col-1 SideCardcolor"
                style={{ background: "#00E009" }}
              ></div>
              <div className="col-7 d-flex flex-column align-items-center justify-content-md-center">
                <h3>Categories</h3>
                <p>{activeCategoriesCount}</p>
              </div>
              <div className="col-5 d-flex align-items-center justify-content-md-center">
                <img src={DashboardIcon3} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <div className="d-flex DashboardSummaryCount">
              <div
                className="col-1 SideCardcolor"
                style={{ background: "#9800E0" }}
              ></div>
              <div className="col-7 d-flex flex-column align-items-center justify-content-md-center">
                <h3>Brands</h3>
                <p>{activeBrandCount}</p>
              </div>
              <div className="col-5 d-flex align-items-center justify-content-md-center">
                <img src={DashboardIcon4} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex row mb-4">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <div className="DashboardGraphContainer">
              <h4>Category Overview</h4>
              <StockOverViewChart />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <div className="DashboardGraphContainer">
              <h4>Brand Overview</h4>
              <ProductOverViewChart />
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default Dashboard;
