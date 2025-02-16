import styled from "styled-components";


export const Button= styled.button`
border: none;
background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100% );
font-size: 16px;
color: #fff;
padding: 16px 32px;
width: fit-content;
border-radius: 15px;
cursor: pointer;

&:hover{
  opacity: 0.8;
}
&:active{
  opacity: 0.5;
}

`