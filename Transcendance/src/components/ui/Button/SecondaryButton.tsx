import { Button } from "@mui/material";
import GoogleIcone from "../../../assets/icons/material-icon-theme_google.svg"

interface ButtonProps {
    // onClick?: () => void;
    name: string;
    classButton?: string;
    px?: string;
    fontSize?: string;
}


function SecondaryButton(props: ButtonProps) {
    return (
        <Button
            variant="outlined"
            sx={{
                color: "#333",
                borderRadius: "32px",
                padding: `8px ${props.px || "40px"}`,
                fontSize: props.fontSize || "16px",
                fontWeight: 500,
                lineHeight: "160%",
                width: "100%",
                border: "2px solid transparent",
                background: "    linear-gradient(#f5f5f5,#f5f5f5) padding-box, \
                   linear-gradient(90deg, #ff6a00, #ee0979) border-box"

            }}
            startIcon={
                < img
                    src={GoogleIcone}
                    alt="GoogleIcone"
                    style={{ width: 25, height: 35 }}
                />
            }
        >
            {props.name}
        </Button >
    );
}

export default SecondaryButton;