import { TutorsSection } from "./style";
import { motion } from "framer-motion";

const Tutors = () => {
  return (
    <TutorsSection>
      <div className="tutorsText">
        <h1>
          Tutores que fazem de tudo para que você <span>aprenda.</span>
        </h1>
        <p>
          O TutorMundi encontra o tutor perfeito para a sua necessidade. Eles
          são treinados para encontrar a melhor forma de ensinar o conteúdo.
        </p>
      </div>

      <div className="tutorsImg">
        <img
          src="https://cdn-baghd.nitrocdn.com/XPVNXFbQrRLdOqtGRpNejMIrlIAesoms/assets/static/optimized/wp-content/uploads/2021/03/03191729/f647e7e1386a49a77815fc94e0ba704a.tutor-300x300.png"
          alt=""
        />

        <img
          src="https://cdn-baghd.nitrocdn.com/XPVNXFbQrRLdOqtGRpNejMIrlIAesoms/assets/static/optimized/wp-content/uploads/2021/03/03191722/4ecd1af74270da2d9b6c3985e1b997ae.matheus-tutor-300x300.png"
          alt=""
        />

        <img
          src="https://cdn-baghd.nitrocdn.com/XPVNXFbQrRLdOqtGRpNejMIrlIAesoms/assets/static/optimized/wp-content/uploads/2021/03/03191736/9f0ef5910de816fae85f02d2b63e4fa2.tutora1-300x300.png"
          alt=""
        />

        <img
          src="https://cdn-baghd.nitrocdn.com/XPVNXFbQrRLdOqtGRpNejMIrlIAesoms/assets/static/optimized/wp-content/uploads/2021/03/03191743/a2d2e7835d3a3bea3df2b0e780e72040.tutora2-300x300.png"
          alt=""
        />

        <img
          src="https://cdn-baghd.nitrocdn.com/XPVNXFbQrRLdOqtGRpNejMIrlIAesoms/assets/static/optimized/wp-content/uploads/2021/03/03191756/924f23f4bd5aa8aa62e927c61d2ae411.tutora3-300x300.png"
          alt=""
        />

        <img
          src="https://cdn-baghd.nitrocdn.com/XPVNXFbQrRLdOqtGRpNejMIrlIAesoms/assets/static/optimized/wp-content/uploads/2021/03/03192044/b1303cb638b7ccece09b0f761d2491b5.tutora4-300x300.png"
          alt=""
        />
      </div>
    </TutorsSection>
  );
};

export default Tutors;
