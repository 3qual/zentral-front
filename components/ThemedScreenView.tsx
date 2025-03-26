import { SafeAreaView, View, ViewProps } from "react-native";
import { twMerge } from "tailwind-merge";

type ThemedScreenViewProps = ViewProps & {
  className?: string;
};

export default function ThemedScreenView({ className, ...rest }: ThemedScreenViewProps) {
  const containerStyles = 'dark:bg-black flex-1';
  const contentStyles = 'px-4 flex-1';
  
  return (
    <SafeAreaView className={twMerge(containerStyles)} {...rest}>
      <View className={twMerge(contentStyles, className)}>
        {rest.children}
      </View>
    </SafeAreaView>
  )
}