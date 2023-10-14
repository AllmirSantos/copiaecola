import * as S from "./styles";
import Button from "../../components/buttons/button";

export default function Buttons() {
  return (
    <S.Container>
      <section className="boxAll">
        <h1>Botoes</h1>
        <section>
          <Button
            title="Button"
            bgColor=""
            bgColorActive=""
            colorFont=""
            colorFontActive=""
            width="200px"
            height=""
            radius=""
            fontSize=""
            padding=""
            shadow=""
          />
        </section>
      </section>
    </S.Container>
  );
}
