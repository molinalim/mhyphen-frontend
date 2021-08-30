import React, { useState } from "react";
import { TextField, Typography, Grid, Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "../Button/Button";
import { ADD_BOOKING } from "../../api/mutations";
import { AddBooking } from "../../api/__generated__/AddBooking";
import { useMutation, useQuery } from "@apollo/client";
import DateFnsUtils from "@date-io/date-fns";
import { MOVIES } from "../../api/queries";
import { Movies, Movies_movies_nodes } from "../../api/__generated__/Movies";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiFormHelperText-root": {
      color: "#372854",
    },
  },
  form__container: {
    maxWidth: "600px !important",
    padding: "15px",
  },
  form: {
    marginTop: "23%",
    textAlign: "center",
    fontFamily: "Montserrat",
    color: "#fcda86",
    padding: "25px",
    width: "500px",
    background: "rgba( 255, 255, 255, 0.20 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 2.5px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
  button: {
    margin: "auto",
    marginTop: "10px",
    color: "#fcda86",
    backgroundColor: "black",
    background: "black",
  },
  notLoggedIn: {
    color: "red",
  },
}));
export interface BookingFormProps {}

export const BookingForm: React.FC<BookingFormProps> = () => {
  const classes = useStyles();
  const [movieId, setMovieId] = useState<string>("");
  const [notLogin, setNotLogin] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [booked, setBooked] = React.useState(new Date("2021-08-18T21:11:54"));
  const [hasFocus, setHasFocus] = useState(false);

  const [addBooking] = useMutation<AddBooking>(ADD_BOOKING);

  const handleChange = (e: any) => {
    setMovieId(e.target.value);
  };

  const handleDateChange = (date: any) => {
    setBooked(date);
  };

  const handleSubmit = async () => {
    try {
      await addBooking({
        variables: {
          movieId: parseInt(movieId),
          booked: booked,
        },
      });
      setSubmit(true);
    } catch (e) {
      console.log(e);
      setNotLogin(true);
    }
    setHasFocus(true);
  };
  return (
    <Container className={classes.form__container}>
      <div className={classes.form}>
        <Typography variant="h4">FILL IN YOUR TICKET</Typography>
        {submit ? (
          <Grid>Congratulations! Your booking has been made successfully.</Grid>
        ) : null}
        {notLogin ? (
          <Grid className={classes.notLoggedIn}>Please log in first!</Grid>
        ) : null}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <FormControl>
              <InputLabel id="demo-customized-select-label">Movie</InputLabel>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={movieId}
                onChange={handleChange}
                className={hasFocus && movieId === "" ? "" : classes.root}
              >
                <MenuItem value={"1"}>Whisper of The Heart</MenuItem>
                <MenuItem value={"2"}>Ponyo</MenuItem>
                <MenuItem value={"3"}>Your Name</MenuItem>
                <MenuItem value={"4"}>My Neighbor Totoro</MenuItem>
                <MenuItem value={"5"}>A Whisker Away</MenuItem>
                <MenuItem value={"6"}>The Mitchells vs the Machines</MenuItem>
                <MenuItem value={"7"}>When Marnie Was There</MenuItem>
                <MenuItem value={"8"}>
                  Pokémon: Mewtwo Strikes Back—Evolution
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={12} sm={6}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Please select a Date"
                value={booked}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Please pick a Time"
                value={booked}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Button
          className={classes.button}
          backgroundColor="#372854"
          label="Submit"
          onClick={handleSubmit}
          primary
          size="medium"
        />
      </div>
    </Container>
  );
};
