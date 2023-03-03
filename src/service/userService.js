import { privateInstance } from './axios'

class AxiosUserService {
    async getUserInfo() {
        return privateInstance.get('/user/whoami')
    }
}

export const UserService = new AxiosUserService();