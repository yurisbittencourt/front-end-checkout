import styled, { css } from "styled-components";
import { AiTwotoneBank } from "react-icons/ai";

export const breakpoint = {
  sm: `@media only screen and (max-width: 500px)`,
  md: `@media only screen and (max-width: 1000px)`,
  lg: `@media only screen and (max-width: 1200px)`,
};

export const styleProps = (props) => css`
  ${props.width && `width: ${props.width}`};
  ${props.height && `height: ${props.height}`};
  ${props.maxWidth && `max-width: ${props.maxWidth}`};
  ${props.minWidth && `min-width: ${props.minWidth}`};
  ${props.maxHeight && `max-height: ${props.maxHeight}`};
  ${props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${props.alignItems && `align-items: ${props.alignItems}`};
  ${props.margin && `margin: ${props.margin}`};
  ${props.mt && `margin-top: ${props.mt}`};
  ${props.mr && `margin-right: ${props.mr}`};
  ${props.mb && `margin-bottom: ${props.mb}`};
  ${props.ml && `margin-left: ${props.ml}`};
  ${props.padding && `padding: ${props.padding}`};
  ${props.pt && `padding-top: ${props.pt}`};
  ${props.pr && `padding-right: ${props.pr}`};
  ${props.pb && `padding-bottom: ${props.pb}`};
  ${props.pl && `padding-left: ${props.pl}`};
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px 30px;
  ${breakpoint.sm} {
    padding: 10px 10px;
  }
  ${styleProps}
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  ${styleProps}
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  ${styleProps}
`;

export const Gap = styled.div`
  ${styleProps}
`;

export const Text = styled.p`
  font-family: ${(props) => (props.Arial ? "Arial" : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  color: ${(props) => (props.gray ? "#A5A5A5" : "#000")};
  ${styleProps}
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.color.buttonBG};
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.buttonBGHover};
  }
  ${styleProps}
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 15px;
  ${styleProps}
`;

export const RowToCol = styled.div`
  display: flex;
  width: 100%;
  ${breakpoint.lg} {
    flex-direction: column;
  }
  ${styleProps}
`;

export const BankIcon = styled(AiTwotoneBank)`
  color: #004d00;
  width: 47px;
  height: 47px;
`;

export const Hr = styled.hr`
  width: 100%;
  border: solid 1px #d6d6d6;
  ${styleProps}
`;

export const DiscountFlag = styled.div`
  position: absolute;
  margin-top: -35px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 77px;
  height: 18px;
  font-weight: 700;
  border-radius: 2px;
  background-color: #ffcc00;
  font-size: 10px;
  color: #9e7d27;
  ${breakpoint.lg} {
    position: relative;
    margin-top: 0;
    border-radius: 5px;
  }
`;
