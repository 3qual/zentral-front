import { API_URL, TRANSACTIONS_ENDPOINTS, USER_ENDPOINTS } from "./endpoints"

export type {
  TransactionsEndpoints,
  UserEndpoints,
} from "./endpoints";

export const API = {
  baseUrl: API_URL,
  transactions: TRANSACTIONS_ENDPOINTS,
  user: USER_ENDPOINTS,
} as const