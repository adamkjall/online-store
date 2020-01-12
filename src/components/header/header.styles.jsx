import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 4.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
`;

export const LogoContainer = styled(Link)``;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionLink = styled(Link)`
  margin-left: 1rem;
  cursor: pointer;
`;
