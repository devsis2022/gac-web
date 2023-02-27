import {publicInstance} from "../../service/axios"
import {DropDownRoleComponent} from "../../components/dropdown_role/index"

export const MainRoleChoice = () => {

  return (
    <div>
      <DropDownRoleComponent/>
      <h1>Escolha sua role</h1>
    </div>
  )
}
