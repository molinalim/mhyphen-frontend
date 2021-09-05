import React, { useState } from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "../Button/Button";
import { ADD_BOOKING } from "../../api/mutations";
import { AddBooking } from "../../api/__generated__/AddBooking";
import { createStyles } from "@material-ui/core";
import { useMutation } from "@apollo/client";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import json2mq from "json2mq";

//media query
function JavaScriptMedia() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 990,
    })
  );

  return matches;
}

//Styling of the form
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
  form__movie: {
    width: "490px",
  },
  form__movie__mobile: {
    width: "220px",
  },
  form: {
    marginLeft: "-21%",
    marginTop: "20%",
    textAlign: "center",
    fontFamily: "Helvetica",
    color: "#000000",
    padding: "25px",
    width: "500px",
    background: "rgba( 255, 255, 255, 0.40 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 3.5px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
  form__mobile: {
    marginTop: "23%",
    textAlign: "center",
    fontFamily: "Helvetica",
    color: "#000000",
    padding: "25px",
    background: "rgba( 255, 255, 255, 0.40 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 3.5px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    marginLeft: "5%",
    marginRight: "5%",
  },
  button: {
    margin: "auto",
    marginTop: "10px",
    color: "white",
  },
  notLoggedIn: {
    color: "red",
  },
}));
export interface BookingFormProps {}

//booking form
export const BookingForm: React.FC<BookingFormProps> = () => {
  const classes = useStyles();
  const [movieId, setMovieId] = useState<string>("");
  const [notLogin, setNotLogin] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [booked, setBooked] = React.useState(new Date("2021-08-18T21:11:54"));
  const [hasFocus, setHasFocus] = useState(false);

  const [addBooking] = useMutation<AddBooking>(ADD_BOOKING);
  const [dialog, setDialog] = React.useState(false);
  //update movieId
  const handleChange = (e: any) => {
    setMovieId(e.target.value);
  };
  //update booked date
  const handleDateChange = (date: any) => {
    setBooked(date);
  };
  //save the booking
  const handleSubmit = async () => {
    try {
      await addBooking({
        variables: {
          movieId: parseInt(movieId),
          booked: booked,
        },
      });
      setSubmit(true);
      setDialog(true);
      setNotLogin(false);
    } catch (e) {
      console.log(e);
      setNotLogin(true);
    }
    setHasFocus(true);
  };
  return (
    <Container className={classes.form__container}>
      <div className={JavaScriptMedia() ? classes.form : classes.form__mobile}>
        {submit ? (
          <div>
            <CheckCircleTwoToneIcon fontSize="large" />
            <Typography variant="h4">Your ticket is ready!</Typography>
            <Grid>
              Your booking reference is 〔M{String(movieId)}@
              {booked.toLocaleString()}〕 .
            </Grid>
          </div>
        ) : (
          <Typography variant="h4">FILL IN YOUR TICKET</Typography>
        )}
        {notLogin ? (
          <Grid className={classes.notLoggedIn}>
            Please make sure you are logged in and selected a movie.
          </Grid>
        ) : null}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <FormControl
              className={
                JavaScriptMedia()
                  ? classes.form__movie
                  : classes.form__movie__mobile
              }
            >
              <InputLabel id="demo-customized-select-label"> Movie </InputLabel>
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
                <MenuItem value={"9"}>Pokémon Detective Pikachu</MenuItem>
                <MenuItem value={"10"}>Raya and the Last Dragon</MenuItem>
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
        {submit ? null : (
          <Button
            className={classes.button}
            backgroundColor="#130430"
            label="Book"
            onClick={handleSubmit}
            primary
            size="medium"
          />
        )}
      </div>
      <ExternalDialog isOpen={dialog} setIsOpen={setDialog} />
    </Container>
  );
};

//a dialog that shows additional booking information
interface ExternalDialogProps {
  isOpen: boolean;
  setIsOpen: (newOpen: boolean) => void;
}

//dialog styling
const makeDialogStyles = makeStyles(
  createStyles({
    content: {
      background: "rgba( 255, 255, 255, 0.20 )",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 2.5px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
      padding: "15px",
    },
    buttonGroup: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    button: {
      margin: "10px",
    },
  })
);

const ExternalDialog = ({
  isOpen,
  setIsOpen,
}: ExternalDialogProps): JSX.Element | null => {
  const styles = makeDialogStyles();

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle>Your booking has been recorded!</DialogTitle>
      <DialogContent className={styles.content}>
        <DialogContentText>
          You have successfully made a booking! You may pay $15 when you arrive at the cinema. You can find your ticket by clicking on "My Tickets". 
        </DialogContentText>
        <Button
          backgroundColor="#130430"
          label="Back"
          onClick={() => setIsOpen(false)}
          primary
          size="medium"
        />
      </DialogContent>
    </Dialog>
  );
};
