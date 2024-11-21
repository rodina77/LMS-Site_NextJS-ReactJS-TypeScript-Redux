import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux'; 
import { RootState } from '../store/store'; 

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const CartIcon = () => {

  const cartItemCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <IconButton aria-label="cart" sx={{ margin: '0px 20px', color: 'white' }}>
      <StyledBadge badgeContent={cartItemCount} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default CartIcon;
