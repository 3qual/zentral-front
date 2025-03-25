import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { useColorScheme } from '@/hooks/useColorScheme';
import ThemedView from '@/components/ThemedView';
import Collection from '@/assets/icons/collection.svg';
import Dashboard from '@/assets/icons/dashboard.svg'
import Plus from '@/assets/icons/plus.svg';
import Folder from '@/assets/icons/folder.svg';
import Settings from '@/assets/icons/settings.svg';
import ThemedIcon from '@/components/ThemedIcon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => (
          <ThemedView className='flex-1' />
        ),
        tabBarStyle: {
          height: 80,
          paddingTop: 10,
          borderTopWidth: 0,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <ThemedIcon 
              Icon={Dashboard} 
              focused={focused} 
              aria-label="Dashboard"
            />
          )
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{
          title: '',
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <ThemedIcon 
              Icon={Collection} 
              focused={focused}
              aria-label="Collection" 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: '',
          tabBarIcon: () => (
            <View className="w-[60px] h-[60px] rounded-full bg-black dark:bg-white items-center justify-center -mt-6">
              <ThemedIcon 
                Icon={Plus} 
                focused={false} 
                invertColors={true} 
                aria-label='Camera'
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="folders"
        options={{
          title: '',
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <ThemedIcon
              Icon={Folder} 
              focused={focused} 
              aria-label='Folders'
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: '',
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <ThemedIcon 
              Icon={Settings} 
              focused={focused} 
              aria-label='Settings'
            />
          ),
        }}
      />
    </Tabs>
  );
}
