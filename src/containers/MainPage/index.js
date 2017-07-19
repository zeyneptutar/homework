import React, { Component } from  'react';
import { connect } from 'react-redux';
import { setPieChartDataRequest } from '../../actions/chart';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import PieChart from "react-chartjs-2";
// const PieChart = require("react-chartjs").Pie;

class MainPage extends Component {
  componentDidMount(){
    console.log('componentDidMount');
    this.props.setPieChartDataRequest();
  }

  render() {
    const data = {
      labels: [
        'Admin user count',
        'Demo user count',
      ],
      datasets: [{
        data: [this.props.chart.adminCount, this.props.chart.demoCount],
        backgroundColor: [
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#36A2EB',
        '#FFCE56'
        ]
      }]
    };
    
    return (
        <div>
          <Header isLoggedIn={this.props.login.success}/>
          <SideBar />
          <div className="col-sm-9">
            <h2 style={{textAlign: "center"}}>User Count By Role</h2>
            <PieChart data={data} width="300" height="100"/>
          </div>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
    chart: state.chart,
  };
}

export default connect(mapStateToProps, {
  setPieChartDataRequest
})(MainPage);

