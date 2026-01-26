import { Outlet } from "react-router-dom";
import LogoRedBlur from "../../../assets/Logo_red_blur.svg";
import LogoYellowBlur from "../../../assets/Logo_yello_blur.svg";
import NavBar from "../NavBar/NavBar";
function SignUpLayout() {
    return (
        <section className="relative h-max  overflow-hidden px-5 ">
            {/* Logo Red Blur - Bottom Left */}
            <img
                src={LogoRedBlur}
                alt="Logo Red Blur"
                className="absolute bottom-0 left-0 pointer-events-none lg:w-auto lg:h-auto w-1/3 h-1/3 -z-10"
            />
            {/* Logo Yellow Blur - Top Right */}
            <img
                src={LogoYellowBlur}
                alt="Logo Yellow Blur"
                className="absolute top-0 right-0 pointer-events-none lg:w-auto lg:h-auto w-1/3 h-1/3 -z-10"
            />
            {/* Content */}
            <NavBar hide={true} />
            <Outlet></Outlet>
        </section>
    );
}

export default SignUpLayout;