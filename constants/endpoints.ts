export const API_URL = process.env.EXPO_PUBLIC_API_URL

export const TRANSACTIONS_ENDPOINTS = {
  CREATE: `${API_URL}/api/transaction/`,
} as const 

export const USER_ENDPOINTS = {
  CREATE: `${API_URL}/api/user/`,
  GET_BY_USERNAME: (username: string) => `${API_URL}/api/user/username/${username}`,
}

export type UserEndpoints = typeof USER_ENDPOINTS
export type TransactionsEndpoints = typeof TRANSACTIONS_ENDPOINTS;