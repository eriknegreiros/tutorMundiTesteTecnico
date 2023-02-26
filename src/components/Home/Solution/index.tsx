import { SolutionTutor } from "./style";

const Solution = () => {
  return (
    <>
      <SolutionTutor>
        <h1>
          Uma solução para <span>alunos e escolas</span>{" "}
        </h1>
        <div className="allDivsSolution">
          <div className="divAlignSolution">
            <img
              src="https://media.tutormundi.com/wp-content/uploads/2021/03/10201826/tutormundi-para-alunos.png"
              alt=""
            />
            <div className="divTextSolution">
              <h2>Reforço Escolar para Alunos</h2>
              <p>
                Baixe o aplicativo e compre um pacote de aulas particulares.
                Pague via o aplicativo e gaste apenas o que consumir.
              </p>
              <button>CRIE SUA CONTA</button>
            </div>
          </div>
          <div className="divAlignSolution">
            <img
              src="https://media.tutormundi.com/wp-content/uploads/2021/03/10201941/tutormundi-para-escolas.png"
              alt=""
            />
            <div className="divTextSolution">
              <h2>Tutoria para Escolas</h2>
              <p>
                Promova a inovação na sua escola. Tenha acesso aos melhores
                tutores do país e ofereça o melhor da tecnologia educacional.
              </p>
              <button>SAIBA MAIS</button>
            </div>
          </div>
        </div>
      </SolutionTutor>
    </>
  );
};

export default Solution;
