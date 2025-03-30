import { ReactNode } from "react";
import ThemedButton from "../ThemedButton";
import { PressableProps } from "react-native";
import { twMerge } from "tailwind-merge";
import { Route, router } from "expo-router";

type NavigationButtonProps = PressableProps & {
  route?: Route;
  children?: ReactNode;
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "none";
  isBackButton?: boolean;
}

export default function NavigationButton({
  route,
  children,
  className,
  position = "none",
  isBackButton = false,
  ...rest
}: NavigationButtonProps ) {
  const defaultStyles = 'bg-black dark:bg-white'
  const positionStyles = {
    'top-left': 'absolute top-0 left-0',
    'top-right': 'absolute top-0 right-0',
    'bottom-left': 'absolute bottom-0 left-0',
    'bottom-right': 'absolute bottom-0 right-0',
    'none': ''
  };

  const handleNavigation = () => {
    if (isBackButton) {
      router.back();
    } else if (route) {
      router.push(route as any);
    }
  };

  return (
    <ThemedButton
      className={twMerge(defaultStyles, positionStyles[position], className)}
      onPress={() => handleNavigation()}
      {...rest}
    >
      {children}
    </ThemedButton>
  );
}