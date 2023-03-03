import { publicInstance } from './axios'

class AxiosAuthService {
    async register(body) {
        return publicInstance.post('/auth/signin', body)
    }

    async requestRecovery(body) {
        return publicInstance.post('/auth/recovery/request', body)
    }

    async validateRecovery(body) {
        return publicInstance.post('/auth/recovery/validate', body)
    }

    async resetPassword(body) {
        return publicInstance.post('/auth/recovery/change', body)
    }
}

export const AuthService = new AxiosAuthService();