import "./sidebar.css";
import {
    Home,
 Group,
 Category,
  
  Storefront,

  Assignment,
  ShoppingCart,
  AccountBalanceWallet,
  AccountBalance,
 
  CreditScore,
  SignalCellularAlt,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import {Dropdown} from 'rsuite';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
     <Link to="/" className="link">
         <Storefront className="storefront"/><h3 className="machinery">Machinery</h3>
         </Link>
       
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <Home className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Group className="sidebarIcon" />
              Parties
            </li>
            <li className="sidebarListItem">
              <Category className="sidebarIcon" />
              Items
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          
          <ul className="sidebarList">
            {/* <Link to="/users" className="link"> */}
              <li className="sidebarListItem">
                <Assignment className="sidebarIcon" />
                Sale
              </li>
            {/* </Link> */}
            {/* <Link to="/products" className="link"> */}
              <li className="sidebarListItem">
                <ShoppingCart className="sidebarIcon" />
                Purchase
              </li>
            {/* </Link> */}
            <li className="sidebarListItem">
              <AccountBalanceWallet className="sidebarIcon" />
              Expenses
            </li>
          
            <li className="sidebarListItem">
              <AccountBalance className="sidebarIcon" />
             <Dropdown title="Cash & Banks">
               <li><Dropdown.Item>Banks And Account</Dropdown.Item></li> 
                <li><Dropdown.Item>Cash In Hand</Dropdown.Item></li> 
               <li> <Dropdown.Item>Cheques</Dropdown.Item></li> 
                <li><Dropdown.Item>Loan Amount</Dropdown.Item></li> 
             </Dropdown>
              
            </li>
           
          </ul>
        </div>
        <div className="sidebarMenu">
         
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              My Online Store
            </li>
            <li className="sidebarListItem">
              <SignalCellularAlt className="sidebarIcon" />
              Reports
            </li>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <CreditScore className="sidebarIcon" />
              Apply for Loan
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}