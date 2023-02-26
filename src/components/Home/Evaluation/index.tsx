import { EvaluationTutor } from "./style";
import heart from "../../../assets/heart.png";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import image1 from "../../../assets/study1.jpg";
import image2 from "../../../assets/study2.jpg";
import image3 from "../../../assets/study3.jpg";
import image4 from "../../../assets/study4.jpg";

const images = [
  {
    image: image1,
    name: "RAPHAEL SCHNEIDER",
    about: `"Agradeço todas as aulas, se não fosse por elas eu não teria saído do lugar" `,
    profession: "ESTUDANTE",
  },
  {
    image: image2,
    name: "CAMILA MORENA",
    about: ` "Eu estava afogando em duvidas e o TutorMundi  foi um bote salva-vidas!" `,
    profession: "ESTUDANTE",
  },
  {
    image: image3,
    name: "VITOR BARTIER",
    about: `"No TutorMundi eu realmente aprendo a fazer todos os exercícios!"`,
    profession: "ESTUDANTE",
  },
  {
    image: image4,
    name: "ANA PAULA",
    about: `"O TutorMundi é como ter um professor particular o tempo todo, em qualquer lugar"`,
    profession: "ESTUDANTE",
  },
];

const Evaluation = () => {
  const carousel: any = useRef();

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <>
      <EvaluationTutor>
        <div>
          <img src={heart} alt="draw heart" />
          <h1>
            Quem usa o <span>TutorMundi</span> se apaixona
          </h1>
        </div>

        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 300 }}
          >
            {images.map((element) => (
              <motion.div className="divImg" key={element.name}>
                <img src={element.image} alt="study" />
                <h2>{element.name}</h2>
                <p>{element.about}</p>
                <span>{element.profession}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </EvaluationTutor>
    </>
  );
};

export default Evaluation;
