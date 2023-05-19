import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Sort,
  Search,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";
const Employees = () => {
  return (
    <div className="m-20 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Employees" category="Page" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        toolbar={['Search']}
        width="auto"
        allowSorting>
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search,Toolbar, Sort]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
