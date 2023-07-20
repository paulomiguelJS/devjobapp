import logo from "../../assets/images/desktop/logo.svg";
import iconSun from "../../assets/images/desktop/icon-sun.svg";
import iconMoon from "../../assets/images/desktop/icon-moon.svg";

import { HeaderContainer, Switch, Container } from "./styles";
import { useState } from "react";

import MainSearch from "../MainSearch";

export default function Header() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);

  return (
    <HeaderContainer>
      <Container>
        <a href="/">
          <img src={logo} alt="Devjobs Logo" />
        </a>

        <div>
          <img src={iconSun} alt="Sun Light Theme" />

          <Switch onToggle={handleToggle}>
            <input
              type="checkbox"
              checked={isToggled}
              onChange={handleToggle}
            />
            <span className="slider round"></span>
          </Switch>

          <img src={iconMoon} alt="Moon Dark Theme" />
        </div>
      </Container>
    </HeaderContainer>
  );
}
