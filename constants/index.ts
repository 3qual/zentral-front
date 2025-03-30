import { API_URL, TRANSACTIONS_ENDPOINTS } from "./endpoints"

export type {
  TransactionsEndpoints
} from "./endpoints";

export const API = {
  baseUrl: API_URL,
  transactions: TRANSACTIONS_ENDPOINTS,
} as const