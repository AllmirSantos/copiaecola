import * as S from "./styles";
import Animation01 from "../../components/animations/animation01";
import Animation02 from "../../components/animations/animation02";
import Animation03 from "../../components/animations/animation03";
import Animation04 from "../../components/animations/animation04";
import Animation05 from "../../components/animations/animation05";

export default function Animations() {
  return (
    <S.Container>
      <section className="boxAll">
        <h1>Animações</h1>
        <section>
          <Animation01 />
          <Animation02 />
          <Animation03 />
          <Animation04 />
          <Animation05 />
        </section>
      </section>
    </S.Container>
  );
}
