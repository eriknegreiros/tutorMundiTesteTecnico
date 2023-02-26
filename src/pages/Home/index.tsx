import Header from "../../components/Home/Header";
import LandPage from "../../components/Home/LandPage";
import HowToUse from "../../components/Home/HowToUse";
import CardsUse from "../../components/Home/CardsUse";
import Tutors from "../../components/Home/Tutors";
import DataTutorMundi from "../../components/Home/DataTutorMundi";
import Evaluation from "../../components/Home/Evaluation";
import Solution from "../../components/Home/Solution";
const Home = () => {
  return (
    <>
      <Header />
      <LandPage />
      <HowToUse />
      <CardsUse />
      <Tutors />
      <DataTutorMundi />
      <Evaluation />
      <Solution />
    </>
  );
};

export default Home;
