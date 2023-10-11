import { useState } from "react";
import { ContainerShirts } from "./style";
import WeeklyModal from "../../Modal";
import { CopyPackages, CopyIndex, CopyStile, Obs } from "./data.jsx";
export default function ButtonEffect({
  title,
  fontSize,
  width,
  bgColor,
  bgColorActive,
  radius,
  colorFont,
  colorFontActive,
  height,
  padding,
  shadow,
  borderColor,
  borderWidth,
}) {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  function onOpenPopUp() {
    setIsOpenPopUp(!isOpenPopUp);
  }

  const handleClose = () => setIsOpenPopUp(false);

  return (
    <>
      <ContainerShirts
        bgColor={bgColor}
        radius={radius}
        fontSize={fontSize}
        width={width}
        bgColorActive={bgColorActive}
        colorFont={colorFont}
        colorFontActive={colorFontActive}
        height={height}
        padding={padding}
        shadow={shadow}
        borderColor={borderColor}
      >
        <button
          onClick={() => {
            onOpenPopUp(true);
          }}
        >
          <p>{title}</p>
        </button>
      </ContainerShirts>

      <WeeklyModal
        handleClose={handleClose}
        open={isOpenPopUp}
        packages={<CopyPackages />}
        codeIndex={<CopyIndex />}
        codeStyle={<CopyStile />}
        obs={<Obs />}
      />
    </>
  );
}
