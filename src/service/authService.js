import { publicInstance } from './axios'

class AxiosAuthService {
    async register(body) {
        return publicInstance.post('/auth/signin', body)
    }

    async requestRecovery(body) {
        return publicInstance.post('/auth/recovery/request', body)
    }
}

export const AuthService = new AxiosAuthService();