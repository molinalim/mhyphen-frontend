import React from "react";
import {
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { Button } from "../Button/Button";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import makeMCardStyles, { makeDialogStyles } from "./MCardStyles";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import Divider from "@material-ui/core/Divider";

export interface MovieCardProps {
  title: string;
  plot: string;
  rating: string;
  genre: string;
  poster: string;
}

interface ExternalDialogProps {
  isOpen: boolean;
  setIsOpen: (newOpen: boolean) => void;
  title: string;
  plot: string;
  rating: string;
  genre: string;
}

const MovieCard = ({
  title,
  plot,
  rating,
  genre,
  poster,
}: MovieCardProps): JSX.Element => {
  const styles = makeMCardStyles();
  const [dialog, setDialog] = React.useState(false);

  return (
    <div>
      <Card className={styles.card} variant={"outlined"}>
        <img className={styles.poster} src={poster} alt={title} />
        <ImageListItemBar
          className={styles.description}
          title={title}
          subtitle={<span>{plot}</span>}
          actionIcon={
            <IconButton
              aria-label={`info about ${title}`}
              className={styles.icon}
              onClick={() => setDialog(true)}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </Card>
      <ExternalDialog
        isOpen={dialog}
        setIsOpen={setDialog}
        title={title}
        plot={plot}
        rating={rating}
        genre={genre}
      />
    </div>
  );
};

const ExternalDialog = ({
  isOpen,
  setIsOpen,
  title,
  plot,
  rating,
  genre,
}: ExternalDialogProps): JSX.Element | null => {
  const styles = makeDialogStyles();

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent className={styles.content}>
        <DialogContentText>
          <StarBorderIcon />
          &nbsp; Rating: {rating}
        </DialogContentText>
        <DialogContentText>
          <MovieFilterIcon />
          &nbsp; Genre: {genre}
        </DialogContentText>
        <Divider />
        <br />
        <DialogContentText>{plot}</DialogContentText>
        <div className={styles.buttonGroup}>
          <Button
            backgroundColor="#000000"
            label="Back"
            onClick={() => setIsOpen(false)}
            primary
            size="medium"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MovieCard;
