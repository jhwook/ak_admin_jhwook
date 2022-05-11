import React from "react";
import styled from "styled-components";
import ChartExample from "../../Components/AK Friends";
import Demo from "../../Components/AK Friends";
import DenseTable from "../../Components/AKG";

export const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Cards>
          <p>회원수</p>
          <h1>3,000</h1>
          <p>현재: 1,000</p>
          <span>탈퇴: 124</span>
        </Cards>
        <Cards>
          <p>금일 방문자수</p>
          <h1>3,000</h1>
          <p>전주대비 10.26%</p>
        </Cards>
        <Cards>
          <p>누적 AKD 누적 총금액</p>
          <h1>3,000 AKD</h1>
          <p>전일대비 200 AKD</p>
        </Cards>
        <Cards>4</Cards>
      </Wrapper>
      <Wrapper>
        <Card>
          <Wrapp>
            <h1>AKG 지급현황</h1>

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">지급타입</th>
                  <th scope="col">지갑주소</th>
                  <th scope="col">지급수량</th>
                  <th scope="col">지급금액</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Stake</th>
                  <td>0x8C4077dfEb3621Ed2DDD07F36...</td>
                  <td>100</td>
                  <td>$6.00</td>
                </tr>
              </tbody>
            </table>
          </Wrapp>
        </Card>
        <Card>
          {" "}
          <ChartExample />{" "}
        </Card>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 44px 0px 44px 44px;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 359px;
  height: 190px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin-right: 30px;
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-top: 15px;
  }
  span {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    margin-top: 10px;
    color: #000000;
  }
`;
const Card = styled.div`
  width: 748px;
  height: 454px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 44px 30px 0px 0px;
`;
const Wrapp = styled.div`
  padding: 34px 50px 50px 50px;

  h1 {
    margin-bottom: 24px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
  }
`;
export default Home;
