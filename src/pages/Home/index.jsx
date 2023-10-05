import { Link } from "react-router-dom";

import * as S from "./styles";

export default function Home() {
  return (
    <S.Container>
      <h1>"Copia e Colar"</h1>

      <ul>
        <li>
          <Link to={"/botaos"} className="nav-link">
            Bottoes
          </Link>
        </li>

        <li>
          <Link to={"/botaos"} className="nav-link">
            Inputs{" "}
          </Link>
        </li>
        <li>
          <Link to={"/botaos"} className="nav-link">
            Efeito click{" "}
          </Link>
        </li>
        <li>
          <Link to={"/botaos"} className="nav-link">
            Navegaçao{" "}
          </Link>
        </li>
        <li>
          <Link to={"/botaos"} className="nav-link">
            Usar Theme{" "}
          </Link>
        </li>
        <li>
          <Link to={"/botaos"} className="nav-link">
            Animaçoes{" "}
          </Link>
        </li>
        <li>
          <Link to={"/botaos"} className="nav-link">
            Outros
          </Link>
        </li>
      </ul>
    </S.Container>
  );
}
