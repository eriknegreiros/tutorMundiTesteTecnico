import { Main } from "./style";
import { motion } from "framer-motion";
import woman from "../../../assets/woman.svg";

const LandPage = () => {
  return (
    <Main>
      <div className="divtextLand">
        <h2>
          Aulas de <span>reforço escolar</span> on-line e na hora, sem agendar
        </h2>
        <p>
          Tire todas as suas dúvidas com tutores das melhores universidades onde
          quer que esteja
        </p>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          SEJA UMA ESCOLA PARCEIRA
        </motion.button>
      </div>

      <div>
        <img src={woman} alt="" />
      </div>
    </Main>
  );
};

export default LandPage;
