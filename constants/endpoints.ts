export const API_URL = process.env.EXPO_PUBLIC_API_URL

export const TRANSACTIONS_ENDPOINTS = {
  CREATE: `${API_URL}/api/transaction/`,
} as const 

export type TransactionsEndpoints = typeof TRANSACTIONS_ENDPOINTS;