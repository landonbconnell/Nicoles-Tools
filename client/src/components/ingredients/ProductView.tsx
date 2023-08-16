import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  useTheme,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSelectedProducts } from 'redux/reducers/ingredientSlice';

const ProductView = ({ selectedProducts, product }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const { id, description, image, price, size } = product;

  return (
    <Card
      sx={{
        maxWidth: 250,
        margin: '2rem',
        color: 'primary.contrastText',
        border: selectedProducts.includes(id)
          ? `solid ${theme.palette.primary.dark}`
          : 'solid transparent',
      }}
    >
      <CardActionArea
        onClick={() => dispatch(setSelectedProducts(id))}
        disableRipple
      >
        <CardMedia
          component='img'
          alt={description}
          width='100%'
          height='auto'
          image={image}
        />
        <CardContent>
          {price.promo > 0 ? (
            <Typography gutterBottom variant='h5' component='div'>
              <mark>{price.promo}</mark> <del>{price.regular}</del>
            </Typography>
          ) : (
            <Typography gutterBottom variant='h5' component='div'>
              {price.regular}
            </Typography>
          )}
          <Typography gutterBottom variant='h6' component='div'>
            {description}
          </Typography>
          <Typography gutterBottom variant='h6' component='div'>
            {size}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductView;
