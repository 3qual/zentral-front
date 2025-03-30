import { TextInput, TextInputProps, View } from "react-native"
import ThemedText from "./ThemedText"
import { twMerge } from "tailwind-merge"

type ThemedTextnpuProps = TextInputProps & {
  textInputStyles?: string,
  labelInputStyles?: string,
  label?: string,
}


export default function ThemedTextnput({ textInputStyles, labelInputStyles, label, ...rest }: ThemedTextnpuProps) {
  const defaultTextInputStyles = "bg-white dark:bg-black border border-black/70 dark:border-white/70 focus:border-black dark:focus:border-white p-3 rounded-sm text-black dark:text-white mb-4"
  const defaultLabelStyles = "mb-1 text-xl"

  return (
    <View>
      {label && (
        <ThemedText 
         className={twMerge(defaultLabelStyles, labelInputStyles)}
        >
          {label}
        </ThemedText>
      )}
      <TextInput
        className={twMerge(defaultTextInputStyles, textInputStyles)}
        placeholderTextColor="#9CA3AF"
        {...rest}        
      />
    </View>
    
  )
}