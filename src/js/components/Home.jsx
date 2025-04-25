import React, { useState } from "react";
import Body from "./toDo";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState('');
	const [tasks, setTask] = useState([]);
	let count =0;

	const handleChange = (e) => {
		setInputValue(e.target.value);
		
	}
	const addTask =e => {
		e.preventDefault();
		if(inputValue.trim()=== ''){
			alert('Debe contener un valor')
			return;
		}
		setTask([...tasks, inputValue]);
		setInputValue('');
		count = tasks.length+1;
		console.log(tasks.length+1)
	
	}
	count = tasks.length;
	


	return (
	<>
			<div className=" text-center container-fluid m-5 p-2">
				<div className=" d-flex justify-content-center ">
					<h1 className="center">To DoS...</h1>
				</div>
			</div>
			<div className="post-it">
				<Body
					handleChange={handleChange}
					value={inputValue}
					addTask={addTask}


				/>
				<div className="mt-3 text-center">
					{tasks.map((task, index) => (
						<p key={index} className="border p-2">{task}</p>
					))}
				</div>
				<div>
					{count === 0 ? "No hay tareas pendientes" : `${count} tareas pendientes`}

				</div>
			</div>




		</>
	)

};

export default Home;