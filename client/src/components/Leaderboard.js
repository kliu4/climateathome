import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

var products = [
  {
    id: 1,
    name: "Item name 1",
    price: 100
  },
  {
    id: 2,
    name: "Item name 2",
    price: 100
  }
];

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.priceFormatter = this.priceFormatter.bind(this);
  }

  priceFormatter(cell, row) {
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
  }

  render() {
    return (
      <div className="container my-4">
        <BootstrapTable data={products} striped={true} hover={true}>
          <TableHeaderColumn
            dataField="id"
            isKey={true}
            dataAlign="center"
            dataSort={true}
          >
            Product ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort={true}>
            Product Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField="price" dataFormat={this.priceFormatter}>
            Product Price
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Leaderboard;
