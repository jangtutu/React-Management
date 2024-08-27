import React, { Component } from 'react';
import './App.css';
import Customer from './component/Costomer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
  overflowX: 'auto'
}));

const StyledTable = styled(Table)({
  minWidth: 1080
});

const customers = [
  {
  'id' : '1',
  'name' : '장원',
  'birthday' : '971008',
  'gender' : '남자',
  'job' : '대학생'
},  
{
  'id' : '2',
  'name' : '장종대',
  'birthday' : '570402',
  'gender' : '남자',
  'job' : '백수'
},  
{
  'id' : '3',
  'name' : '최미경',
  'birthday' : '640103',
  'gender' : '여자',
  'job' : '주부'
}
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <StyledPaper>
        <StyledTable>
          <TableHead>
            <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
        {
          customers.map(c => {
            return <Customer
              key = {c.id}
              id = {c.id}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
            />
          })
        }
          </TableBody>
        </StyledTable>
      </StyledPaper>
    );
  }
}

export default App;
