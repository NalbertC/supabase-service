import { ReactNode } from "react";
import { View, ViewProps } from "react-native";

interface HeaderProps extends ViewProps {
  children: ReactNode
}

export function Header({ children, ...rest }: HeaderProps) {
  return (
    <View className="h-11 w-full bg-primary justify-center px-2" {...rest} >
      {children}
    </View>
  )
}