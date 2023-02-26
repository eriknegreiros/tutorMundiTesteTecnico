import { HowToUseSection } from "./style";

const HowToUse = () => {
  return (
    <HowToUseSection>
      <div className="allContentHowToUse">
        <h1>
          Veja como é fácil usar o <span>TutorMundi</span>
        </h1>
        <div>
          <h2> 1) Escolha a matéria</h2>
          <p>
            Com um pacote de horas, tenha acesso a todas as matérias:
            Matemática, Português, Física, Química, Biologia, Redação, Inglês,
            História, Geografia, Filosofia, Sociologia.
          </p>
        </div>

        <div>
          <h2> 2) Escreva sua dúvida</h2>
          <p>
            Tire uma foto do livro de exercícios, da sua redação ou do seu
            caderno e escreva com o que você precisa de ajuda.
          </p>
        </div>

        <div>
          <h2> 3) Encontramos um Tutor para você</h2>
          <p>
            Com um clique nosso aplicativo vai selecionar o tutor perfeito para
            tirar sua dúvida e garantir que você aprenda.
          </p>
        </div>
      </div>

      <div className="bgColorImgHowToUse">
        <img
          src="https://media.tutormundi.com/wp-content/uploads/2021/03/05192608/chat-mockup-min-533x1024.png"
          alt="smartphone"
        />
      </div>
    </HowToUseSection>
  );
};

export default HowToUse;
