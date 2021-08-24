import React from 'react';

// TEMPLETE
import Templete from './Templete';

// DATA
import {
  column_product,
  column_prioiry,
  product_data,
  priority_data,
  column_employee,
  employee_data,
} from './data';

function index() {
  return (
    <Templete
      employee_data={employee_data}
      column_employee={column_employee}
      column_product={column_product}
      column_prioiry={column_prioiry}
      product_data={product_data}
      priority_data={priority_data}
    />
  );
}

export default index;
