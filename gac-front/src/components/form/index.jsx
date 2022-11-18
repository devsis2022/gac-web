import { Primary } from '../buttons/Primary'
import { FormComponent } from './styled'
import { DFlex } from './styled'
import { FJustify } from './styled'
import { Success } from '../buttons/Success'
import { Delete } from '../buttons/Delete'
import { File } from '../file'

export const Form = () =>{
    return (
        <FormComponent >
            <DFlex>
                <FJustify>
                    <input type='text'></input>            
                    <input type='text'></input>   
                </FJustify>         
                <input type='text'></input>            
                <Primary label={'Enviar'}/>
                <Success label={'Adicionar'}/>
                <Delete label={'Deletar'}/>
                <FJustify>
                <input type="file" name="" id="" />
                <File></File>
                </FJustify>
            </DFlex>
        </FormComponent>
    )
}