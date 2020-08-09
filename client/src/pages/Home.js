import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  welcomeSection: {
    backgroundColor: "whitesmoke",
    border: "5px solid #cc6c6c",
    textAlign: "center",
    margin: "20px 0px",
    padding: "30px 0px",
    borderRadius: "30px",
    boxShadow: "1px 1px 10px whitesmoke",
  },
  welcomeHeader: {
    color: "black",
    fontSize: "40px",
  },
  welcomeSubheader: {
      color: "gray",
  },
  copyrightText: {
      color: "black"
  },
  copyrightLink: {
      color: "darkred",
      textDecoration: "none",
      "&:hover": {
          color: "indianred"
      }
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.welcomeSection}
        >
          <Grid item xs={10} justify="center">
            <Typography variant="h4" className={classes.welcomeHeader}>
              Welcome to Google Bookshelf!
            </Typography>
            <br></br>
            <Typography variant="body2" className={classes.welcomeSubheader}>search for books from the Google Books API, save them, and learn more about them by checking out their links!</Typography>
            <br></br><br></br>
            <hr></hr>
            <br></br>
            <Typography variant="body2" className={classes.copyrightText}>copyright © 2020 <a href="https://github.com/CrainDavis" target="__blank" className={classes.copyrightLink}>Chyna Davis</a></Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
