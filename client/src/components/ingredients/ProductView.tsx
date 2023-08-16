import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSelectedProducts } from 'redux/reducers/ingredientSlice';

const ProductView = ({ product }) => {
  const dispatch = useDispatch();
  const { id, description, image, price, size } = product;

  return (
    <Card
      sx={{
        maxWidth: 250,
        margin: '2rem',
        //border: selected ? 'solid DodgerBlue' : 'solid transparent',
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
