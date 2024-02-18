import { useState } from "react";
import { Button } from "./components/Button";

function App() {
	const [temp, setTemp] = useState(14);

	const handleClick = (type) => {
		if (type == "add") {
			setTemp(temp + 1);
		} else {
			setTemp(temp - 1);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center flex-col bg-slate-600">
			<div
				className="w-[400px] h-[400px] rounded-lg flex flex-col bg-cyan-600"
				id="main-rec"
			>
				<div className="m-auto">
					<div
						className={`w-[150px] h-[150px] m-auto ${
							temp > 25 ? "bg-orange-500" : "bg-blue-500"
						}  rounded-full text-grey-400 flex justify-center flex-col text-center border-[3px]`}
						id="circle"
					>
						<div className="text-3xl text-white">{temp}°C</div>
					</div>
					<div className="flex justify-evenly p-4" id="btns">
						<Button id="add" onClick={() => handleClick("add")}>
							+
						</Button>
						<Button id="sub" onClick={() => handleClick("sub")}>
							-
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
