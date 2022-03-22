import axios from 'axios';

const api = axios.create({ baseURL: "http://animalkingdom1.net:31273/queries/rows/users/active/1/10/30/username/DESC" });
const trans = axios.create({ baseURL: "http://animalkingdom1.net:31273/queries/rows/transactions/active/1/10/30/username/DESC" });
const token = axios.create({ baseURL: "http://animalkingdom1.net:31273/queries/rows/tokens/active/1/0/10/id/DESC" });
const pai = axios.create({ baseURL: "http://animalkingdom1.net:31273/queries/rows/pairs/active/1/0/10/id/DESC" });
const item = axios.create({ baseURL: " http://animalkingdom1.net:31273/queries/rows/items/active/1/0/10/id/DESC" })


export { api, trans, token, pai, item };


