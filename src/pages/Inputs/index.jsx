import Input from "../../components/Input";
import * as S from "./styles";

import { CopyStyle, CopyIndex, CopyComponent } from "./data";

export default function Inputs() {
  return (
    <S.Container>
      <section className="boxAll">
        <h1>Inputs</h1>
        <section>
          <Input name={"Email"} label={"Digite seu email"} type="email" />

          <S.Content>
            <pre>
              <p>index.jsx</p>
              <CopyIndex />
            </pre>
            <pre>
              <p>style.jsx</p>
              <CopyStyle />
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
