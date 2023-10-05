import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #2d67d2;
  display: flex;
  align-items: center;
  justify-content: end;
`;
export const UserContainer = styled.div`
  position: relative;
`;
export const UserButton = styled.button`
  height: fit-content;
  border: none;
  border-radius: 12px;
  aspect-ratio: 1/1;
  margin-right: 20px;
  &: hover {
    background-color: #2cacd3
  }
`;
export const UserDropDownContainer = styled.div`
  display: ${(props) => (props.showMenu ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  position: absolute;
  border: black 1px solid;
  border-radius: 20px;
  right: 20px;
  padding: 15px;
  min-width: 200px;
  width: fit-content;
  height: 200px;
  z-index: 1;
`;
export const UserInformationContainer = styled.div`
  height: 30%;
`
export const UserName = styled.div`

`
export const UserEmail = styled.div`

`
