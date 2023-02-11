import { Primary } from '../../components/buttons/Primary'
import { Profile } from '../../components/profile'
import {DefaultTableList} from '../../components/tableList'
import { GacModal } from '../../components/modal/modal'
import { useState } from 'react'

export const StudentHome = () => {

  return (
    <div>
      <Profile />
      <GacModal></GacModal>
      <DefaultTableList/>
    </div>
  )
}
