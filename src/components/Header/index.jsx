import bgHeaderDesktop from "../../assets/images/desktop/bg-pattern-header.svg";
import iconSun from "../../assets/images/desktop/icon-sun.svg";
import iconMoon from "../../assets/images/desktop/icon-moon.svg";



import { HeaderContainer, Container } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Container>
        <a href="/">
          <img src={bgHeaderDesktop} alt="Devjobs Logo" />
        </a>
        
        <div>
          <img src={iconSun} alt="Sun Light Theme" />
          <button>Togle</button>
          <img src={iconMoon} alt="Moon Dark Theme" />
        </div>
      </Container>
    </HeaderContainer>
  );
}
