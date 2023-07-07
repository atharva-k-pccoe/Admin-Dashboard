import "./widgetSm.css";
import React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, InputAdornment } from '@mui/material';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Visibility, Call, ArrowForwardIos, Search, AddCircleOutline } from "@mui/icons-material";
import { Button } from "@mui/material";



export default function WidgetSm({data}) {
    const [sortModel, setSortModel] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

const handleSortModelChange = (model) => {
  setSortModel(model);
};

const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};

const filteredData = useDemoData((row) => {
  return (
    row.party.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.amount.toString().includes(searchTerm)
  );
});
  return (
    <div className="widgetSm">
      <div className="parties">
        <Call className="call"/> <ArrowForwardIos  />
        <h4 className="primary">Import Parties</h4>
        <p className="secondary">Use contacts from your phone or Gmail to create parties</p>
      </div>
      <div className="widgets">
        <Search className="search" /> 
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutline />}
        >
          Add Party
        </Button>


        <div className="party">
      {/* <TextField
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        value={searchTerm}
        variant="outlined"
        size="small"
        fullWidth
        sx={{ mb: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      /> */}
      <DataGrid
        rows={filteredData}
        columns={[
          { field: 'party', headerName: 'Party', width: 150 },
          { field: 'amount', headerName: 'Amount', width: 150 },
        ]}
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        autoHeight
      />
    </div>
      </div>
    </div>
  );
}
