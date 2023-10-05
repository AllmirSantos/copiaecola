import * as S from "./styles";
import ButtonSimple from "../../components/buttons/buttonSimple";

export default function Buttons() {
  return (
    <S.Container>
      <h1>Botoes</h1>
      <ButtonSimple
        title="Hello"
        bgColor="green"
        bgColorActive="pink"
        colorFont="pink"
        colorFontActive="green"
        width="200px"
        height="50px"
        radius="10px"
        fontSize="16px"
        padding="5px"
        shadow="#ffffff7e"
      />
    </S.Container>
  );
}
