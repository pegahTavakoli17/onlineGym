const state = {
  tickets: {
    today: "",
    priority: "",
    ticketText: "",
    departman: "",
    ticketTitle: "",
  },
};
const getters = {
  tickets: (state) => {
    return state.tickets;
  },
};
const mutations = {
  setTicket: (state, name) => {
    state.tickets = name;
  },
};
export default {
  state,
  getters,
  mutations,
};
