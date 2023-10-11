import * as S from "./styles";
import ButtonSimple from "../../components/buttons/buttonSimple";
import { CopyStile, CopyIndex, CopyComponent } from "./data";

export default function Buttons() {
  return (
    <S.Container>
      <section className="boxAll">
        <h1>Botoes</h1>
        <section>
          <ButtonSimple
            title="Button Simple"
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
          <S.Content>
            <pre>
              <p>index.jsx</p>
              <CopyIndex />
            </pre>
            <pre>
              <p>style.jsx</p>
              <CopyStile />
            </pre>

            <pre>
              <p>Component</p>
              <CopyComponent />
            </pre>
          </S.Content>
        </section>
      </section>
    </S.Container>
  );
}
