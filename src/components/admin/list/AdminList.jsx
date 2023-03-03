import * as React from 'react';
import { Accepted, Denied, Waiting } from '../../alerts/alerts';
import { StyledI } from '../../i/styled';
import { I } from '../../i/index'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DFlexRowTable } from '../../form/styled';
import { publicInstance } from '../../../service/axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#5ca3e6',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({theme})=>({
  '&:nth-of-type(odd)': {
    backgroundColor: '#f1f1f1',
  },
  '&:nth-of-type(even)':{
    backgroundColor: '#f1f1f1'
  }
}))



export default function AdminList() {
  
  const [institutions,setInstitutions] = React.useState([])
  
  React.useEffect(()=>{
    publicInstance
    .get('/institution',{headers:{'authorization': 'Bearer ' + sessionStorage.getItem('token')}})
    .then((response) => {
      response.data.data.map((data)=>{
        const auxData = Date(new Date(data.createdAt)).split(' ')
        data.createdAt = `${auxData[2]} ${auxData[1]} ${auxData[3]}`
      })
      console.log(response.data.data)
      setInstitutions(response.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  
  const aprovados = []
  const aguardo = []
  institutions.map((instuition) => {
    if(instuition.status !== 'pending'){
      aprovados.push(instuition)
    }else{
      if(instuition.status === 'pending'){
        instuition.status = <Waiting content='Em aguardo'/>
      }else{
        instuition.status = <Denied content='Reprovado'/>
      }
      aguardo.push(instuition)
    }
    return(
      instuition
    )
  })

  return (
    <div>
      <h3>Instituições aprovadas</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Instituição</StyledTableCell>
              <StyledTableCell align='center'>Data de Criação</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {aprovados.map((row) => (
              <StyledTableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.createdAt}</TableCell>
                <TableCell align="center">{<Accepted content='Aprovado'/>}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br/>
      <h3>Instituições em aguardo</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Instituição</StyledTableCell>
              <StyledTableCell align='center'>Data de Criação</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align='center'>Ação</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {aguardo.map((row) => (              
              <StyledTableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.createdAt}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align='center'>
                  <DFlexRowTable>
                    <I faLabel="fa fa-check" method={'put'} url={`/institution/${row.id}/activate`} header={{headers:{'authorization': 'Bearer ' + sessionStorage.getItem('token')}}}/>
                    <I faLabel="fa fa-close" method={'put'} url={`/institution/${row.id}/repprove`} header={{headers:{'authorization': 'Bearer ' + sessionStorage.getItem('token')}}}/>
                  </DFlexRowTable>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}