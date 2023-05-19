import React from 'react';
import { GridComponent,ColumnDirective,ColumnsDirective,Page,Selection,Inject,Edit,Toolbar,Sort,Filter } from '@syncfusion/ej2-react-grids';

import { customersData,customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className="m-20 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header title="Employees" category="Page" />
    <GridComponent
      id="gridcomp"
      dataSource={customersData}
      allowPaging
      toolbar={['Search']}
      width="auto"
      allowSorting>
      <ColumnsDirective>
        {customersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
      <Inject services={[Page, Edit,Toolbar, Selection,Sort,Filter ]} />
    </GridComponent>
  </div>
  )
}

export default Customers;