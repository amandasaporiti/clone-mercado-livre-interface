import styled from "styled-components";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { BsCart2, BsPersonCircle } from "react-icons/bs";


export const ContainerHeader = styled.div``

export const Painel = styled.div`
  display: grid;
  grid-template-rows: 20fr 20fr;
  border: 1px solid yellow;
  height: 50px;
  margin-bottom: 100px;

  .column-menu{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
`

export const Column = styled.div`
  background: #fff159;
  padding: 0 100px 0 100px;
  padding-bottom: 10px;
`

export const Input = styled.div`
  input{
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    border: none;
    font-size: 15px;
    border-radius: 2px;
    height: 40px;
    width: 100%;
    padding: 20px;
    color: #686868;
    font-weight: 300;
    margin-top: 20px;
  }
`

export const SendTo = styled.div`
  display: flex;

  div{
    display: flex;
    flex-direction: column;
  }

  .send-to{
    font-size: 12px;
    color: rgba(0,0,0,.5);
    line-height: 10px;
  }

  p{
    line-height: 13px;
    color: #333;
    font-size: 14px;
    font-weight: inherit;
    margin-top: 8px;
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;

  a{
    color: #000;
    line-height: 22px;
    text-decoration: none;
    cursor: pointer;
    font-weight: 400;
    cursor: pointer;
    font-size: 14px;
    margin-left: 40px;
  }
  p{
    color: #000;
    line-height: 22px;
    text-decoration: none;
    cursor: pointer;
    font-weight: 400;
    cursor: pointer;
    font-size: 14px;

  }
    
  .link-fav{
    margin-left: 15px;
  }
`

export const ListItensMenu = styled.div`
  div{
    display: flex;
    align-items: flex-end;

    ul{
    display: flex;
    gap: 20px;
    list-style: none; 
    cursor: pointer;
    color: rgba(0,0,0,.5);
    text-decoration: none;
    line-height: 22px;
    font-size: 14px;
    list-style: none;
    font-weight: 400;
  }
}
`
export const LocationIcon = styled(IoLocationOutline)`
  height: 25px;
  width: 25px;
  flex-shrink: 0;
`

export const PerfilIcon = styled(BsPersonCircle)`
  height: 20px;
  width: 20px;
  flex-shrink: 0;
  color: #000;
  margin-right: 5px;
  cursor: pointer;
`

export const NotifcationIcon = styled(FaRegBell)`
  height: 20px;
  width: 20px;
  flex-shrink: 0;
  color: #000;
  margin-left: 20px;
  cursor: pointer;
`

export const ShoppingCardIcon = styled(BsCart2)`
  height: 20px;
  width: 20px;
  flex-shrink: 0;
  color: #000;
  margin-left: 20px;
  cursor: pointer;
`

