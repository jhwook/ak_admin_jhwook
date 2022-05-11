import React from "react";
import styled from "styled-components";
export const Musr = () => {
  return (
    <div>
      <ModalRegister>
        <h1>토큰 등록</h1>
        <div className="registerCont">
          <div className="regText">컨트랙트</div>
          <div>
            <input className="ModalInput" type="text" />{" "}
          </div>
        </div>
        <Border />
        {/* 2 */}
        <div className="registerCont">
          <div className="regText">토큰명 (한글)</div>
          <div>
            <input className="ModalInput" type="text" />{" "}
          </div>
        </div>
        <Border />
        {/* 3 */}
        <div className="registerCont">
          <div className="regText">토큰명 (영문)</div>
          <div>
            <input className="ModalInput" type="text" />{" "}
          </div>
        </div>
        <Border />
        {/* 4 */}
        <div className="registerCont">
          <div className="regText">소수 자릿수</div>
          <div>
            <input className="ModalInput" type="text" />{" "}
          </div>
        </div>
        <Border />
        {/* 5 */}
        <div className="registerCont">
          <div className="regText">심볼</div>
          <div>
            <input
              className="ModalInput"
              placeholder="이미지를 추가해주세요."
              type="text"
            />
            <button className="regSelect">선택</button>
          </div>
        </div>
        <Border />
        <div className="regButton">
          <button className="regCencel">취소</button>
          <button className="regOk">확인</button>
        </div>
      </ModalRegister>
    </div>
  );
};

const Border = styled.div`
  border: 1px solid #e6e6e6;
`;
const ModalRegister = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 620px;
  height: 556px;
  left: 1096px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 34px 50px 34px 50px;
  .regButton {
    display: flex;
    justify-content: center;
    margin-top: 24px;
    width: 100%;
    gap: 20px;
  }
  .regCencel {
    width: 230px;
    height: 54px;
    background: #f1f2f4;
    border-radius: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #7a7a7a;
  }
  .regOk {
    width: 230px;
    height: 54px;
    background: #4876ef;
    border-radius: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
  }
  .regSelect {
    width: 60px;
    height: 38px;
    background: #ffffff;
    border: 1px solid #4876ef;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #4876ef;
    margin-left: 13px;
  }
  .regText {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    margin-right: auto;
  }
  .ModalInput {
    width: 321px;
    height: 38px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
    /* gap: 10px; */
  }
  .registerCont {
    display: flex;
    margin-bottom: 9px;
    margin-top: 8px;
  }
`;

export default Musr;
