import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, AppBar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    justifyContent: "center",
    padding: "30px 10px",
    borderRadius: "30px",
    backgroundColor: "#cc6c6c",
    boxShadow: "1px 1px 10px whitesmoke",
    border: "5px solid whitesmoke",
    marginTop: "20px",
  },
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "whitesmoke",
    textShadow: "1px 1px 10px black",
  },
  pageLinksMain: {
    textAlign: "center",
    margin: "30px 0px 0px 0px",
  },
  NavLink__link: {
    color: "whitesmoke",
    textDecoration: "none",
    margin: "10px",
    fontWeight: "bold",
    fontSize: "15px",
    "&:hover": {
      color: "black",
    },
  },
  NavLink__link__active: {
    color: "black",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={10}>
          <AppBar position="static" className={classes.appBar}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Typography className={classes.headerText} variant="h1">
                  <i className="fas fa-book"></i> Google Bookshelf{" "}
                  <i className="fas fa-book"></i>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <p className={classes.pageLinksMain}>
                  <NavLink
                    activeClassName={classes.NavLink__link__active}
                    className={classes.NavLink__link}
                    to="/search"
                  >
                    <i className="fas fa-search"></i> Search Books
                  </NavLink>
                  <NavLink
                    activeClassName={classes.NavLink__link__active}
                    className={classes.NavLink__link}
                    to="/saved"
                  >
                    <i className="far fa-bookmark"></i> Saved Books
                  </NavLink>
                </p>
              </Grid>
            </Grid>
          </AppBar>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
