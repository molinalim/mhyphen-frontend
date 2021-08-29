import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Divider,
} from "@material-ui/core";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import makeMCardStyles, { makeDialogStyles } from "./MCardStyles";
/*import poster from "./poster.jpg";*/

export interface MovieCardProps {
  cardTitle: string;
  subHeader: string;
  cardContent: JSX.Element;
  url: string;
  poster: string;
}

interface ExternalDialogProps {
  isOpen: boolean;
  setIsOpen: (newOpen: boolean) => void;
  cardTitle: string;
  subHeader: string;
}

const MovieCard = ({
  cardTitle,
  subHeader,
  cardContent,
  url,
  poster,
}: MovieCardProps): JSX.Element => {
  const styles = makeMCardStyles();
  const [dialog, setDialog] = React.useState(false);

  return (
    <div>
      <Card className={styles.card} variant={"outlined"}>
        <img className={styles.poster} src={poster} alt={cardTitle} />
        <ImageListItemBar
          className={styles.description}
          title={cardTitle}
          subtitle={<span>{subHeader}</span>}
          actionIcon={
            <IconButton
              aria-label={`info about ${cardContent}`}
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
        cardTitle={cardTitle}
        subHeader={subHeader}
      />
    </div>
  );
};

const ExternalDialog = ({
  isOpen,
  setIsOpen,
  cardTitle,
  subHeader,
}: ExternalDialogProps): JSX.Element | null => {
  const styles = makeDialogStyles();

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle>{cardTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>{subHeader}</DialogContentText>
      </DialogContent>
      <div className={styles.buttonGroup}>
        <Button
          className={styles.button}
          variant="contained"
          color={"secondary"}
          onClick={() => setIsOpen(false)}
        >
          Take Me Back!
        </Button>
      </div>
    </Dialog>
  );
};

export default MovieCard;
