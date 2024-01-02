import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

class SalesOverviewChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Price',
          data: [],
        },
        {
          name: 'Selling Price',
          data: [],
        },
      ],
      options: {
        chart: {
          height: 300,
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'category',
          categories: [],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      },
    };
  }

  componentDidMount() {
  
    axios.get('http://127.0.0.1:8000/inventorydata')
      .then((response) => {
        const inventoryData = response.data;
        const categories = [];
        const prices = [];
        const sellingPrices = [];

        inventoryData.forEach((data) => {
          const price = data.price;
          const sellingPrice = (price * (1 + parseFloat(data.taxrate) / 100)).toFixed(2);

          categories.push(data.product);
          prices.push(price);
          sellingPrices.push(sellingPrice);
        });
      
        this.setState({
          series: [
            { name: 'Price', data: prices },
            { name: 'Selling Price', data: sellingPrices },
          ],
          options: {
            ...this.state.options,
            xaxis: {
              ...this.state.options.xaxis,
              categories: categories,
            },
          },
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={250} />
      </div>
    );
  }
}

export default SalesOverviewChart;
