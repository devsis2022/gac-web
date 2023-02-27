import {DropDownRoleStyled} from "./styled"; 
import {publicInstance}     from "../../service/authService"
import { useState }         from 'react';

import Box          from '@mui/material/Box';
import FormControl  from '@mui/material/FormControl';
import InputLabel   from '@mui/material/InputLabel';
import MenuItem     from '@mui/material/MenuItem';
import Select       from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';

export const DropDownRoleComponent = () => {

    //TODO
    const handleChange = (event) => {
        alert(event)
    };

    const [userRoles, setUserRoles] = useState([{
        institution: "Escola Federal Sul-rio-grandense - Campus Gravataí",
        role:"aluno"
    },
    {
        institution: "instituto",
        // institution: "instituto Federal Sul-rio-grandense - Campus Gravataí",
        role:"aluno"
    }])

    const elipsis = (word) => {
        return (word.length > 13) ? word.substring(0, 13).trim() + '...' : word;
    }

    return(
        <DropDownRoleStyled>
            <Box sx={{ minWidth: 180 }} >
            <FormControl sx={{ minWidth: 180 }} size="small">
                <InputLabel>Perfil</InputLabel>
                <Select label="Role">
                    {userRoles.map((role)=>{
                        return(
                            // <Tooltip title={role.institution} placement="right">
                            //     <MenuItem value={10} style={{ display:"flex", "flexDirection":"row","justifyContent":"space-between" }} onClick={() => {    handleChange(role)    }}>
                            //         <p style={{"font-size":"13px"}}><b>{elipsis(role.institution)}</b></p>
                            //         <p style={{"font-size":"12px"}}>{role.role}</p>
                            //     </MenuItem>
                            // </Tooltip> 
                            <MenuItem value={10} style={{ display:"flex", "flexDirection":"row","justifyContent":"space-between" }} onClick={() => {    handleChange(role)    }}>
                                <p style={{"font-size":"13px"}}><b>{elipsis(role.institution)}</b></p>
                                <p style={{"font-size":"12px"}}>{role.role}</p>
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            </Box>
        </DropDownRoleStyled>
    )
}


