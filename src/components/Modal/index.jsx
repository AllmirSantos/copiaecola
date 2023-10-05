import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "../../images/react.svg";

import { ContainerModal } from "./style";
import { useState } from "react";

export default function WeeklyModal({
  open,
  handleClose,
  codeIndex,
  codeStyle,
  exemple,
}) {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  function onOpenPopUp() {
    setIsOpenPopUp(!isOpenPopUp);
  }

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
            <div className="boxButtonExemple">{exemple}</div>
            <div className="contentModalBox">
              <section
                className={(isOpenPopUp && "sectionClose") || "sectionOpen"}
              >
                <div>
                  <img className="imgLogo" src={React} alt="24" />
                  <p>index.tsx</p>
                </div>
                <pre>
                  <code className="code">{codeIndex}</code>
                </pre>
              </section>
              <section
                className={(isOpenPopUp && "sectionOpen") || "sectionClose"}
              >
                <div className="boxHeaderStyle">
                  <img className="imgLogo" src={React} alt="24" />
                  <p>style.tsx</p>
                </div>
                <button
                  className={
                    (isOpenPopUp && "btnExpandedLeft") || "btnExpandedRight"
                  }
                  onClick={() => {
                    onOpenPopUp(true);
                  }}
                >
                  +
                </button>

                <pre>
                  <code className="code">{codeStyle}</code>
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
