import axios from 'axios';

const api = axios.create({ baseURL: "http://animalkingdom1.net:31273/queries/rows/users/active/1/10/30/username/DESC" });
const tpi = axios.create({ baseURL: "http://animalkingdom1.net:31273/queries/rows/transactions/active/1/10/30/username/DESC" });

export { api, tpi };