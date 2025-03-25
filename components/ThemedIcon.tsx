import React, { FC } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SvgProps } from 'react-native-svg';

type ThemedIconProps = SvgProps & {
  Icon: FC<SvgProps>;
  focused?: boolean;
  size?: number;
  className?: string;
  invertColors?: boolean;
};

export default function ThemedIcon({
  Icon,
  focused = false,
  size = 40,
  className,
  invertColors = false,
  ...rest
}: ThemedIconProps) {
  const colorScheme = useColorScheme();
  const white = '#faf9f6';
  const black = '#000';
  const baseColor = colorScheme === 'dark' ? white : black;
  const invertedColor = colorScheme === 'dark' ? black : white;

  const color = invertColors 
    ? invertedColor 
    : baseColor;

  const fill = invertColors
    ? (focused ? invertedColor : baseColor)
    : (focused ? baseColor : invertedColor);

    return (
      <Icon
        className={className}
        width={size}
        height={size}
        color={color}
        fill={fill}
        {...rest}
      />
    );
}