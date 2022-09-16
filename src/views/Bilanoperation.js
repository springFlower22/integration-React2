
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
// core components

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardEmailStatisticsChart2,
  dashboardNASDAQChart,
} from "variables/charts2.js";




function BilanOperation() {
  return (
    <>
  <div className="content">
  <CardTitle tag="h2">Opération 1</CardTitle>
   <Row>
    <Col md="6">
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Diction (2020-03)</CardTitle>
        <CardTitle tag="h5">Ventes</CardTitle>
        <p className="fa fa-square text-info">  42</p>
        <CardTitle tag="h5">CA</CardTitle>
        <p className="fa fa-square text-warning">  582</p>
      </CardHeader>
      <CardBody style={{ height: "266px" }}>
        <Pie
        data={dashboardEmailStatisticsChart.data}
        options={dashboardEmailStatisticsChart.options}
        />
      </CardBody>
      <CardFooter>
        <div className="legend">
          <i className="h5"/> {"Envoi |"}
          <i className="h5" /> {"Ouverture |"}
          <i className="h5" /> {"Clic"}
        </div>
        <hr />
        <div className="stats">
          <i className="fa fa-circle text-danger" />{"69%"}
          <i className="fa fa-circle text-info" /> {"23%"}
          <i className="fa fa-circle text-warning" /> {"8%"}
        </div>
      </CardFooter>
    </Card>
  </Col>
  <Col md="6">
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Parler vite (2020-02)</CardTitle>
        <CardTitle tag="h5">Ventes</CardTitle>
        <p className="fa fa-square text-info">  50</p>
        <CardTitle tag="h5">CA</CardTitle>
        <p className="fa fa-square text-warning">  3950</p>
      </CardHeader>
      <CardBody style={{ height: "266px" }}>
        <Pie
        data={dashboardEmailStatisticsChart2.data}
        options={dashboardEmailStatisticsChart2.options}
        />
      </CardBody>
      <CardFooter>
        <div className="legend">
          <i className="h5"/> {"Envoi |"}
          <i className="h5" /> {"Ouverture |"}
          <i className="h5" /> {"Clic"}
        </div>
        <hr />
        <div className="stats">
          <i className="fa fa-circle text-danger" />{"75%"}
          <i className="fa fa-circle text-info" /> {"17%"}
          <i className="fa fa-circle text-warning" /> {"8%"}
        </div>
      </CardFooter>
    </Card>
  </Col>
  </Row>
</div>
    </>
  );
};

export default BilanOperation;
