import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useDemoData } from '@mui/x-data-grid-generator';
import './widgetsls.css';

export default function  SaleTable ({data}) {
  const [sortModel, setSortModel] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSortModelChange = (model) => {
    setSortModel(model);
  };

  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = useDemoData((sale) => {
    return (
      sale.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.number.toString().includes(searchTerm) ||
      sale.date.includes(searchTerm) ||
      sale.total.toString().includes(searchTerm) ||
      sale.balance.toString().includes(searchTerm)
    );
  });

  return (
    <div className="sale-table-container">
      <TextField
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        value={searchTerm}
        variant="outlined"
        size="small"
        fullWidth
        className="search-input"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <div className="data-grid-container">
        <DataGrid
          rows={filteredData}
          columns={[
            { field: 'type', headerName: 'Type', width: 150 },
            { field: 'number', headerName: 'Number', width: 150 },
            { field: 'date', headerName: 'Date', width: 150 },
            { field: 'total', headerName: 'Total', width: 150 },
            { field: 'balance', headerName: 'Balance', width: 150 },
          ]}
          sortModel={sortModel}
          onSortModelChange={handleSortModelChange}
          autoHeight
        />
      </div>
    </div>
  );
};

// export default SaleTable;
