import { Keyboard, TouchableWithoutFeedback, TouchableWithoutFeedbackProps, View } from "react-native";
import { twMerge } from "tailwind-merge";

type DismissKeyboardViewProps = TouchableWithoutFeedbackProps & {
  className?: string;
  children: React.ReactNode;
};

export default function DismissKeyboardView({ className, children, ...rest }: DismissKeyboardViewProps) {
  const defaultStyles = 'flex-1';

  return (
    <TouchableWithoutFeedback 
      className={twMerge(defaultStyles, className)}
      onPress={() => Keyboard.dismiss()}
      {...rest}
    >
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
}