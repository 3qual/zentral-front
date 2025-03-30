export interface Transaction {
  id?: string;
  type: string;
  name: string;
  date: Date;
  merchantName: string;
  totalAmount: number;
  currency: string;
  recognizedText?: string;
  description?: string;
  category?: string;
  locationName?: string;
  locationAddress?: string;
  locationCoordinates?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TransactionCreateInput = Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>;