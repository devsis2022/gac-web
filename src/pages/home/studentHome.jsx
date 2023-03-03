import { Profile } from '../../components/profile'
import {DefaultTableList} from '../../components/tableList'
import { Tracker } from '../../components/activityTracker/Tracker'
import { StudentModal } from '../../components/modal/StudentModal'
import { useState } from 'react'
import { Accepted } from '../../components/alerts/alerts'
import { Waiting } from '../../components/alerts/alerts'
import { Primary } from '../../components/buttons/Primary'

export const StudentHome = () => {
  const [activity, setActivity] = useState({})
  const [activitiesType, setActivitiesType] = useState([{}])

  const options = [
    {
      tittle:'Atividade 1',
      maxHour: 100,
      currentHour: 25
    },
    {
      tittle:'Atividade 2',
      maxHour: 100,
      currentHour: 10
    },
    {
      tittle:'Atividade 3',
      maxHour: 100,
      currentHour: 10
    }
  ]

  let list = [
    {
        tittle:"2primeiro valor",
        minutes: "2segundo valor",
        type: 'tipo 1',
        terceiro:<Accepted>Aceito</Accepted>,
        quarto: <StudentModal options={options} label={'Editar Atividade'}/>
    }
]

  return (
    <div>
      <Profile />
      <StudentModal activity={activity} label={'Adicionar Atividade'} setActivity={setActivity} list={list} options={options}/>
      <Tracker items={options}/>
      <DefaultTableList list={list}/>
    </div>
  )
}
