import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
function SignUpLayout() {
  return (
    <section className="relative h-max  overflow-hidden px-5  ">
      {/* Content */}
      <NavBar hide={true} />
      <div className="relative md:-mt-7.5 ">
        <div className="flex justify-center items-center min-h-screen ">
          <div className="
                        flex 
                        flex-col 
                        rounded-[5px]
                        shadow-[0_12px_24px_0_rgba(0,0,0,0.10),0_0_10px_0_rgba(0,0,0,0.08)]
                        border
                        border-[#E5E5E5]
                        bg-[#F5F5F5]
                        justify-center 
                        items-center 
                        w-full
                        sm:w-[90%]
                        md:w-119.5
                        px-4
                        sm:px-5.5
                        py-6
                        sm:py-8
                        backdrop-blur-[250px]
                        max-w-119.5">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpLayout;