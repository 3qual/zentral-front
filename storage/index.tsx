import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '@/types/user/User';

export const storage = {
  setUser: async (user: User) => {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  },
  
  getUser: async (): Promise<User | null> => {
    const userJson = await AsyncStorage.getItem('user');
    if (!userJson) return null;
    try {
      return JSON.parse(userJson) as User;
    } catch (e) {
      console.error('Failed to parse user JSON:', e);
      return null;
    }
  },
  
  setToken: async (token: string) => {
    await AsyncStorage.setItem('token', token);
  },
  
  getToken: async () => {
    return await AsyncStorage.getItem('token');
  },
  
  removeItem: async (key: string) => {
    await AsyncStorage.removeItem(key);
  },
  
  clearAll: async () => {
    await AsyncStorage.clear();
  },
};