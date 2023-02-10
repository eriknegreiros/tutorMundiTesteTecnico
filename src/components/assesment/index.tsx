import { Main } from "./style";
import imgBook from "../../assets/livro.png";
import { Stack, Rating } from "@mui/material";
import { useState } from "react";

const AssesmentMain = () => {
  const StarIcon = (props: any) => {
    return (
      <svg
        width={34}
        height={32}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M25.548 19.307a.913.913 0 0 0-.23.813l2.105 10.198-9.311-4.518a.895.895 0 0 0-.839.03L8.303 31l1.385-10.323a.913.913 0 0 0-.288-.794L1.75 12.88l10.168-1.862a.902.902 0 0 0 .66-.52L16.821 1l4.898 9.172c.14.263.401.44.696.472l10.273 1.133-7.14 7.53Z"
          stroke="#090000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const ColoredStarIcon = (props: any) => {
    return (
      <svg width={33} height={32} xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>{"Estrela Copy 6"}</title>
        <g strokeWidth={2} fill="none" fillRule="evenodd">
          <path
            d="M24.798 19.307a.913.913 0 0 0-.23.813l2.105 10.198-9.311-4.518a.895.895 0 0 0-.839.03L7.553 31l1.385-10.322a.913.913 0 0 0-.288-.795L1 12.88l10.168-1.862a.902.902 0 0 0 .66-.52L16.071 1l4.898 9.172c.14.263.401.44.696.472l10.273 1.133-7.14 7.53Z"
            stroke="#090000"
            fill="#FFDC64            "
            fillRule="nonzero"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.442 13.351c.019 1.697.584 3.536 1.696 5.516a24.1 24.1 0 0 0 4.189 5.439l-5.273 2.985.819-7.914-5.652-5.26 4.22-.766Z"
            stroke="#DFD883"
            fill="#DFD883"
            strokeLinecap="square"
          />
        </g>
      </svg>
    );
  };

  const [value, SetValue] = useState<number | null>(null);
  
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    SetValue(newValue)



    console.log(newValue)
  }
  

  return (
    <Main>
      <img
        className="imgBook"
        src={imgBook}
        alt="book design with the cover of stars"
      />
      <h1>Como foi a ajuda do tutor?</h1>
      <div className="divStar">
        <Stack>
          <Rating
            value={value} 
            onChange={handleChange}
            className="stars"
            icon={<ColoredStarIcon />}
            emptyIcon={<StarIcon />}
          />
        </Stack>
      </div>

      <div className="divButtons">
        <button className="skipBtn">PULAR</button>
        <button className={`${value ? 'confirmBtn1' : 'confirmBtn2'}`}>CONFIRMAR</button>
      </div>
    </Main>
  );
};

export default AssesmentMain;
