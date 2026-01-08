import { Button } from "@mui/material";
import '../../../index.css'

const GetStartSection = () => {
    return (
        <section className="py-12 md:py-20 ">
            <div className="container">
                <div className="relative overflow-hidden rounded-3xl bg-linear-to-tr from-orange-400 to-pink-500 p-8 md:p-12 lg:p-16 text-center">
                    {/* Decorative circles */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-500/50 clip-star" />
                    <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gray-500/10 clip-star" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-50 mb-4">
                            Connect with reliable professionals in just a few clicks.
                        </h2>
                        <p className="text-amber-50 font-semibold text-sm md:text-base mb-8">
                            "Free to join. Fast and easy to use."
                        </p>
                        <Button
                            variant="contained"
                            sx={{
                                paddingRight:4,
                                paddingLeft:4,
                                paddingTop:1,
                                paddingBottom:1,
                                borderRadius: '1.5rem',
                                color: 'white',
                                backgroundColor: 'orange',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 165, 0, 0.08)',
                                },

                                '&:focus-visible': {
                                    transform: 'scale(1.05)',
                                }
                            }}
                        >
                            Get started now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStartSection;
