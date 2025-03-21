import { Text, TextProps } from "react-native";
import { twMerge } from "tailwind-merge";

type ThemedTextProps = TextProps & {
  className?: string;
}

export default function ThemedText({ className, ...rest }: ThemedTextProps) {
  const defaultStyles = 'text-black dark:text-white';
  return (
    <Text className={twMerge(
      defaultStyles,
      className
    )} {...rest} />
  )
}