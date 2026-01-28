import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
function SignUpLayout() {
    return (
        <section className="relative h-max  overflow-hidden px-5 ">
            {/* Content */}
            <NavBar hide={true} />
            <div className="relative z-10">
                <div className="flex justify-center items-center min-h-screen">

                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    );
}

export default SignUpLayout;