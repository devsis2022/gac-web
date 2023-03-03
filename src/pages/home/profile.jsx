import { useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { UserService } from "../../service/userService"
import { LoadingConsumer } from '../../context/loadingContext'
import { GlobalConsumer } from '../../context/globalContext'
import { FullSize } from '../../shared/styles/styles'
import { Header } from "../../components/header"

export const Profile = () => {
    const loadingService = LoadingConsumer()
    const globalConsumer = GlobalConsumer()
    const [userInfo, setUserInfo] = useState()


    const requestInfo = useCallback( async () => {
        loadingService.show()

        try {
            const { data } = await UserService.getUserInfo()

            setUserInfo(data)

            globalConsumer.dispatch((state) => {
                return {
                    ...state,
                    userRoles: data.roles
                }
            })

        } catch (error) {
            toast.error('Erro ao realizar solicitação')
        }

        loadingService.hide()
    }, [])

    useEffect(() => {
        requestInfo()
    }, [requestInfo])

    return (
        <>
            {userInfo && (
                <FullSize>
                    <Header userName={userInfo.user.name}></Header>
                </FullSize>
            )}
        </>
    )
}