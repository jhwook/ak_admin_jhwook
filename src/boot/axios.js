const URL = "http://animalkingdom1.net:31273";

// const api = axios.create({ baseURL: "http://animalkingdom1.net:31273/queries/rows/users/active/1/10/30/username/DESC" });
// const trans = axios.create({ baseURL: "http://animalkingdom1.net:31273/queries/rows/transactions/active/1/10/30/username/DESC" });
// const token = axios.create({ baseURL: "http://animalkingdom1.net:31273/queries/rows/tokens/active/1/0/10/id/DESC" });
// const pai = axios.create({ baseURL: "http://animalkingdom1.net:31273/queries/rows/pairs/active/1/0/10/id/DESC" });
// const item = axios.create({ baseURL: " http://animalkingdom1.net:31273/queries/rows/items/active/1/0/10/id/DESC" })

const api = {
  API_USERS: `${URL}/queries/rows/users/active/1`,
  API_TRANS: `${URL}/queries/rows/transactions/active/1`,
  API_TOKEN: `${URL}/queries/rows/tokens/active/1/0/10/id/DESC`,
  API_PAI: `${URL}/queries/rows/pairs/active/1/0/10/id/DESC`,
  API_ITEM: `${URL}/queries/rows/items/active/1/0/10/id/DESC`,
  API_SET_ACTIVE_USER: `${URL}/users/user_active`,
  API_TRANSATION: `${URL}/queries/rows/transactions/active/1`,
  API_MARKET_SELL_ITEM: `${URL}/queries/rows/items/salestatus/1`,
};

// export { api, trans, token, pai, item };
export { api };
