import React from 'react';
import Button from '@mui/material/Button';

interface StyledButtonProps {
  label: string;
  disabled?: boolean;
  width?: string;
  onClick: () => void;
}

const StyledButton = ({
  label,
  disabled,
  width,
  onClick,
}: StyledButtonProps) => {
  return (
    <Button
      disabled={disabled}
      variant='text'
      onClick={onClick}
      sx={{
        width,
        backgroundColor: 'secondary.dark',
        color: 'primary.light',
        '&:hover': {
          backgroundColor: 'secondary.light',
        },
      }}
    >
      {label}
    </Button>
  );
};

export default StyledButton;
