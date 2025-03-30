export interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export interface ApiResult<T> {
  response: Response;
  data: T;
}