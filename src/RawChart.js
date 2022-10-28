import React, { Component } from "react";
import Chart from "react-apexcharts";
class RawChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [0, 1, 0, 1, 0, 60, 70, 91]
        },{
          name: "series-2",
          data: [1, 0, 5, 22, 12, 4, 60, 11]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="1880"
              height='352'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RawChart;