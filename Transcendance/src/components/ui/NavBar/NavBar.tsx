import logo from "../../../assets/logo.svg";
import { Button } from '@mui/material'
import LoginButton from './LoginButton.tsx'
import SingUpButton from "./SingUpButton.tsx";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";

export default function NavBar() {

    const [open, setOpen] = useState<boolean>(false);
    const drawerContent = (
        <div className="w-64">
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Why us ?" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Explore" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Services" />
                    </ListItemButton>
                </ListItem>

                <ListItem className="flex flex-col gap-2 mt-4">
                    <SingUpButton />
                    <LoginButton />
                </ListItem>
            </List>
        </div>
    );

    const toggleDrawer = (check: boolean) => {
        setOpen(check);
    }


    return (
        <>
            {/* Responsive lg */}
            <nav className=" hidden max-w-7xl mx-auto px-4 py-4 lg:flex items-center justify-between">
                <img className="w-20 sm:w-25 md:w-30" src={logo} alt="Logo" />
                {/* <SearchBar classValue="relative w-75"></SearchBar> */}
                <div>
                    <Button color="inherit">
                        Acceuil
                    </Button>
                    <Button color="inherit">
                        Explorer
                    </Button>
                    <Button color="inherit">
                        A propos
                    </Button>
                </div>
                <div className="flex gap-5">
                    <SingUpButton />
                    <LoginButton />

                </div>
            </nav>
            {/* Responsive md */}
            <nav className="max-w-7xl mx-auto px-4 py-4 flex lg:hidden items-center justify-between">
                <img className="w-20" src={logo} alt="Logo" />

                <IconButton onClick={() => toggleDrawer(true)}>
                    <MenuIcon fontSize="large" />
                </IconButton>

                <Drawer
                    className="lg:hidden"
                    anchor="right"
                    open={open}
                    onClose={() => toggleDrawer(false)}
                >
                    <div className="flex justify-end p-4">
                        <IconButton onClick={() => setOpen(false)}>
                            <CloseIcon fontSize="large" />
                        </IconButton>
                    </div>
                    {drawerContent}
                </Drawer>
            </nav>
        </>
    );
}