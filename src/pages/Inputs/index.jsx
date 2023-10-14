import Input from "../../components/Input";
import * as S from "./styles";

export default function Inputs() {
  return (
    <S.Container>
      <section className="boxAll">
        <h1>Inputs</h1>
        <section>
          <Input name={"Email"} label={"Digite seu email"} type="email" />
        </section>
      </section>
    </S.Container>
  );
}
