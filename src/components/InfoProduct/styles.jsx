import styled from "styled-components";
import { BsTruck, BsHeart, BsShopWindow } from "react-icons/bs";


export const MainContainer = styled.div`
  padding: 24px 16px;
  margin-right: 16px;
  margin-top: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
`

export const Info = styled.div`
  div{
    display: flex;
    align-items: center;
    gap: 20px;

    p{
      color: rgba(0,0,0,.55);
      font-size: 14px;
      font-weight: 400;
      white-space: pre-wrap;
    }
  }

`
export const Row = styled.div`

div{
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 18px;
}

  h1{
    font-size: 22px;
    color: rgba(0,0,0,.9);
    font-weight: 600;
    line-height: 1.18;
    word-break: break-word;
  }
`

export const HeartIcon = styled(BsHeart)`
  height: 28px;
  width: 28px;
  color: #3483fa;
  cursor: pointer;
  margin-left: 16px;
  flex-shrink: 0;

`

export const MoreSelled = styled.div`
    a{
    text-decoration: none;
    border-radius: 3px;
    line-height: 1;
    padding: 3px 4px;
    word-break: break-all;
    font-weight: 600;
    font-size: 12px;
    background-color: #f73;
    color: #fff;
    text-transform: uppercase;
  }
`

export const Price = styled.div`

  #total-price{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 15px;

  }
  .total-price{
    font-size: 36px;
    line-height: 1;
    color: rgba(0,0,0,.9);
    font-weight: 300;
    letter-spacing: normal;
  }
  .money{
    padding-right: .2em;
  }
  .parcel{
    display: flex;
    font-size: 16px;
    line-height: 1;
    font-weight: 400;
    color: rgba(0,0,0,.9);
    letter-spacing: normal;
    margin-top: 4px;
    margin-bottom: 7px;

    span:nth-child( -n + 3 ) {
	    padding-right: .2em;
    }

  }
  .cents{
    font-size: 10px;
    font-weight: 400;
    line-height: 1;
    color: rgba(0,0,0,.9);
    letter-spacing: normal;
    align-self: flex-start;
    margin-left: 1px;
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

export const Delivery = styled.div`
  margin-top: 30px;

  div{
    display: flex;
    gap: 10px;
  }
  .link{
    padding-left: 30px;
  }

    a{
    text-decoration: none;
    color: #3483fa;
    transition: color .2s ease-in-out;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.35;
  }

  h2{
    font-size: 16px;
    line-height: 1.3;
    margin-bottom: 5px;
    color: #00a650;
    font-weight: 400;
  }

`
export const DeliveryIcon = styled(BsTruck)`
  height: 20px;
  width: 20px;
  color: #00a650;
  flex-shrink: 0;
`

export const WithdrawalIcon = styled(BsShopWindow)`
  height: 20px;
  width: 20px;
  color: #00a650;
  flex-shrink: 0;

`

export const Withdrawal = styled.div`
  margin-top: 30px;
  div{
    display: flex;
    gap: 10px;
  }
  .link{
    padding-left: 30px;
  }

a{
    text-decoration: none;
    color: #3483fa;
    transition: color .2s ease-in-out;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.35;
  }

  h2{
    font-size: 16px;
    line-height: 1.3;
    margin-bottom: 5px;
    color: #00a650;
    font-weight: 400;
  }
`

export const BuyNow = styled.div`
  h2{
    font-size: 16px;
    font-weight: 600;
    color: rgba(0,0,0,.9);
    margin-top: 40px;
  }

  h3{
    color: rgba(0,0,0,.9);
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    cursor: pointer;
    margin-top: 30px;
    margin-bottom: 30px;

    span{
      color: rgba(0,0,0,.9);
      font-size: 16px;
      font-weight: 600;
      margin-left: 4px;
      white-space: nowrap;
      line-height: 1;
      cursor: pointer;
    }
  }
`

export const ButtonBuyNow = styled.div`
  cursor: pointer;
  background-color: #3483fa;
  border-color: transparent;
  color: #fff;
  box-shadow: 0 0 0 0 #fff;
  transition: box-shadow .25s ease-out,background-color .2s ease-out,-webkit-box-shadow .25s ease-out;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  line-height: 48px;
  padding: 0 24px;
  text-align: center;
  margin-bottom: 10px;
`

export const ButtonAddToCar = styled.div`
  cursor: pointer;
  background-color: rgba(65,137,230,.15);
  border-color: transparent;
  color: #3483fa;
  box-shadow: 0 0 0 0 #fff;
  transition: box-shadow .25s ease-out,background-color .2s ease-out,-webkit-box-shadow .25s ease-out;
  border-radius: 6px;
  font-weight: 600;
  height: 48px;
  line-height: 48px;
  padding: 0 24px;
  text-align: center;
`

