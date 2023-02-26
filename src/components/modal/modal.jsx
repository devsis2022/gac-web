import React,{useState} from "react"
import { Primary } from "../buttons/Primary"
import Modal from "react-modal"
import { publicInstance } from "../../service/axios"
import { FormLogin } from "../form/styled"
import { Input } from "../input"

Modal.setAppElement('#root')
export const GacModal = () => {
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
    
    const abrirModal = () => {
        setModalOpen(true)
    }
    const fecharModal = ()=>{
        setModalOpen(false)
    }

    return(
        <div>
            <Primary onClick={abrirModal} label={'Adiionar Atividade'}/>
            <Modal 
            isOpen={modalOpen}
            onRequestClose={fecharModal}
            style={customStyles}
            contentLabel="Modal de exemplo"
            >
                <div>
                    <Input type={'text'} name={'name'} placeholder={'alguma Coisa'} onChange={''}/>
                    <Primary label={'Alou'} onClick={fecharModal}></Primary>
                </div>
            </Modal>
        </div>
    )
}