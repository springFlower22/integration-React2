
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

import { Reseauxsociaux } from "variables/charts2.js";
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
  dashboardNASDAQChart,
} from "variables/charts2.js";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Diagramme',
    },
  },
};

const labels = ['#1', '#1b', '#2', '#3', '#4', '#5', '#6','#7'];

const data = {
  labels,
  datasets: [
  {
    label: 'E',
    data: [1603, 919, 1676, 1451, 1331, 1946, 0,0,],
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
  },
  {
    label: 'Clic',
    data: [256, 124, 208, 130, 200, 268, 0,0,],
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
  },
  ],
};


function Operation1() {
  return (
  <>
  <div className="content">
  <CardTitle tag="h2">Opération 1</CardTitle>
   <Row>
    <Col md="4">
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Données Camember</CardTitle>
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
  <Col md="8">
  <Card>
    <div className="content">
      <Bar options={options} data={data} />
    </div>
  </Card>
</Col>
</Row>
<div className="content">
  <Row>
    <Col md="12">
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Diction</CardTitle>
      </CardHeader>
      <CardBody>
        <Table responsive>
          <table class="table table-bordered table-hover table-condensed">
            <thead>
              <tr>
                <th title="Field #1"></th>
                <th title="Field #2"></th>
                <th title="Field #3">SUJET</th>
                <th title="Field #4">Envoi</th>
                <th title="Field #5">Ouv.</th>
                <th title="Field #6"></th>
                <th title="Field #7">Clics</th>
                <th title="Field #8"></th>
                <th title="Field #9">Ventes</th>
                <th title="Field #10"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#0</td>
                <td>12-19 mars</td>
                <td>Sequence 7 mails Article Diction</td>
                <td>11735</td>
                <td align="right">3682</td>
                <td>31.4%</td>
                <td align="right">1142</td>
                <td>31.0%</td>
                <td align="right">12</td>
                <td>1.1%</td>
              </tr>
              <tr>
                <td>#1</td>
                <td>2020-03-25</td>
                <td>En profiter pour nous muscler ?</td>
                <td>11922</td>
                <td align="right">1603</td>
                <td>13.4%</td>
                <td align="right">256</td>
                <td>16.0%</td>
                <td align="right"></td>
                <td>0.0%</td>
              </tr>
              <tr>
                <td>#1b</td>
                <td>2020-03-25</td>
                <td>En profiter pour nous muscler ?</td>
                <td>10646</td>
                <td align="right">919</td>
                <td>8.6%</td>
                <td align="right">124</td>
                <td>13.5%</td>
                <td align="right">10</td>
                <td>8.1%</td>
              </tr>
              <tr>
                <td>#2</td>
                <td>2020-03-26</td>
                <td>Nous avons été surpris…</td>
                <td>11902</td>
                <td align="right">1676</td>
                <td>14.1%</td>
                <td align="right">208</td>
                <td>12.4%</td>
                <td align="right">4</td>
                <td>1.9%</td>
              </tr>
              <tr>
                <td>#3</td>
                <td>2020-03-27</td>
                <td>Pour bien profiter de la crise : mon tuyau</td>
                <td>11887</td>
                <td align="right">1451</td>
                <td>12.2%</td>
                <td align="right">130</td>
                <td>9.0%</td>
                <td align="right">18</td>
                <td>13.8%</td>
              </tr>
              <tr>
                <td>#4</td>
                <td>2020-03-28</td>
                <td>2 formations pour le prix d’une</td>
                <td>11867</td>
                <td align="right">1331</td>
                <td>11.2%</td>
                <td align="right">200</td>
                <td>15.0%</td>
                <td align="right"></td>
                <td>0.0%</td>
              </tr>
              <tr>
                <td>#5</td>
                <td>2020-03-28</td>
                <td>Retrait de votre droit</td>
                <td>11852</td>
                <td align="right">1946</td>
                <td>16.4%</td>
                <td align="right">268</td>
                <td>13.8%</td>
                <td align="right">34</td>
                <td>12.7%</td>
              </tr>
              <tr>
                <td> TOTAL (sauf sequence Prévente)</td>
                <td>11822</td>
                <td>3684</td>
                <td>31.2%</td>
                <td align="right">976</td>
                <td>26.5%</td>
                <td align="right">78</td>
                <td>8.0%</td>
                <td align="right"> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td align="right"></td>
                <td> </td>
                <td align="right"></td>
                <td> </td>
                <td align="right"></td>
                <td> </td>
              </tr>
            </tbody></table>
          </Table>
        </CardBody>
      </Card>
    </Col>
    
  </Row>
</div>
</div>
</>
);
};

export default Operation1;
