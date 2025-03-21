import React, { FC } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SvgProps } from 'react-native-svg';

type ThemedIconProps = SvgProps & {
  Icon: FC<SvgProps>;
  focused?: boolean;
  size?: number;
  className?: string;
};

export default function ThemedIcon({
  Icon,
  focused,
  size = 40,
  className,
  ...rest
}: ThemedIconProps) {
  const colorScheme = useColorScheme();
  const white = '#faf9f6';
  const black = '#000';

  const color = colorScheme === 'dark'
    ? white
    : black;

  const fill = focused !== undefined 
    ? colorScheme === 'dark'
      ? focused ? white : black
      : focused ? black : white
    : colorScheme === 'dark'
      ? white
      : black;

  return <Icon className={className} width={size} height={size} color={color} fill={fill} {...rest}/>;
}