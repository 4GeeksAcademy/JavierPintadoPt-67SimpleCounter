import React, { useEffect, useState } from "react";
import { Digit } from "./digit.jsx";

// creamos la funcion
const Home = () => {

	// usamos useState (estados) los estados son asincronos
	// cada digito va a comenzar en 0
	const [timer, setTimer] = useState(0)
	const [active, setActive] = useState(false)
	

	// Array de dependencias. Useefect lo que hace es que cada vez que timer sea modificado se eejcuta settimeout  
	// el devolvera setTimer con el valor actual del estado y le va a sumar 1
	useEffect(() => {
		if (active) {
			setTimeout( () => {
				setTimer(value => value + 1)
			}, 1000)
		}
	}, [timer, active])

	const startStop = () => {setActive(value => !value)}

	const restTimer = () => setTimer(value=> value=0)

	const handleChange = e => setTimer(value=> value=e.target.value)
	

	return (
		<main className="text-center">
			<section className="counter-holder">
			<Digit number={<span className="fa fa-clock"></span>}/>
			<Digit number={Math.floor(timer/100000)%10}/>
			<Digit number={Math.floor(timer/10000)%10}/>
			<Digit number={Math.floor(timer/1000)%10}/>
			<Digit number={Math.floor(timer/100)%10}/>
			<Digit number={Math.floor(timer/10)%10}/>
			<Digit number={Math.floor(timer%10)}/>
			</section>

			<section className="container text-center my-5">
				<h2>Counter Controller</h2>
				<div>
					<button
					disabled={active}
					onClick={startStop} className="mx-1 btn btn-success">Start</button>
					
					<button
					disabled={!active}
					 onClick={startStop} className="mx-1 btn btn-secondary">Stop</button>
					
					<button onClick={restTimer} className="mx-1 btn btn-danger">Rest</button>
				</div>
			</section>

			
		</main>
	);
};

export default Home;

// primer section
// ultimo digit cuando llega a 10 vuelve a 0
// penultimo digit cuando el anterior llega a 9 cuenta mas lo hacemos dividiendo por 10
// igual pero por 100 e incrementamos

//segundo section
// boton 

//3 section cuenta regresiva