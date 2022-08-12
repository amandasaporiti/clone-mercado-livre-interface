import styled from "styled-components";
export const MainContainer = styled.div``


export const Links = styled.div`
  display: flex;
  justify-content: space-between;
 
  a{
    text-decoration: none;
    color: #3483fa;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    margin-right: 16px;
  }
  .back-list{
    color: black;
  }
`

export const Painel = styled.div`
  background: white;
  box-shadow:  0 1px 3px 0 rgba(0,0,0,.3);
  display: grid;
  grid-template-columns: 65fr 35fr;
  margin-bottom: 50px;
  margin-top: 20px;
`

export const ColumnProduct = styled.div`
`
export const Image = styled.div`
  display:flex;
  justify-content: center;
  height: 530px;
  align-items: center;

  img{
    height: 70%;
  }
`
export const Description = styled.div`
  padding: 32px 48px;
  border-top: 1px solid #ddd;

  h2{
    font-size: 24px;
    font-weight: 400;
    padding-bottom: 24px;
    line-height: 1.25;
  }
  p{
    color: #666;
    font-size: 20px;
    font-weight: 400;
    word-break: break-word;
  }

`
export const Questions = styled.div`
  padding: 20px 48px;

  h2{
    font-size: 24px;
    font-weight: 400;
    padding-bottom: 24px;
    line-height: 1.25;
  }
  p{
    font-weight: 600;
    font-size: 18px;
    color: rgba(0,0,0,.9);
    line-height: 1.25;
    padding-bottom: 8px;
  }
  button{

  font-weight: 600;
  background-color: rgba(65,137,230,.15);
  border-color: transparent;
  color: #3483fa;
  box-shadow: 0 0 0 0 #fff;
  cursor: pointer;
  transition: box-shadow .25s ease-out,background-color .2s ease-out,-webkit-box-shadow .25s ease-out;
  text-align: center; 
  border-radius: 5px;
  font-size: 13px;
  height: 32px;
  margin-right: 12px;
  margin-top: 12px;
  padding: 0 12px 0 12px;
}

`

export const AskSeller = styled.div`
padding: 30px 48px;

  h2{
    font-size: 18px;
    margin-bottom: 18px;
    font-weight: 600;
  }
  input{
    height: 48px;
    border-radius: 6px;
    border: 1px solid #ddd;
    box-shadow: 0 0 0 0 #fff;
    padding: 16px;
    width: 70%;
    line-height: 1;
    font-size: 15px;
    font-weight: 300;
  }
  button{
    background-color: #3483fa;
    border-color: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
    width: 140px;
    box-shadow: 0 0 0 0 #fff;
    border-radius: 6px;
    font-size: 16px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    margin-left: 16px;
  }
`

export const ColumnAbout = styled.div`

`

export const Garanty = styled.div`
padding: 32px 16px;
border: 1px solid #ddd;
margin-right: 16px;
border-top: none;
  h2{
    color: rgba(0,0,0,.9);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.25;
    margin-bottom: 28px;
  }
  h3{
    font-weight: 400;
    font-size: 16px;
    color: rgba(0,0,0,.9);
    line-height: 1.35;
    margin-bottom: 12px;
  }
  h4{
    font-weight: 400;
    font-size: 16px;
    color: rgba(0,0,0,.9);
    line-height: 1.35;
    margin-top: 25px;
    margin-bottom: 12px;
  }
  p{
    font-weight: 400;
    color: rgba(0,0,0,.55);
    font-size: 14px;
    line-height: 1.35;
    margin-bottom:12px;
  }
  a{
    text-decoration: none;
    color: #3483fa;
    transition: color .2s ease-in-out;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.35;
  }
`
export const Devolution = styled.div`
  padding: 32px 16px;
  border: 1px solid #ddd;
  margin-right: 16px;
  margin-top: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  h2{
    color: rgba(0,0,0,.9);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.25;
    margin-bottom: 28px;
  }
  p{
    font-weight: 400;
    color: rgba(0,0,0,.55);
    font-size: 14px;
    line-height: 1.35;
    margin-bottom:12px;
  }
  a{
    text-decoration: none;
    color: #3483fa;
    transition: color .2s ease-in-out;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.35;
  }

`

export const Payments = styled.div`
  padding: 32px 16px;
  border: 1px solid #ddd;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top: none;
  margin-right: 16px;
  margin-bottom: 25px;

  h2{
      color: rgba(0,0,0,.9);
      font-size: 18px;
      font-weight: 400;
      line-height: 1.25;
      margin-bottom: 28px;
    }

  p{
    font-weight: 400;
    color: rgba(0,0,0,.55);
    font-size: 14px;
    line-height: 1.35;
    margin-bottom:12px;
  }

  h3{
    font-weight: 400;
    font-size: 16px;
    color: rgba(0,0,0,.9);
    line-height: 1.35;
    margin-bottom: 12px;
  }

  h4{
    font-weight: 400;
    font-size: 16px;
    color: rgba(0,0,0,.9);
    line-height: 1.35;
    margin-top: 25px;
    margin-bottom: 12px;
  }
  img{
    height: 10%;
    width: 10%;
    margin-right: 12px;
  }
  a{
    text-decoration: none;
    color: #3483fa;
    transition: color .2s ease-in-out;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.35;
  }

`
