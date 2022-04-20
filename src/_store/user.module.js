// import { userService } from '../_services';
import { User } from '../firebase/index.js'
import { authErrorHandler } from '@/_services/error.js';
import router from '@/router/index.js';

// const getters = {
//     getUser(state) {
//         return state.user;
//     },
//     isUserAuth(state) {
//         return !!state.user;
//     },
//     getError(state) {
//         return state.error;
//     }
// }

// const user = JSON.parse(localStorage.getItem('user'));
// const state = user
//     ? { status: { loggedIn: true }, user }
//     : { status: {}, user: null };

// const authUser = User.getCurrentUser()

const state = {
    uid: localStorage.getItem('uid'),
    user: null,
    error: null,
    status: {loggingIn: false}
};

const actions = {
    login({ commit }, { email, password, errorFunc = () => {} }){
        commit('setLoggingIn', true)
        return User.login(email, password).then((cred) => {
            commit('setUser', cred.user)
            commit('setUid', cred.user.uid)
            localStorage.setItem('uid', cred.user.uid)
            router.push('/')
        })
        .catch((error) => {
            authErrorHandler(error)
            commit('setLoggingIn', false)
            commit('setError', error.message)
            errorFunc(error)
        })
    },
    logout({ commit }, { errorFunc = () => {} }){
        return User.logout().then(() => {
            commit('clearUser')
            commit('clearUid')
            localStorage.removeItem('uid')
            router.push('/')
        })
        .catch((error) => {
            authErrorHandler(error)
            commit('setError', error.message)
            errorFunc(error)
        })
    },
    register({ commit }, { email, password, data, errorFunc = () => {} }){
        commit('setLoggingIn', true)
        // eslint-disable-next-line no-unused-vars
        return User.register(email, password, data).then(({profile, cred}) => {
            commit('setUser', cred.user)
            commit('setUid', cred.user.uid)
            localStorage.setItem('uid', cred.user.uid)
            router.push('/')
        })
        .catch((error) => {
            commit('setLoggingIn', false)
            authErrorHandler(error)
            commit('setError', error.message)
            errorFunc(error)
        })
    },
    authAction({commit}) {
        User.onAuthStateChanged(user => {
            if (user) {
                commit("setUser", user);
                localStorage.setItem('uid', user.uid)
            } else {
                commit("setUser", null);
                commit('clearUid')
                localStorage.removeItem('uid')
            }
        });
    }
};

const mutations = {
    setLoggingIn(state, status){
        state.status.loggingIn = status
    },
    setUser(state, user){
        state.user = user
    },
    clearUser(state){
        state.user = null
    },
    setError(state, error){
        state.error = error
    },
    setUid(state, uid){
        state.uid = uid
    },
    clearUid(state){
        state.uid = null
    }
};

export const user = {
    namespaced: true,
    state,
    actions,
    mutations
};
