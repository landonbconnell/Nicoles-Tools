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
      variant='text'
      disabled={disabled}
      onClick={onClick}
      sx={{
        width,
        backgroundColor: 'primary.dark',
        color: 'secondary.light',
        '&:hover': {
          backgroundColor: 'primary.light',
        },
      }}
    >
      {label}
    </Button>
  );
};

export default StyledButton;
