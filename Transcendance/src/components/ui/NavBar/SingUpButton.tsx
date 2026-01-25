import Button from "@mui/material/Button";
import left from "../../../assets/left.svg"
import { Link } from "react-router-dom";

export default function SingUpButton() {
	return (
		<Button
			component={Link}
			to='/singup'
			sx={{
				color: "#333333",
				fontSize: "1rem",
			}}
			endIcon={
				<img
					src={left}
					alt="Icône flèche"
					style={{ width: 18, height: 18 }}
				/>
			}
		>
			Sing Up
		</Button>
	);
}