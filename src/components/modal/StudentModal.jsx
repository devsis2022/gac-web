import * as React from 'react'
import { Primary } from '../buttons/Primary'
import { Waiting } from '../alerts/alerts'
import Box from '@mui/material/Box'
import { TextField } from '@mui/material'
import { Select } from '@mui/material'
import { MenuItem } from '@mui/material'
import { InputLabel } from '@mui/material'
import { FColumnGap } from '../form/styles'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function StudentModal({activity, setActivity, list, label}) {
  const [open, setOpen] = React.useState(false);
  const [newActivity,setNewActivity] = React.useState({})
  const formActivity = new FormData()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) =>{
    setNewActivity({
        ...newActivity,
        [event.target.name]: event.target.value
    })
  }
  const handleNumber=(event)=>{
    const regex = /^[0-9\b]+$/;
    if (event.target.value === "" || regex.test(event.target.value)) {
      setNewActivity({
        ...newActivity,
        [event.target.name]: event.target.value
      })
    }else{
        alert('Apenas números')
    }
  }
  const click = () =>{
    console.log(newActivity)
    console.log(formActivity)
    setNewActivity({
      ...newActivity,
      status: <Waiting>Em Aguardo</Waiting>
    })
    list.push(newActivity)
    console.log(list)
  }

  return (
    <div>
      <Primary onClick={handleOpen} label={label}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FColumnGap>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Atividade
          </Typography>
          <hr/>
          <TextField name='tittle' label='Titulo'onChange={handleChange}/>
          <TextField name='description' label='Descrição' onChange={handleChange}/>
          <TextField name='minutes' label='Tempo(Em minutos)' onChange={handleNumber}/>
          <InputLabel id='demo-simple-select-label'>Tipo de atividade</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            label='Tipo de Atividade'
            value= ''
            name='type'
            onChange={handleChange}
          >
            <MenuItem id='type' value={'Tipo 1'}>Tipo 1</MenuItem>
            <MenuItem id='type' value={'Tipo 2'}>Tipo 2</MenuItem>
            <MenuItem id='type' value={'Tipo 3'}>Tipo 3</MenuItem>
          </Select>
          <TextField name='receipt' type={'file'}onChange={handleChange}/>
          <Primary onClick={click} label={'Enviar Atividade'}/>

          </FColumnGap>
        </Box>
      </Modal>
    </div>
  );
}