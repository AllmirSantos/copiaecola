import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "../../images/react.svg";

import { ContainerModal } from "./style";

export default function WeeklyModal({ open, handleClose, weeklyFeed }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <ContainerModal>
          <section className="contentModal">
            <div className="boxButtonExemple">Botao aqui</div>
            <div className="contentModalBox">
              <section>
                <div>
                  <img className="imgLogo" src={React} alt="24" />
                  <p>index.tsx</p>
                </div>
                <pre>
                  <code className="code">
                    {`
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
`}
                  </code>
                </pre>
              </section>
              <section>
                <div className="boxHeaderStyle">
                  <img className="imgLogo" src={React} alt="24" />
                  <p>style.tsx</p>
                </div>
                <pre>
                  <code className="code">
                    {`
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
`}
                  </code>
                </pre>
              </section>
            </div>
            <div className="btnClose">
              <button onClick={handleClose}>Fechar</button>
            </div>
          </section>
        </ContainerModal>
      </Box>
    </Modal>
  );
}
