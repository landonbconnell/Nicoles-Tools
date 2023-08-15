import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';

const ProductView = ({ product, setSelectedProducts }) => {
  const { id, description, image, price, size } = product;
  const [selected, setSelected] = React.useState(false);

  const handleClick = () => {
    setSelectedProducts((previousState) => {
      return selected
        ? previousState.filter((item) => item !== id)
        : [...previousState, id];
    });

    setSelected(!selected);
  };

  return (
    <Card
      sx={{
        maxWidth: 250,
        margin: '2rem',
        border: selected ? '1px solid blue' : '',
      }}
    >
      <CardActionArea onClick={handleClick}>
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
