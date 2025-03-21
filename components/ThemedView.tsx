import { View, ViewProps } from "react-native";
import { twMerge } from "tailwind-merge";

type ThemedViewProps = ViewProps & {
  className?: string;
};

export default function ThemedView({ className, ...rest }: ThemedViewProps) {
  const defaultStyles = 'bg-white dark:bg-black ';
  return (
    <View className={twMerge(
      defaultStyles,
      className
    )} {...rest} />
  )
}