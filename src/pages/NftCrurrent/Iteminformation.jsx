import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Pagination, Stack, Switch } from '@mui/material';
import React from 'react'
import { Table } from 'react-bootstrap';
import styled from 'styled-components'
export const Iteminformation = () => {
    return (
        <Container>
            <Wrapper>
                <Title><h1>Item 정보 <ArrowForwardIosIcon />  </h1><p>i0x564DaF7EBD1742Cedc3ECeE1B2b949eCBE35Dbe0 </p></Title>

                <Card>
                    <CardCont>
                        <TableCont>
                            <TabdleCad>
                                <TableLeft>등록일</TableLeft>
                                <TableRight>0x564DaF7EBD1742Cedc3ECeE1B2b949eCBE35Dbe0</TableRight>
                            </TabdleCad>
                            <TabdleCad>
                                <TableLeft>item name</TableLeft>
                                <TableRight>2022-01-22 14:22:22</TableRight>
                            </TabdleCad>
                            <TabdleCad>
                                <TableLeft>item ID</TableLeft>
                                <TableRight>@ioimmoj</TableRight>
                            </TabdleCad>
                            <TabdleCad>
                                <TableLeft>item file </TableLeft>
                                <TableRight>Friends #002</TableRight>
                            </TabdleCad>
                            <TabdleCad>
                                <TableLeft>item detail</TableLeft>
                                <TableRight>Rosy cheeks, Bloodshot eyes, Milk bottle, Crazy hair, Earring</TableRight>
                            </TabdleCad>
                            <TabdleCad>
                                <TableLeft>Level</TableLeft>
                                <TableRight>2 lv</TableRight>
                            </TabdleCad>
                            <TabdleCad>
                                <TableLeft>item token</TableLeft>
                                <TableRight>AKD</TableRight>
                            </TabdleCad>
                            <TabdleCad>
                                <TableLeft>Chain</TableLeft>
                                <TableRight>BSC</TableRight>
                            </TabdleCad>

                        </TableCont>
                        <TableCont>
                            <TabdleCad>
                                <TableLeft>컨트랙트</TableLeft>
                                <TableRight>x6452131b5aba502c76c4ec2e603874b8364984863ecb...</TableRight>
                            </TabdleCad>
                            <TabdleCad>
                                <TableLeft>Owner</TableLeft>
                                <TableRight>@ioimmoj</TableRight>
                            </TabdleCad>
                            <TabdleCad>
                                <TableLeft>레퍼럴</TableLeft>
                                <TableRight>1</TableRight>
                            </TabdleCad>
                            <TabdleCad>
                                <TableLeft>?</TableLeft>
                                <TableRight>11,058</TableRight>
                            </TabdleCad>
                            <TabdleCad>
                                <TableLeft>?</TableLeft>
                                <TableRight>11.058</TableRight>
                            </TabdleCad>
                            <TabdleCad>
                                <TableLeft>View</TableLeft>
                                <TableRight>11.058</TableRight>
                            </TabdleCad>
                            <TabdleCad>
                                <TableLeft>상태</TableLeft>
                                <TableRight>정상</TableRight>
                            </TabdleCad>
                            <TabdleCad>
                                <TableLeft>숨김</TableLeft>
                                <TableRight><Switch /> </TableRight>
                            </TabdleCad>
                        </TableCont>
                    </CardCont>

                </Card>
                <button className='memInfo' >저장</button>
            </Wrapper>



            <ItemActive>
                <ItemWrape>


                    <h1>Item Activity</h1>
                    <CardHead>
                        <select aria-label="Default select example">
                            <option selected>10개씩 보기</option>
                            <option selected>20개씩 보기</option>
                        </select>

                        <input className='data' placeholder='2022-01-18 ~ 2202-01-28'></input>
                        <input className='search' placeholder='검석'></input>
                        <button className='excel'>EXCEL</button>
                    </CardHead>
                    <WrapperTable>

                        <Table responsive="sm">
                            <thead>
                                <tr  >
                                    <th>순서</th>
                                    <th>거래일시</th>
                                    <th>판매방식</th>
                                    <th>가격</th>
                                    <th>판매자</th>
                                    <th>판매자</th>
                                    <th>Transaction</th>
                                </tr>

                            </thead>
                            <tbody>


                                <tr>
                                    <td>1</td>
                                    <td>2022-01-12 09:50:11</td>
                                    <td>고정가</td>
                                    <td>AKD</td>
                                    <td>120</td>
                                    <td>@ioisdfsfsdgsg</td>
                                    <td>@ioimmoj</td>
                                    <td>0x6452131b5aba502c76c4ec2e603874b8364984863ecb9b1d70c...</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>2022-01-12 09:50:11</td>
                                    <td>고정가</td>
                                    <td>AKD</td>
                                    <td>120</td>
                                    <td>@ioisdfsfsdgsg</td>
                                    <td>@ioimmoj</td>
                                    <td>0x6452131b5aba502c76c4ec2e603874b8364984863ecb9b1d70c...</td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>2022-01-12 09:50:11</td>
                                    <td>고정가</td>
                                    <td>AKD</td>
                                    <td>120</td>
                                    <td>@ioisdfsfsdgsg</td>
                                    <td>@ioimmoj</td>
                                    <td>0x6452131b5aba502c76c4ec2e603874b8364984863ecb9b1d70c...</td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>2022-01-12 09:50:11</td>
                                    <td>고정가</td>
                                    <td>AKD</td>
                                    <td>120</td>
                                    <td>@ioisdfsfsdgsg</td>
                                    <td>@ioimmoj</td>
                                    <td>0x6452131b5aba502c76c4ec2e603874b8364984863ecb9b1d70c...</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>2022-01-12 09:50:11</td>
                                    <td>고정가</td>
                                    <td>AKD</td>
                                    <td>120</td>
                                    <td>@ioisdfsfsdgsg</td>
                                    <td>@ioimmoj</td>
                                    <td>0x6452131b5aba502c76c4ec2e603874b8364984863ecb9b1d70c...</td>
                                </tr>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tbody>
                        </Table>
                    </WrapperTable>
                    <Paginotion>
                        <Stack>
                            <Pagination count={2} shape="rounded" />
                        </Stack>
                    </Paginotion>

                </ItemWrape>
            </ItemActive>

        </Container>
    )
}





const Paginotion = styled.div`
  display: flex ;
  justify-content: center;
  align-items: center;
  width: 100%;
  `

const ItemWrape = styled.div`
padding: 34px 50px 0 50px;
h1{
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;
color: #000000;
}
`
const CardHead = styled.div`
width: 100%;
height: 44px;
select{
margin-right: 526px;
width: 160px;
height: 44px;

background: #FFFFFF;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;

}

.data{
  background: #FFFFFF;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;
width: 298px;
height: 44px;
margin-right: 14px;
padding: 20px;

}
.search{
  width: 240px;
height: 44px;
  background: #FFFFFF;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;
margin-right: 24px;
padding: 20px;

}
.excel{
  border: none;
width: 162px;
height: 44px;
background: #4876EF;
border-radius: 8px;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #FFFFFF;

}
`
const ItemActive = styled.div`
width: 1526px;
height: 600px;
margin-top: 44px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 12px;
`


const WrapperTable = styled.div`
margin-top: 24px;
tbody{
tr:hover{
background-color: #D9D9D9;
}
}

`

// item active style

const TableCont = styled.div`
display: flex;
flex-direction: column;

`
const CardCont = styled.div`
display: flex;
`
const Card = styled.div`
display: flex;
`
const TabdleCad = styled.div`
display: flex;
`

const TableLeft = styled.div`
padding-left:20px ;
width: 190px;
height: 55px;
background: #F6F6F6;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: #000000;
border-top: 1px solid #EEEEEE;
border-bottom: 1px solid #EEEEEE;
`
const TableRight = styled.div`
padding-left:60px ;
height: 55px;
width: 523px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: #000000;
border-top: 1px solid #EEEEEE;
border-bottom: 1px solid #EEEEEE;


`


const Title = styled.div`
display: flex;
margin-bottom: 20px;
`
const Container = styled.div`
display: flex;
flex-direction: column;
padding: 44px;


`

const Wrapper = styled.div`
.memInfo{
  margin-top: 24px;
  margin-left: 1264px;
width: 162px;
height: 44px;
background: #4876EF;
border-radius: 8px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #FFFFFF;
}
width: 1526px;
height: 654px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 12px;
padding: 34px 50px;
h1{

font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;
color: #000000;

}
p{
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
text-decoration-line: underline;
color: #4876EF;
}
`


export default Iteminformation