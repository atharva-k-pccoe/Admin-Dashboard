
import './App.css';
import Topbar from './components/topbar/topbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/sidebar/sidebar';
import FeaturedInfo from './components/featuredInfo/FeaturedInfo';
import WidgetSm from './components/widgetSm/widgetSm';
import SaleTable from './components/widgetsls/widgetsls';

function App() {
  const sales = [
    { type: 'Sale A', number: 123, date: '2023-07-01', total: 100, balance: 50 },
    { type: 'Sale B', number: 456, date: '2023-07-02', total: 200, balance: 100 },
    { type: 'Sale C', number: 789, date: '2023-07-03', total: 150, balance: 75 },
    // ...additional sales data
  ];
  return (
    <><Router className="home">

    <Topbar className='topbar' />
    <div className='container'>
      <Sidebar/>
      <div className='middlebox'>

      <FeaturedInfo />
      <SaleTable data={sales}/>
      </div>

     
      <div className='homeWidgets'>

      <WidgetSm />
     
      </div>
      
         
    </div>
    {/* <SaleTable/> */}
    </Router>
    </>
   
  );
}

export default App;
