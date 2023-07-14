const seats = document.querySelector('.container');
const selectedMovie = document.getElementById('ddlMovieList');
let ticketPrice = +selectedMovie.value || 0;

seats.addEventListener('click',(e)=>{
    if(!e.target.classList.contains('occupied') && e.target.classList.contains('seat'))
    {
        e.target.classList.toggle('selected');
    }
    calculateSeatsSelected();
});

selectedMovie.addEventListener('change',(e)=>{
    ticketPrice = e.target.value;
    calculateSeatsSelected();
});

const calculateSeatsSelected = () =>{
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const countofSelectedSeats = selectedSeats.length;
    document.getElementById('count').innerHTML = countofSelectedSeats;
    document.getElementById('total').innerHTML = countofSelectedSeats * ticketPrice;
}

