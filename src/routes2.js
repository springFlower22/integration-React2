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

import BilanOperation from "views/Bilanoperation";
import Dashboard2 from "views/Dashboard2.js";
import operation1 from "views/operation1";
import operation2 from "views/operation2";



var routes2 = [
 
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard2,
    layout: "/myadmin",
  },
  {
    path: "/1operation",
    name: "Operation1",
    icon: "nc-icon nc-bank",
    component: operation1,
    layout: "/myadmin",
  },
  {
    path: "/2operation",
    name: "Operation2",
    icon: "nc-icon nc-bank",
    component: operation2,
    layout: "/myadmin",
  },
  {
    path: "/bilanoperation",
    name: "BilanOperation",
    icon: "nc-icon nc-bank",
    component: BilanOperation,
    layout: "/myadmin",
  },
];
export default routes2;
