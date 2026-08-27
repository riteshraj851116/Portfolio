import "../styles/Hero.css";
import profile from "../assets/Adobe Express - file.png";
import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";



function Hero(){


    return(


        <section className="hero" id="home">



            {/* 3D CODE BACKGROUND */}

            <div className="hero-background">

                <HeroBackground />

            </div>







            {/* LEFT CONTENT */}



            <motion.div


                className="hero-left"


                initial={{

                    opacity:0,

                    x:-80

                }}


                animate={{

                    opacity:1,

                    x:0

                }}


                transition={{

                    duration:1

                }}


            >



                <p className="hero-role">

                    FULL STACK DEVELOPER

                </p>





                <h1 className="hero-title">


                    RITESH

                    <br/>

                    RAJ


                </h1>






                <p className="hero-desc">


                    Passionate MERN Stack Developer creating

                    modern, responsive and interactive web

                    experiences with React, Node.js,

                    Express and MongoDB.


                </p>








                <a

                    href="#contact"

                    className="hero-btn"

                >


                    Contact Me


                    <span>

                        →

                    </span>



                </a>





            </motion.div>









            {/* RIGHT IMAGE */}



            <motion.div



                className="hero-right"



                initial={{


                    opacity:0,

                    scale:.8


                }}



                animate={{


                    opacity:1,

                    scale:1


                }}



                transition={{


                    duration:1


                }}



            >





                <div className="back-text">

                    RITESH

                </div>





                <motion.img



                    src={profile}



                    alt="Ritesh Raj"



                    className="hero-image"




                    animate={{


                        y:[0,-15,0]


                    }}




                    transition={{


                        duration:5,


                        repeat:Infinity,


                        ease:"easeInOut"


                    }}



                />





            </motion.div>







        </section>


    );

}



export default Hero;