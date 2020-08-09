import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "whitesmoke",
    marginTop: "20px",
    textAlign: "center",
    borderRadius: "30px",
    padding: "20px 0px",
  },
}));

function NoResultsFound() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.container} justify="center">
        <Grid container direction="row">
          <Grid item xs={12}>
              <Typography variant="h6">no books found</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default NoResultsFound;
