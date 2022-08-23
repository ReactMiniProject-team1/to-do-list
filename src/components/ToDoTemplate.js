import React from 'react'
import styled from "styled-components"

const Background = styled.div`
  width: 375px;
  height: 667px;
  
  background: white;
  margin: 50px auto;
  border-radius: 14px;
  
  position: relative;
  display: flex;
  flex-direction: column;

  color: #454B55;
`;

function ToDoTemplate({children}) {
  return (
    <Background>{children}</Background>
  )
};

export default ToDoTemplate;