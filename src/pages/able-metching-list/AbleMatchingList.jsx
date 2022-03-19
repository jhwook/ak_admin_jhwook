import { TabsContext } from '@mui/base'
import { Paper, Tab, TableList } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const tableSet = [
    {filed:'순서'},
    {filed:'몬스터 이름'},
    {filed:'가격'},
    {filed:'신청자 수'},
    {filed:'URL'},
    {filed:'몬스터 생성일'},
    {filed:'입찰 시작일'},
]

const testFilde =[
    {
        field: '1',
      },
      {
        field: 'Moong #11',
      },
      {
        field: '100 USDT',
      },
      {
        field: 'Success',
      },
      {
        field: '100',
      },
      {
        field: 'https://nip1.net',
      },
      {
        field: '2022-02-02',
      },
      {
        field: '2022-02-02',
      },
      {
        field: '2022-02-02',
      },
]

export const AbleMatchingList = () => { 
    
  return (
    <>
    <Paper>
        <Box sx={{width:'100%'}}>
     
            </Box>
    </Paper>
    </>
  )
}
export default AbleMatchingList 