import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';

const ProductView = ({ product, setSelectedProducts }) => {
  const { id, description, images, price, size } = product;

  const image = images.find((image) => image.size === 'large');

  const handleClick = () => {
    setSelectedProducts((previousState) => {
      if (previousState.includes(id)) {
        return previousState.filter((item) => item !== id);
      } else {
        return [...previousState, id];
      }
    });
  };

  return (
    <Card sx={{ maxWidth: 250, margin: '2rem' }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component='img'
          alt={description}
          width='100%'
          height='auto'
          image={image.url}
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
