import React from "react";
import styled from "styled-components";

export const AkgApprove = () => {
  return (
    <Container>
      <h1>AKG Employer Approve</h1>
      <Cards>
        {/* 1 */}
        <AkfCard>
          <ItemWrapper>Akf Employer</ItemWrapper>
          <div className="akgWrap">
            <h5>AKG balance</h5>
            <input disabled type="text" placeholder="10,000" />
          </div>
        </AkfCard>
        {/* 2 */}
        <ItemCard>
          <ItemWrapper>Special Employer</ItemWrapper>
          <div className="balance">
            <h5>AKG balance</h5>
            <input type="text" placeholder="10,000" />
          </div>
          <div className="allowance">
            <h5>AKG allowance</h5>
            <input type="text" placeholder="10,000,000" />
          </div>
          <ButtonItem>
            <button className="ok">Approve</button>
          </ButtonItem>
        </ItemCard>
        {/* 3 */}
        <ItemCard>
          <ItemWrapper>Observer Employer</ItemWrapper>
          <div className="balance">
            <h5>AKG balance</h5>
            <input type="text" placeholder="10,000" />
          </div>
          <div className="allowance">
            <h5>AKG allowance</h5>
            <input type="text" placeholder="10,000,000" />
          </div>
          <ButtonItem>
            <button className="ok">Approve</button>
          </ButtonItem>
        </ItemCard>
      </Cards>
    </Container>
  );
};

const ButtonItem = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  .ok {
    color: #ffffff;
    width: 100%;
    height: 44px;
    background: #4876ef;
    border-radius: 8px;
  }
`;

const ItemWrapper = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;
const AkfCard = styled.div`
  margin-left: ${({ left }) => (left ? "auto" : "44px")};
  padding: 50px;
  width: 540px;
  height: 250px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  margin-top: 37px;
  input {
    width: 240px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    height: 44px;
    padding: 10px;
    border-radius: 8px;
  }
  .balance {
    display: flex;
    justify-content: center;
    gap: 80px;
    align-items: center;
    margin-top: 34px;
    h5 {
      margin: 0;
      padding: 0;
    }
  }
  .allowance {
    display: flex;
    justify-content: center;
    gap: 65px;
    align-items: center;
    margin-top: 34px;
    h5 {
      margin: 0;
      padding: 0;
    }
  }
`;

const ItemCard = styled.div`
  margin-left: ${({ left }) => (left ? "auto" : "44px")};
  padding: 50px;
  width: 540px;
  height: 350px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  margin-top: 37px;
  input {
    width: 240px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    height: 44px;
    padding: 10px;
    border-radius: 8px;
  }
  .balance {
    display: flex;
    justify-content: center;
    gap: 80px;
    align-items: center;
    margin-top: 34px;
    h5 {
      margin: 0;
      padding: 0;
    }
  }
  .allowance {
    display: flex;
    justify-content: center;
    gap: 65px;
    align-items: center;
    margin-top: 34px;
    h5 {
      margin: 0;
      padding: 0;
    }
  }
`;
const Cards = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const TableBar = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 34px 50px;
  width: 1526px;
  height: 257px;
  left: 274px;
  top: 108px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  thead {
    background: #f1f2f4;
  }
  input {
    padding-left: 20px;
    width: 210px;
    height: 38px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
  }
`;
const Border = styled.div`
  border: 1px solid #d9d9d9;
`;

const Bordertop = styled.div`
  border: 1px solid #d9d9d9;
  margin-top: 22px;
`;
export default AkgApprove;
