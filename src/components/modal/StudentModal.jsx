import React,{useState} from "react"
import { Primary } from "../buttons/Primary"
import Modal from "react-modal"
import { Select } from "../select/select"
import { publicInstance } from "../../service/axios"
import { Input } from "../input"
import { DFlex } from "../form/styled"
import { Waiting } from "../alerts/waiting"

Modal.setAppElement('#root')
export const StudentModal = ({activity, setActivity,list, options}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    const [modalOpen, setModalOpen] = useState(false)

    const handleChange = (e) =>{
        const {name, value} = e.target
        setActivity({
            ...activity,
            [name]: value
        })
    }
    
    const abrirModal = () => {
        setModalOpen(true)
    }
    const fecharModal = ()=>{
        setModalOpen(false)
    }

    const sendActivity = () =>{
        list.push({
          ...activity,
          status: <Waiting>Em Aguardo</Waiting>
        })
      }
    
    const Click = ()=>{
        sendActivity()
        console.log('lista: '+list)
        console.log(activity)
        fecharModal()
        window.location.reload()
    }

    return(
        <div>
            <Primary onClick={abrirModal} label={'Adicionar Atividade'}/>
            <Modal 
            isOpen={modalOpen}
            onRequestClose={fecharModal}
            style={customStyles}
            contentLabel="Modal de exemplo"
            >
                <div>
                    <DFlex>
                    <Input type='text' name='titulo' placeholder='Titulo' onChange={handleChange}/>
                    <Select name={'tipo'} onChange={handleChange} options={options}/>
                    <Input type='number' name='tempo' placeholder='Duração(em minutos)'/>
                    <Input type='file' name='arquivo' onChange={handleChange}/>
                    <Primary label='Enviar'  onClick={Click}/>
                    </DFlex>
                </div>
            </Modal>
        </div>
    )
}