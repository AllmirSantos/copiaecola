import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "../../images/react.svg";

import { ContainerModal } from "./style";
import { useState } from "react";
import { styled } from "@mui/material/styles";

const ModalCode = styled(Modal)({
  "& .MuiModal-backdrop": {
    backgroundColor: "transparent",
  },
});

export default function WeeklyModal({
  open,
  handleClose,
  codeIndex,
  codeStyle,
  packages,
  obs,
}) {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  function onOpenPopUp() {
    setIsOpenPopUp(!isOpenPopUp);
  }

  return (
    <ModalCode open={open} onClose={handleClose}>
      <Box>
        <ContainerModal>
          <section className="contentModal">
            <div className="boxButtonExemple">
              <div className="Packages">
                <pre>{packages}</pre>
              </div>
            </div>
            <div className="contentModalBox">
              <section
                className={(isOpenPopUp && "sectionClose") || "sectionOpen"}
              >
                <div>
                  <img className="imgLogo" src={React} alt="24" />
                  <p>index.tsx</p>
                </div>
                <pre className="preIndex">
                  <code className="code ">{codeIndex}</code>
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

                <pre className="preStyle">
                  <code className="code language-css">{codeStyle} </code>
                </pre>
              </section>
            </div>

            <div className="btnClose">
              <button onClick={handleClose}>Fechar</button>
            </div>
          </section>
        </ContainerModal>
      </Box>
    </ModalCode>
  );
}
