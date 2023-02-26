import { CardsDiv } from "./style";
import graphic from "../../../assets/graphic.png";
import study from "../../../assets/study.png";
import money from "../../../assets/money.png";
import handsClick from "../../../assets/handClick.png";

const CardsUse = () => {
  return (
    <CardsDiv>
      <div className="allCardsUse">
        <div className="divCardsUse">
          <img src={graphic} alt="graphic" />
          <p>
            Melhore suas notas e aprenda com nosso{" "}
            <span>atendimento personalizado</span>
          </p>
        </div>
        <div className="divCardsUse">
          <img src={study} alt="study" />
          <p>
            Aulas de reforço de todas as matérias escolares{" "}
            <span>com um plano único!</span>
          </p>
        </div>
        <div className="divCardsUse">
          <img src={money} alt="money" />
          <p>
            Compre um pacote de horas e gaste somente o que precisa.{" "}
            <span>Suas horas não expiram nunca!</span>
          </p>
        </div>
        <div className="divCardsUse">
          <img src={handsClick} alt="money" />
          <p>
            Todas as aulas ficam salvas para você poder{" "}
            <span>revisar o que aprendeu</span>
          </p>
        </div>
      </div>
    </CardsDiv>
  );
};

export default CardsUse;
