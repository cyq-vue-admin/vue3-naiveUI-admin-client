import http from '@/api/request'
import type * as T from './types'

const userApi: T.IUserApi = {
    login(params) {
        return http.post('/login', params)
    },
    me() {
        return http.get('/getCurrentUser')
    },
    users(params) {
        return http.get('/users',params)
    },
    user(params) {
        return http.get('/user',params)
    },
    create(params){
        return http.post('/user/create', params)
    },
    update(params){
        return http.post('/user/update', params)
    },
    remove(params){
        return http.post('/user/del', params)
    },
}
export default userApi