import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "whitesmoke",
    marginTop: "20px",
    textAlign: "center",
    borderRadius: "30px",
    padding: "20px 0px",
  },
  bookImg: {
    width: "50%",
  },
  moreInfoBtn: {
    backgroundColor: "green",
    color: "white",
    marginRight: "10px",
    "&:hover": {
      backgroundColor: "green",
    },
  },
  externalLink: {
    color: "white",
    textDecoration: "none",
  },
}));

function BookProfile(props) {
  const classes = useStyles();

  return (
    <div>
      {props.books.map((book) => (
        <div
          key={book.id ? book.id : book.googleId}
          id={book.id ? book.id : book.googleId}
        >
          <Container
            maxWidth="lg"
            className={classes.container}
            justify="center"
          >
            <Grid container direction="row">
              <Grid item xs={12}>
                <Grid container direction="row">
                  <Grid item xs={4}>
                    <img
                      className={classes.bookImg}
                      src={book.image}
                      alt={`${book.googleId}-img`}
                    ></img>
                  </Grid>
                  <Grid item xs={7}>
                    <div className={classes.bookInfo}>
                      <Typography variant="h4">{book.title}</Typography>
                      <Typography variant="h6">
                        by: {book.authors.split(";").join(", ")}
                      </Typography>
                      <Typography variant="h6" style={{ color: "gray" }}>
                        <span>published: {book.publishDate}</span> |{" "}
                        <span>pages: {book.pageCount}</span>
                      </Typography>
                      <hr></hr>
                      <Typography variant="body2">
                        {book.description}
                      </Typography>
                      <hr></hr>
                      <Button className={classes.moreInfoBtn}>
                        <i
                          className="fas fa-info-circle"
                          style={{ marginRight: "5px" }}
                        ></i>{" "}
                        <a
                          className={classes.externalLink}
                          target="__blank"
                          href={book.link}
                        >
                          more info
                        </a>
                      </Button>
                      <Button
                        id={book.id ? book.id : book.googleId}
                        onClick={() => props.buttonAction(props.buttonType === "saveBookBtn" ? (book.googleId) : (book.id))}
                        className={props.buttonType}
                        style={
                          props.buttonType === "saveBookBtn"
                            ? { backgroundColor: "blue", color: "white" }
                            : { backgroundColor: "red", color: "white" }
                        }
                      >
                        <i
                          className={props.buttonIcon}
                          style={{ marginRight: "5px" }}
                        ></i>{" "}
                        {props.buttonText}
                      </Button>
                    </div>
                  </Grid>
                  <Grid item xs={1}></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      ))}
    </div>
  );
}

export default BookProfile;
