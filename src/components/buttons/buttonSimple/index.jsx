import { ContainerShirts } from "./style";

export default function ButtonSimple({
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
  borderColor,
  borderWidth,
}) {
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
        borderColor={borderColor}
        borderWidth={borderWidth}
      >
        <button>
          <p>{title}</p>
        </button>
      </ContainerShirts>
    </>
  );
}
