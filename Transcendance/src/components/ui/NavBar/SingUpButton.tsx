import Button from "@mui/material/Button";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
export default function SingUpButton()
{
	return (
		<Button 
			sx={{
				color: "#6C6C6C",
				fontSize: "1rem",
			 }}    
			endIcon={<ArrowCircleRightIcon
				sx={{ width: "30px",
					height: "30px",
					color: "orange"
				 }}
			 />}>
			Sing Up
		</Button>
	);
}