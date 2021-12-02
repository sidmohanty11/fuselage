import { Box, Icon } from '@rocket.chat/fuselage';
import type { ComponentProps, ReactElement, ReactNode } from 'react';

const ListItem = ({
  children,
  icon,
  iconColor = 'success',
  fontScale = 'c1',
}: {
  children: ReactNode;
  icon?: string;
  iconColor?: ComponentProps<typeof Icon>['color'];
  fontScale?: ComponentProps<typeof Box>['fontScale'];
}): ReactElement => (
  <Box is='li' fontScale={fontScale} color='inherit'>
    {icon && <Icon name={icon} color={iconColor} size='x16' mie='x4' />}
    {children}
  </Box>
);

export default ListItem;