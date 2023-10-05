import { useState } from "react";
import * as S from "./styles";
import WeeklyModal from "../../components/Modal";

export default function Buttons() {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  function onOpenPopUp() {
    setIsOpenPopUp(!isOpenPopUp);
  }

  const handleClose = () => setIsOpenPopUp(false);

  return (
    <S.Container>
      <h1>Botoes</h1>
      <button
        onClick={() => {
          onOpenPopUp(true);
        }}
      >
        Entrar
      </button>
      <br />
      <br />
      <WeeklyModal handleClose={handleClose} open={isOpenPopUp} />
    </S.Container>
  );
}
