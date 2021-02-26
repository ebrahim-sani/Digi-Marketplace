import React from "react";
import Header from "./Header";
import db from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      position: "relative",
      left: "350px",
    },
  },
}));

function AddProduct() {
  const classes = useStyles();

  const handleSUbmit = () => {
    db.collection("software").add({
      title: FormData.software_ttle,
      cover_url: FormData.cover_url,
    });
  };

  return (
    <div className="addProduct">
      <Header />

      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          name="software_ttle"
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Cover Url (start with https)"
          variant="outlined"
          name="cover_url"
        />
        <Button
          variant="outlined"
          color="primary"
          style={{
            padding: "12px",
            width: "120px",
          }}
          onClick={handleSUbmit}
        >
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddProduct;
