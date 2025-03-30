import { ReactNode } from "react";
import { Pressable, PressableProps, Text } from "react-native";
import { twMerge } from "tailwind-merge";

type ThemedButtonProps = PressableProps & {
  className?: string;
  children?: ReactNode;
};

export default function ThemedButton({ className, children, ...rest }: ThemedButtonProps) { 
  const defaultStyles = 'bg-purple active:bg-purple-dark color-white dark:text-black self-start rounded-sm py-3 px-4';

  return (
    <Pressable 
      className={twMerge(
        defaultStyles,
        className
      )} 
      {...rest}
    >
      {children}
    </Pressable>
  )
}