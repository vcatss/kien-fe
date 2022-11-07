export const state = ()=> ({
    model: {}
})
export const mutations = {
    init(state,payload){
        state.model = payload;
    }
}
export const actions = {
    async init({ state, commit},params){
        let res = await this.$axios.get('/product'); 
        commit('init', res.data)
    },
    async initCategory({ state, commit},params){
        let res = await this.$axios.get(`/product?category=${params}`); 
        return res;
    },
    async create({ state, commit},params){
        let res = await this.$axios.post('/product', params); 
        return res;
    },
    async update({ state, commit},params){
        let res = await this.$axios.patch(`/product/${params._id}`, params); 
        return res;
    },
    async delete({ state, commit},params){
        let res = await this.$axios.delete(`/product/${params}`, {}); 
        return res;
    },
    async get({ state, commit},params){
        let res = await this.$axios.get(`/product/${params}`); 
        return res;
    },
    async getAll({ state, commit},params){
        let res = await this.$axios.get('/product'); 
        return res;
    },
}
