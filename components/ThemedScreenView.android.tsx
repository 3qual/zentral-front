import { View, ViewProps } from "react-native";
import { twMerge } from "tailwind-merge";

type ThemedScreenViewProps = ViewProps & {
  className?: string;
};

export default function ThemedScreenView({ className, ...rest }: ThemedScreenViewProps) {
  const containerStyles = 'bg-white dark:bg-black flex-1';
  const contentStyles = 'px-4 pt-[4.5rem] flex-1';
  
  return (
    <View className={twMerge(containerStyles)} {...rest}>
      <View className={twMerge(contentStyles, className)}>
        {rest.children}
      </View>
    </View>
  )
}