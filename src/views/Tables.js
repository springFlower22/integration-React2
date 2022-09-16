/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)


* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Simple Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
<table class="table table-bordered table-hover table-condensed">
<thead>
  <tr>
<th title="Field #1">FIELD1</th>
<th title="Field #2">FIELD2</th>
<th title="Field #3">SUJET</th>
<th title="Field #4">Envoi</th>
<th title="Field #5">Ouv.</th>
<th title="Field #6">FIELD6</th>
<th title="Field #7">Clics</th>
<th title="Field #8">FIELD8</th>
<th title="Field #9">Ventes</th>
<th title="Field #10">FIELD10</th>
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
    </>
  );
}

export default Tables;
