import { useState } from "react";
import "../component/style.css"
import endgame from "../component/image/endgame.jpeg";
import loki from "../component/image/loki.jpg";
import lokii from "./image/loki1.jpeg"
import ironman from "./image/ironman.jpeg"
import kalki from "./image/kalki 2898 AD.jpeg"
import disclaim from "./image/stream-leadin-web-collection-202210241242.avif"


let screens = [
    {
        id: 1,
        time: "07.00 am",
        seats: [1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1,, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,],
    },
    {
        id: 2,
        time: "10.00 pm",
        seats: [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1,, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,],
    },
    {
        id: 4,
        time: "4.00 pm",
        seats: [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1,, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,],
    },
    {
        id: 5,
        time: "07.00 am",
        seats: [1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1,, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,],
    },
    {
        id: 6,
        time: "10.00 pm",
        seats: [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1,, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,],
    },
    {
        id: 7,
        time: "01.00 am",
        seats: [1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    },
    {
        id: 8,
        time: "04.30 am",
        seats: [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1,, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,],
    },
];

const movies = [
    {
        id: 1,
        title: "END GAME",
        image: endgame
    },
    {
        id: 2,
        title: "LOKI - II",
        image: loki
    },
    {
        id: 3,
        title: "IRON MAN",
        image: ironman
    },
    {
        id: 5,
        title: "LOKI - I",
        image: lokii
    },
    {
        id: 6,
        title: "KALKI",
        image: kalki
    },
];

function Book() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedScreen, setSelectedScreen] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatSelect = (index, screen) => {
        if (screen?.id !== selectedScreen?.id) {
            setSelectedSeats([index]);
            setSelectedScreen(screen);
            return;
        }

        if (selectedSeats.includes(index)) {
            setSelectedSeats(selectedSeats.filter((i) => i !== index));
            if(setSelectedSeats.filter((i) => i !== index).length < 1){
                setSelectedScreen([])
            }
        } else {
            setSelectedSeats((seats) => [...seats, index]);
        }
    };

    const handleBooking = () =>{
        alert(`Seats ${selectedSeats.map((index) => index+1).join(", ")} booked for ${selectedScreen.title} at ${selectedScreen.time}`)
        screens = screens.map(screen =>{
            if(screen.id === selectedScreen?.id){
                let seats =screen.seats;
                selectedSeats.map((seat) => (seats[seat] = 0))
                return{
                    ...screen,
                    seats
                }
            }
            return screen
        })
        setSelectedMovie(null)
        setSelectedScreen(null)
        setSelectedSeats([])
    }
    return (
        <div className="main">
            <h3>CHOOSE YOUR MOVIE :</h3>
            <div className="movie-selection">
                {movies.map((movie) => (
                    <div
                        className="movie"
                        key={movie.id}
                        onClick={() => setSelectedMovie(movie)}
                    >
                        <img className="movie-poster" src={movie.image} alt={movie.title} />
                        <div className="movie-title">{movie.title}</div>
                    </div>
                ))}
            </div>
            {selectedMovie && (
                <div>
                    <h2>Choose your screens</h2>
                    <div className="screen-selection">
                        {screens.map((screen) => (
                            <div
                                key={screen.id}
                                className={`screen ${screen?.id === selectedScreen?.id ? 'selected' : ''} ${screen.seats.includes(1) ? "available" : ""}`}
                            >
                                <div className="screen-number">Screen {screen.id}</div>
                                <div className="screen-time">{screen.time}</div>
                                <div className="movie-title">{selectedMovie.title}</div>
                                <div className="screen-seats">
                                    {screen.seats.map((seat, index) => (
                                        <div
                                            key={index}
                                            className={`seat ${seat ? "available" : "unavailable"} ${selectedSeats.includes(index) && selectedScreen?.id === screen.id ? "selected" : ""}`}
                                            onClick={() => {
                                                if (seat) {
                                                    handleSeatSelect(index, { ...screen, movie: selectedMovie });
                                                }
                                            }}
                                        >
                                            <div className="seat-number">{index + 1}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="booking-summary">
                <div className="selected-screen">
                    {selectedScreen && (
                        <div>
                            <h3>Selected screen : {selectedScreen.id}</h3>
                            <p>Time: {selectedScreen.time}</p>
                            <p>Movie: {selectedMovie.title}</p>
                        </div>
                    )}
                </div>
                <div className="selected-seats">
                    {selectedScreen && selectedSeats.length > 0 && (
                        <div>
                            
                            <h3>Selected Seats: <span>{selectedSeats.map(index => index + 1).join(", ")}</span></h3>
                            <h3>No. of .tickets: {selectedSeats?.length}</h3>
                        </div>
                    )}
                </div>
            </div>
            <button className="payment-button" onClick={handleBooking} disabled={!selectedScreen || selectedSeats?.length === 0}>Book Now</button>
        </div>
    );
}

export default Book;
