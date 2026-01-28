import logo from "../../../assets/logo.svg";
import PrimaryButton from '../Button/PrimaryButton.tsx'
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

interface NavBarProps {
    hide?: boolean;
}

const listItemTexts = ["Accueil", "Explorer", "A propos"];

export default function NavBar({ hide = false }: NavBarProps) {

    const [open, setOpen] = useState<boolean>(false);
    const drawerContent = (
        <div className="w-64">
            <List>
                {listItemTexts.map(listItemText => {
                    return (
                        <ListItem>
                            <ListItemButton className="flex justify-center">
                                <ListItemText primary={listItemText} sx={{ textAlign: "center" }} />
                            </ListItemButton>
                        </ListItem>
                    )
                })}
                <ListItem className="flex  flex-col justify-between items-center">
                    <SingUpButton />
                    <div className="mt-3">
                        <PrimaryButton name="Se Conecter" />
                    </div>
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
            <nav className="hidden z-50 lg:flex w-full max-w-360 h-20 mx-auto px-4 items-center justify-between">
                <img className="w-20 sm:w-25 md:w-30" src={logo} alt="Logo" />
                {!hide && (
                    <>
                        {/* <SearchBar classValue="relative w-75"></SearchBar> */}
                        <div className="flex w-61.5 justify-between items-center">
                            {listItemTexts.map(listItemText => {
                                return (
                                    <ListItem>
                                        <ListItemButton className="flex justify-center">
                                            <ListItemText className="w-max" primary={listItemText} sx={{ textAlign: "justify" }} />
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </div>
                        <div className="flex gap-5">
                            <SingUpButton />
                            <PrimaryButton name="Se Connecter" />
                        </div>
                    </>
                )}
                {
                    hide && (
                        <p className="mt-3 text-xs sm:text-sm md:text-[16px] font-bold leading-[160%]">
                            Déjà inscrit(e) ? <a href="#" className="text-[#E64A22]">S'identifier</a>
                        </p>
                    )
                }
            </nav>
            {/* Responsive md */}
            <nav className="max-w-7xl z-50 mx-auto px-4 py-4 flex lg:hidden items-center justify-between">
                <img className="w-20" src={logo} alt="Logo" />

                {!hide && (
                    <>
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
                    </>
                )}
                {
                    hide && (
                        <p className=" text-xs sm:text-sm md:text-[16px] font-bold leading-[160%]">
                            Déjà inscrit(e) ? <a href="#" className="text-[#E64A22]">S'identifier</a>
                        </p>
                    )
                }
            </nav>
        </>
    );
}