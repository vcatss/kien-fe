export const state = ()=> ({
    model: []
})
export const mutations = {
    init(state,payload){
        state.model = payload;
    }
}
export const actions = {
    async init({ state, commit},params){
        let res = await this.$axios.get('/product-category'); 
        commit('init', res.data.data)
    },
    async create({ state, commit,dispatch},params){
        let res = await this.$axios.post('/product-category', params); 
        return res;
    },
    async update({ state, commit},params){
        let res = await this.$axios.patch(`/product-category/${params.id}`, params.data); 
        return res;
    },
    async delete({ state, commit},params){
        let res = await this.$axios.delete(`/product-category/${params}`, {}); 
        return res;
    },
    async get({ state, commit},params){
        let res = await this.$axios.get(`/product-category/:${params}`); 
        commit('init', res.data)
    },
    async getAll({ state, commit},params){
        let res = await this.$axios.get('/product-category'); 
        commit('init', res.data.data)
    },
}
