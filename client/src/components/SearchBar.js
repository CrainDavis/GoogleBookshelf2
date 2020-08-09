import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "whitesmoke",
    marginTop: "20px",
    textAlign: "center",
    borderRadius: "30px",
    padding: "20px 0px",
  },
  form: {},
  inputField: {
    width: "70%",
    marginRight: "10px",
  },
  formButton: {
    padding: "15px",
    backgroundColor: "red",
    color: "white",
    boxShadow: "1px 1px 10px gray",
    border: "1px solid white",
    "&:hover": {
      backgroundColor: "#f9d0d0",
      color: "red",
      border: "1px solid red"
    }
  },
}));

function SearchBar(props) {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.container} justify="center">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12}>
            <form className={classes.form}>
              <TextField
                className={classes.inputField}
                label="book title"
                value={props.search}
                onChange={props.handleInputChange}
                name="search"
                as="input"
                type="text"
                variant="outlined"
                color="secondary"
              ></TextField>
              <Button
                onClick={props.handleFormSubmit}
                size="large"
                className={classes.formButton}
                variant="contained"
                color="secondary"
              >
                <i style={{marginRight: "10px"}} className="fas fa-search"></i> search
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SearchBar;
