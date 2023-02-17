import React,{useState} from "react"
import { Primary } from "../buttons/Primary"
import Modal from "react-modal"
import { publicInstance } from "../../service/axios"
import { Input } from "../input"
import { DFlex } from "../form/styled"

Modal.setAppElement('#root')
export const StudentModal = () => {
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
    const [activity, setActivity] = useState({})
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
    const Click = ()=>{
        console.log(activity)
        fecharModal()
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
                    <Input type='text' name='titulo' placeholder='titulo' onChange={handleChange}/>
                    <select>
                        <option name='teste1' value='valor1'>valor1</option>
                        <option name='teste1' value='valor2'>valor2</option>
                        <option name='teste1' value='valor3'>valor3</option>
                    </select>
                    <Input type='file' name='arquivo' onChange={handleChange}/>
                    <Primary label='Enviar'  onClick={Click}/>
                    </DFlex>
                </div>
            </Modal>
        </div>
    )
}