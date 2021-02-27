import React from "react";
import db from "../firebase";
import TextField from "@material-ui/core/TextField";
import { disabled, selectForm } from "../features/formSlice";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      position: "relative",
      left: "150px",
      marginTop: "20px",
      // display: "none",
    },
  },
}));

function Form() {
  const dispatch = useDispatch();
  const enabled = useSelector(selectForm);
  const classes = useStyles();
  const handleSUbmit = (formData) => {
    db.collection("software").add({
      software_title: formData.software_title,
      cover_url: formData.cover_url,
    });
    console.log(formData);
  };
  return (
    <div>
      {enabled && (
        <form
          onSubmit={handleSUbmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            name="software_title"
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
            type="submit"
            onClick={() => dispatch(disabled())}
          >
            Add
          </Button>
        </form>
      )}
    </div>
  );
}

export default Form;
