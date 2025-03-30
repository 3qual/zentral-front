export interface User {
  id: string;            
  isActive: boolean;
  isVisible: boolean;
  name: string;
  username: string;        
  passwordHash: string;
  email: string;         
  isVerified: boolean;
  primaryCurrency: string;
  avatarPath: string;
  createdAt: string;    
  updatedAt: string;    
}

export interface UserLoginInput {
  username: string;
  password: string;
}

export interface UserRegisterInput {
  name: string;
  username: string;
  email: string;
  password: string;
  primaryCurrency?: string;
}
