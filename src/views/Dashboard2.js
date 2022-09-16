
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
} from 'variables/charts.js';
import { Bar } from 'react-chartjs-2';
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
  Reseau, 
  visiteursPagesVues,
} from "variables/charts2.js" ;

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Ventes',
    },
  },
};

const labels = [
  "2018-01",
  "2018-02",
  "2018-03",
  "2018-04",
  "2018-05",
  "2018-06",
  "2018-07",
  "2018-08",
  "2018-09",
  "2018-10",
  "2018-11",
  "2018-12",
  "2019-01",
  "2019-02",
  "2019-03",
  "2019-04",
  "2019-05",
  "2019-06",
  "2019-07",
  "2019-08",
  "2019-09",
  "2019-10",
  "2019-11",
  "2019-12",
  "2020-01",
  "2020-02",
  "2020-03",
  "2020-04",
  "2020-05",
"2020-06",];

 const data = {
  labels,
  datasets: [
    {
      label: 'CA',
      data: [ 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,
        11440,
        4600,
        17210,
        4208,
        7998,
        3566,
        17288,
        5094,
        9604,
        5788,
        7514,
        9206,
        9600,
        9834,
        5470,
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Revenu',
      data: [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,
        9312,
        5070,
        15268,
        3106,
        8332,
        3900,
        12740,
        7599,
        7536,
        7792,
        8850,
        9206,
        8520,
        10104,
        5740,
        ],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
// core components
function Dashboard2() {
  return (
    <>
    <CardTitle tag="h2">Dashboard</CardTitle>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Revenu</p>
                      <CardTitle tag="p">5 400$</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Revenu mensuel
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-money-coins text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Abonnés AC</p>
                      <CardTitle tag="p">$ 10 345</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-calendar" /> 150 nouveaux contacts
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Visiteurs</p>
                      <CardTitle tag="p">23 000</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-clock" /> +42 visiteurs
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Visites</p>
                      <CardTitle tag="p">40 000</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> -541 pages vues
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Abonnées YT</p>
                      <CardTitle tag="p">5 400</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                
                <div className="stats">
                  <i className="fas fa-sync-alt" /> 457 Nouveaux Abonnés
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-money-coins text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Abonnés FB</p>
                      <CardTitle tag="p">2 451</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-calendar" /> 548 nouveaux Abonnés
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ContactsLinkedin</p>
                      <CardTitle tag="p">23 000</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-clock" /> 42 nouveaux Abonnés
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Instagram</p>
                      <CardTitle tag="p">549</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" />541 Nouveaux Abonnés
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col lg="12">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Réseaux Sociaux</CardTitle>
                <p className="card-category"></p>
              </CardHeader>
              <CardBody>
                <Line
                  data={Reseau.data}
                  options={Reseau.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> {"AC"}
                  <i className="fa fa-circle text-info" /> {"YT"}
                  <i className="fa fa-circle text-warning" /> {"Linkedin"}
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check" />
                </div>
              </CardFooter>
            </Card>
          </Col>
        
        <Col md="12">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Visiteurs/PagesVues</CardTitle>
                <p className="card-category">Line Chart with Points</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={visiteursPagesVues.data}
                  options={visiteursPagesVues.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> {"Vistes"}
                  <i className="fa fa-circle text-warning" /> {"Pages"}
                </div>
                <hr />
                <div className="card-stats">
<i className="fa fa-check" />
</div>
</CardFooter>
</Card>
</Col>
<Col md="12">
<Card>
<div className="content">
<Bar options={options} 
data={data} />
</div>
</Card>
</Col>
</Row>
</div>
</>
);

}

export default Dashboard2;


