import "./featuredInfo.css";
// import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Button, TextField, IconButton, Grid} from '@mui/material';
import { AddCircleOutline, WhatsApp, Settings } from '@mui/icons-material';

const useStyles = styled((theme)=> ({
    row: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
    },
    textField: {
      marginRight: theme.spacing(2),
    },
  }));

export default function FeaturedInfo() {
    const classes=useStyles();
  return (
    <div className="featured">
      {/* <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div> */}
      <div className="featuredItem">
        <Grid  container spacing={2} className={classes.row}>
      
        <Grid item>
        <TextField
        id="textfield"
          className={classes.textField}
          label="Search transactions"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutline />}
        >
          Add Sale
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutline />}
        >
          Add Purchase
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" color="primary">
          Add More
        </Button>
      </Grid>
      <Grid item>
        <IconButton className="iconbutton">
          <WhatsApp />
          <span className="iconbadge"></span>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton color="primary">
          <Settings />
          <span className="iconbadge"></span>

        </IconButton>
      </Grid>

      </Grid>

      <hr/>
      <div className="featureditem1">
      <p className="name"><b>NAME</b></p>
      </div>
      </div>

    </div>

      
   
  );
}