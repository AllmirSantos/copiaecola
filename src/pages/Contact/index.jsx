import { useState } from "react";
import * as S from "./styles";

export default function Contact() {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  function onOpenPopUp() {
    setIsOpenPopUp(!isOpenPopUp);
  }
  return (
    <S.Container>
      <h1>Contato</h1>
      <button
        onClick={() => {
          onOpenPopUp(true);
        }}
      >
        Entrar
      </button>
      <br />
      <br />
      {isOpenPopUp && <text>Hello </text>}

      <ul>
        <li>Bottoes</li>
        <li>Efeito click</li>
        <li>Navegaçao</li>
        <li>Usar Theme</li>
        <li>Animaçoes</li>
        <li>Outros</li>
      </ul>
    </S.Container>
  );
}
