import React from "react";
import db from "../firebase";
import { disabled, selectForm } from "../features/formSlice";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
      position: "relative",
      left: "250px",
      marginTop: "10px",
      padding: "18px",
      outline: "none",
      borderColor: "#837ee0",
      borderRadius: "6px",
    },
  },
}));

function Form() {
  const { register, handleSubmit, watch, errors } = useForm();
  const enabled = useSelector(selectForm);
  const classes = useStyles();

  const onSubmit = (formData) => {
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
          onSubmit={handleSubmit(onSubmit)}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <input
            name="software_title"
            id="outlined-basic"
            placeholder="TItle"
            ref={register({ required: true })}
          />
          {errors.software_title && (
            <p
              style={{
                fontSize: "10px",
                position: "absolute",
                top: "100px",
                left: "275px",
                color: "red",
              }}
            >
              title is required
            </p>
          )}
          <input
            id="outlined-basic"
            placeholder="Cover Url (start with https)"
            name="cover_url"
            ref={register({ required: true })}
          />
          {errors.cover_url && (
            <p
              style={{
                fontSize: "10px",
                position: "absolute",
                top: "100px",
                left: "588px",
                color: "red",
              }}
            >
              cover url is required
            </p>
          )}
          <Button
            variant="outlined"
            color="primary"
            style={{
              padding: "12px",
              width: "120px",
            }}
            type="submit"
          >
            Add
          </Button>
        </form>
      )}
    </div>
  );
}

export default Form;
