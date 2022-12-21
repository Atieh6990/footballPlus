import {ROAST_CONFIG} from "../../worldcup/js/config";

export const User = {
    state: {},

    getters: {

        getOnlinePlay(state) {
            return state.showOnlinePlay
        },
    }
    ,


    mutations: {

        setOnlinePlay(state, index) {
            state.showOnlinePlay = index
        },
    }
    ,

    modules: {}
}
