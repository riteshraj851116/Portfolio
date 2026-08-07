import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Text } from "@react-three/drei";
import { useRef } from "react";



const codeList = [

    "< />",
    "{ }",
    "( )",
    "React",
    "React.js",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "MERN",
    "Full Stack",
    "API",
    "REST API",
    "JWT",
    "Git",
    "GitHub",
    "npm",
    "Vite",
    "Redux",
    "Tailwind",
    "HTML",
    "CSS",
    "SCSS",
    "const",
    "let",
    "function",
    "async",
    "await",
    "useState",
    "useEffect",
    "props",
    "component",
    "router",
    "server",
    "database",
    "frontend",
    "backend"

];








function CodeParticle({text, position}){


    const ref = useRef();




    useFrame((state)=>{


        if(ref.current){


            ref.current.position.y =

            position[1] +

            Math.sin(

                state.clock.elapsedTime * 0.25

                +

                position[0]

            ) * 0.18;



            ref.current.rotation.y =

            Math.sin(

                state.clock.elapsedTime * 0.15

            ) * 0.4;



        }


    });






    return(


        <Float


            speed={0.4}


            floatIntensity={0.5}


            rotationIntensity={0.2}


        >



            <Text


                ref={ref}


                position={position}


                fontSize={0.18}


                color="#c6a86b"


                fillOpacity={0.28}


                anchorX="center"


                anchorY="middle"


            >

                {text}


            </Text>




        </Float>


    );

}









function CodeCloud(){



    return(


        <group>


            {


                codeList.map((item,index)=>(


                    <CodeParticle



                        key={index}



                        text={item}



                        position={[



                            (Math.random()-0.5)*18,



                            (Math.random()-0.5)*12,



                            (Math.random()-0.5)*10



                        ]}



                    />


                ))

            }


        </group>


    );

}









function MovingDots(){


    const points = useRef();



    useFrame((state)=>{


        if(points.current){


            points.current.rotation.y =

            state.clock.elapsedTime*0.03;


        }


    });




    return(


        <points ref={points}>


            <sphereGeometry

                args={[8,32,32]}

            />



            <pointsMaterial


                size={0.01}


                color="#c6a86b"


                transparent


                opacity={0.15}


            />



        </points>


    );

}









export default function HeroBackground(){


    return(


        <Canvas


            camera={{


                position:[0,0,8],


                fov:45


            }}



        >





            <ambientLight


                intensity={0.2}


            />





            <pointLight


                position={[0,0,5]}


                intensity={0.5}


                color="#c6a86b"


            />






            <Stars


                count={500}


                radius={80}


                depth={50}


                factor={1}


                fade


            />







            <MovingDots />





            <CodeCloud />





        </Canvas>


    );

}