import * as S from "./styles";

import {
  CopyStyleColors,
  CopyStyleSizes,
  ThemeColors,
  ThemeSizes,
} from "./data";

export default function ThemePage() {
  return (
    <S.Container>
      <section className="boxAll">
        <h1>Usando theme</h1>
        <section>
          <S.Content>
            <pre>
              <p>
                <span />
                primaryOrange
                <span />
                primaryGreen
                <span />
                segundaryGreen
                <span />
                background
                <span />
                dark
              </p>
              <ThemeColors />
            </pre>
            <pre>
              <p>style.jsx</p>
              <CopyStyleColors />
            </pre>
          </S.Content>

          <S.ContentSize>
            <pre>
              <p>
                <span />
                xs
                <span />s
                <span />m
                <span />l
                <span />
                xl
                <span />
                xxl
              </p>
              <ThemeSizes />
            </pre>
            <pre>
              <p>style.jsx</p>
              <CopyStyleSizes />
            </pre>
          </S.ContentSize>
        </section>
      </section>
    </S.Container>
  );
}
