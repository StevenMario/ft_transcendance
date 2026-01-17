import Button from "@mui/material/Button";
import left from "../../../assets/left.svg"
export default function SingUpButton() {
	return (
		<Button 
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