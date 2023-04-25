import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
 max-width:1300px;
  margin: 0 auto;
  padding: 0 16px;`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 5px solid #EBD8FF;
  > nav {
    display: flex;
  }`
export const Main = styled.main`
margin-left: auto;
margin-right: auto;`
export const Link = styled(NavLink)`
padding: 14px 16px;
  font-weight: 600;
  font-size: 18px;
      margin-right: 20px;
  text-transform: uppercase;
  text-align: center;
  border-radius:10px;
  text-decoration: none;
  color: #373737;
  background-color: #EBD8FF;
  width: 196px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);
   &.active {
    background-color: #5CD3A8;
  }`

export const SpinnerWrapper = styled.div`
display: flex;
justify-content: center;`

