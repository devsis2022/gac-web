import { useState } from "react"
import TextField    from '@mui/material/TextField';
import Button       from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import debounce     from 'lodash.debounce' 

import { CourseEditStyled } from "./styled"

export const CouseEditContent = ({currentCourse, closeModalEditCourse}) => {

    const [name,        setName]         = useState(currentCourse.name);
    const [description, setDescription]  = useState(currentCourse.description);
    const [coordinator, setCoordinator]  = useState(currentCourse.coordinator);

    const [coordinatorList,setCoordinatorList] = useState([])

    const handleChange = (event) => {
        switch (event.target.id){
            case "name":         setName(event.target.value);         break;
            case "description":  setDescription(event.target.value);  break;
        }
    };

    const coordinatorFilter = debounce((event) => {
        searchCoordinator(event.target.value);
    }, 500)

    const searchCoordinator = (char) => {
        alert(`searching coordinator "${char}"`);
        setCoordinatorList([
            {id:1,
            label:"gestor 1"}
        ])
    }

    const selectCoordinator = (event) => {
        setCoordinator(coordinatorList[event.target.value]);
    }

    const updateCourse = async () => {
        alert('saving course')
        closeModalEditCourse();
    }

    return(
        <CourseEditStyled>
            <h4>Edição de curso</h4>
            <div className="form">
                
                <TextField  id="name"   value={currentCourse.name} onChange={handleChange}   label="Nome"   variant="outlined" />

                <Autocomplete  id="coordinator"     value={currentCourse.coordinator}   disablePortal     sx={{ width: 300 }}
                    onInput={coordinatorFilter}     onChange={selectCoordinator}        options={coordinatorList}
                    renderInput={(params) => <TextField {...params} label="Cordenador" />}/>

                <textarea   id="description"   value={currentCourse.description}    onChange={handleChange} placeholder="Descrição"   variant="outlined" />

                <Button onClick={updateCourse} variant="contained">Salvar</Button>
            </div>
        </CourseEditStyled>
    )
}