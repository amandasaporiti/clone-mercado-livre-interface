import styled from "styled-components";

import { GoLocation } from "react-icons/go";
import { BiMedal } from "react-icons/bi";

export const MainContainer = styled.div`
  padding: 32px 16px;
  margin-right: 16px;
  margin-top: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;

a{
    text-decoration: none;
    color: #3483fa;
    transition: color .2s ease-in-out;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.35;
  }
`

export const Tittle = styled.div`
  h2{
    color: rgba(0,0,0,.9);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.25;
    margin-bottom: 28px;
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

    h3{
    font-weight: 400;
    font-size: 16px;
    color: rgba(0,0,0,.9);
    line-height: 1.35;
  }

  p{
    font-weight: 400;
    color: rgba(0,0,0,.55);
    font-size: 14px;
    line-height: 1.35;
  }
  div{
    padding-left: 15px;
  }
`

export const LocationIcon = styled(GoLocation)``

export const Platinum = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
    h3{
    font-weight: 400;
    font-size: 16px;
    color: #00a650;
    line-height: 1.35;
  }

  p{
    font-weight: 400;
    color: rgba(0,0,0,.55);
    font-size: 14px;
    line-height: 1.35;
  }
  div{
    padding-left: 15px;
  }

`

export const MedalIcon = styled(BiMedal)`
  color: #00a650;
`

