import { SafeAreaView, ViewProps } from "react-native";
import { twMerge } from "tailwind-merge";

type ThemedScreenViewProps = ViewProps & {
  className?: string;
};

export default function ThemedScreenView({ className, ...rest }: ThemedScreenViewProps) {
  const defaultStyles = 'bg-white dark:bg-black mx-4';
  return (
    <SafeAreaView className={twMerge(
      defaultStyles,
      className
    )} {...rest} />
  )
}