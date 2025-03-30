import { API } from "@/constants";
import { ApiResult } from "@/types/api/Responses";
import { Transaction, TransactionCreateInput } from "@/types/transactions/Transaction";

export const transactionsApi = {
  async createTransaction(transaction: TransactionCreateInput): Promise<ApiResult<Transaction>> {
    const response = await fetch(`${API.transactions.CREATE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    });

    const data = await response.json();
    
    return {
      response,
      data: data as Transaction
    };
  }
}