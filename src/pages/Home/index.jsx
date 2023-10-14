import { Link } from "react-router-dom";

import * as S from "./styles";

import hljs from "highlight.js";
import "highlight.js/styles/base16/dracula.css";
import { useEffect } from "react";
import { marked } from "marked";

const markdown = `
  \`\`\`typescript
    const variable = 'hello';

    function getProfile(id: string): {
      name: string; address: string, photo: string
    } {
      return {
        name: 'ben', address: "ben's house", photo: "/ben.png"
      };
    }
  \`\`\`
`;

export default function Home() {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <S.Container>
      <script>hljs.highlightAll();</script>
      <section>
        <h1>"Copia e Colar"</h1>

        <pre>
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
        </pre>

        <ul>
          <li>
            <Link to={"/botaos"} className="nav-link">
              Criação de projetos
            </Link>
          </li>
          <li>
            <Link to={"/botaos"} className="nav-link">
              Bottoes
            </Link>
          </li>

          <li>
            <Link to={"/inputs"} className="nav-link">
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
            <Link to={"/theme-page"} className="nav-link">
              Usar Theme{" "}
            </Link>
          </li>
          <li>
            <Link to={"/animations"} className="nav-link">
              Animaçoes{" "}
            </Link>
          </li>
          <li>
            <Link to={"/botaos"} className="nav-link">
              Outros
            </Link>
          </li>
        </ul>
      </section>
    </S.Container>
  );
}
