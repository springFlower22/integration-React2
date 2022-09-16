
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

import { Reseauxsociaux } from "variables/charts.js";
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
  dashboardEmailStatisticsChart2,
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
    label: 'ouv.',
    data: [1048, 958, 573, 853, 427, 625, 759,0,],
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
  },
  {
    label: 'Clic',
    data: [245, 154, 110, 104, 40, 60, 98,0,],
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
  },
  ],
};


function Operation2() {
  return (
  <>
  <div className="content">
  <CardTitle tag="h2">Opération 2</CardTitle>
   <Row>
    <Col md="4">
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Données Camember</CardTitle>
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
  <thead><tr><th title="Field #1">Diction 2020-03</th>
  </tr></thead>
  <tbody><tr>
    <td> </td>
    <td> </td>
    <td>SUJET</td>
    <td>Envoi</td>
    <td>Ouv.</td>
    <td> </td>
    <td>Clics</td>
    <td> </td>
    <td>Ventes</td>
    <td> </td>
  </tr>
  <tr>
    <td>#1</td>
    <td>2020-02-20</td>
    <td>Mangez-vous parfois vos mots ?</td>
    <td>8450</td>
    <td>1048</td>
    <td>12.4%</td>
    <td>245</td>
    <td>23.4%</td>
    <td>12</td>
    <td>4.9%</td>
  </tr>
  <tr>
    <td>#2</td>
    <td>2020-02-21</td>
    <td>Quand soudain tout devient plus clair.</td>
    <td>8399</td>
    <td>958</td>
    <td>11.4%</td>
    <td>154</td>
    <td>16.1%</td>
    <td>5</td>
    <td>3.2%</td>
  </tr>
  <tr>
    <td>#3</td>
    <td>2020-02-22</td>
    <td>Découvrez comment maîtriser votre débit pour…</td>
    <td>8389</td>
    <td>573</td>
    <td>6.8%</td>
    <td>110</td>
    <td>19.2%</td>
    <td>6</td>
    <td>5.5%</td>
  </tr>
  <tr>
    <td>#4</td>
    <td>2020-02-23</td>
    <td>90% des gens qui parlent vite n’obtiendront pas…</td>
    <td>8374</td>
    <td>853</td>
    <td>10.2%</td>
    <td>104</td>
    <td>12.2%</td>
    <td>9</td>
    <td>8.7%</td>
  </tr>
  <tr>
    <td>#5</td>
    <td>2020-02-24</td>
    <td>Parlez vite = ne pas obtenir ce qu&#39;on demande ?</td>
    <td>7637</td>
    <td>427</td>
    <td>5.6%</td>
    <td>40</td>
    <td>9.4%</td>
    <td>6</td>
    <td>15.0%</td>
  </tr>
  <tr>
    <td>#6</td>
    <td>2020-02-24</td>
    <td>Parler moins vite - Dernier jour de l&#39;offre</td>
    <td>8341</td>
    <td>625</td>
    <td>7.5%</td>
    <td>60</td>
    <td>9.6%</td>
    <td>5</td>
    <td>8.3%</td>
  </tr>
  <tr>
    <td>#7</td>
    <td>2020-02-24</td>
    <td>Retrait de votre droit dans 6h</td>
    <td>8329</td>
    <td>759</td>
    <td>9.1%</td>
    <td>98</td>
    <td>12.9%</td>
    <td>19</td>
    <td>19.4%</td>
  </tr>
  <tr>
    <td> </td>
    <td> </td>
    <td>TOTAL</td>
    <td>8450</td>
    <td>2142</td>
    <td>25.3%</td>
    <td>690</td>
    <td>32.2%</td>
    <td>50</td>
    <td>7.2%</td>
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

export default Operation2;
