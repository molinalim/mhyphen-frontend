import { CircularProgress } from "@material-ui/core";
import React from "react";
import { TicketList, Ticket } from "./stories";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { BOOKINGS } from "./api/queries";
import ticketbg from "./ticket/ticketbgqr.svg";
import Button from "@material-ui/core/Button";
import "./TicketPage.css";
import {
  Bookings,
  Bookings_bookingsByUserId,
} from "./api/__generated__/Bookings";
import { CLIENT } from "./stories/Header/Header";
//import { MOVIE } from "./api/queries";
//import { Movie, Movie_movie } from "./api/__generated__/Movie";
//FAILED DUE TO INVALID HOOK CALL (I am still trying to find the solution to fix this.)
/**function GetMovie(id: number) {
  const [movie, setMovie] = React.useState<string>("");
  const { loading, error, data } = useQuery<Movie>(MOVIE, {
    variables: { movieId: Number(id) },
  });
  useEffect(() => {
    if (loading) console.log("loading...");
    if (!error && !loading) {
      setMovie(data!.movie.title);
    }
  }, data);
  return movie;
} **/

function GetMovie(id: number) {
  if (id == 1) {
    return "Whisper of The Heart";
  } else if (id == 2) {
    return "Ponyo";
  } else if (id == 3) {
    return "Your Name";
  } else if (id == 4) {
    return "My Neighbor Totoro";
  } else if (id == 5) {
    return "A Whisker Away";
  } else if (id == 6) {
    return "The Mitchells vs the Machines";
  } else if (id == 7) {
    return "When Marnie Was There";
  } else if (id == 8) {
    return "Pokémon: Mewtwo Strikes Back—Evolution";
  } else if (id == 9) {
    return "Pokémon Detective Pikachu";
  } else {
    return "Raya and the Last Dragon";
  }
}
export const TicketPage = () => {
  const [tickets, setTickets] = React.useState<JSX.Element[]>([]);
  const { loading, error, data } = useQuery<Bookings>(BOOKINGS, {
    variables: { userId: Number(CLIENT.id) },
  });

  useEffect(() => {
    if (loading) console.log("loading...");
    if (!error && !loading) {
      setTickets(
        data!.bookingsByUserId!.map((booking: Bookings_bookingsByUserId) => {
          return (
            <div>
              <Ticket
                id={booking.id}
                booked={booking.booked}
                created={booking.created}
                price={booking.price}
                qr={ticketbg}
                movieTitle={GetMovie(booking.movieId)}
              />
            </div>
          );
        })
      );
    }
  }, [data]);

  return (
    <div className="typewriter">
      <h1>
        Hello, {CLIENT?.name === "undefined" ? "please wait..." : CLIENT?.name}.
      </h1>
      {tickets.length === 0 ? (
        <CircularProgress />
      ) : (
        <TicketList tickets={tickets} />
      )}
    </div>
  );
};
