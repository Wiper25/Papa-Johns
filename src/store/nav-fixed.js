export default {
    actions: {
    },
    mutations: {
        burgerMenu(state) {
            state.openBurgerMenu = !state.openBurgerMenu ;
        }
    },
    state: {
        openBurgerMenu: false,
    },
    getters: {
        statusBurgerMenu(state) {
            return state.openBurgerMenu
        }
    }
}