import Button from "@mui/material/Button";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
export default function SingInButton()
{
	return (
		<Button 
			sx={{
				color: "#6C6C6C",
				fontSize: "1rem",
			 }}    
			endIcon={<ArrowCircleRightIcon
				sx={{ width: "30px",
					height: "30px"
				 }}
			 />}>
			Sing In
		</Button>
	);
}