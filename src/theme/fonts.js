import { createGlobalStyle } from "styled-components"

export const Fonts = createGlobalStyle`
@font-face {
  font-family: "Spartan";
  src: url('/fonts/Spartan-ExtraBold.ttf');
  font-style: normal;
  font-display: block;
  font-weight: 1000;
}
@font-face {
  font-family: "Spartan";
  src: url('/fonts/Spartan-Bold.ttf');
  font-style: normal;
  font-display: fallback;
  font-weight: 700;
}
@font-face {
  font-family: "Spartan";
  src: url('/fonts/Spartan-SemiBold.ttf');
  font-style: normal;
  font-display: fallback;
  font-weight: 600;
}
@font-face {
  font-family: "Spartan";
  src: url('/fonts/Spartan-Regular.ttf');
  font-style: normal;
  font-display: fallback;
  font-weight: 400;
}
@font-face {
  font-family: "Spartan Medium";
  src: url('/fonts/Spartan-Medium.ttf');
  font-style: normal;
  font-display: fallback;
  font-weight: 500;
}
@font-face {
  font-family: "Spartan Black";
  src: url('/fonts/Spartan-Black.ttf');
  font-style: normal;
  font-display: fallback;
  font-weight: 900;
}
`
