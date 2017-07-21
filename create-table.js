(function (globals, document) {
  'use strict';

  function createTable (rows) {
    const table = document.createElement('table');
    const columnNames = Object.keys(rows[0]);

    table.appendChild(createTableHead(columnNames));
    table.appendChild(createTableBody(rows));
    return table;
  }

  function createTableHead (columnNames) {
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    for (let col of columnNames) {
      let th = document.createElement('th');
      th.innerText = col;
      headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    return thead;
  }

  function createTableBody (rows) {
    const tbody = document.createElement('tbody');
    for (let row of rows) {
      tbody.appendChild(createRow(row));
    }
    return tbody;
  }

  function createRow (row) {
    const tr = document.createElement('tr');
    for (let key in row) {
      let td = document.createElement('td');
      td.innerText = row[key];
      tr.appendChild(td);
    }
    return tr;
  }

  globals.createTable = createTable;
})(window, document);