import React from "react";
import SelectIngredient from "./SelectIngredient";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import SelectUnit from "./SelectUnit";

import SetQuantity from "./SetQuantity";
import MobileIngredient from "./MobileIngredient";

interface RecipeIngredientProps {
  index: number;
}

const RecipeIngredient = ({ index }: RecipeIngredientProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  return (
    <Grid container justifyContent="center" mb="1rem">
      {isMobile ? (
        <MobileIngredient index={index} />
      ) : (
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="30rem"
          spacing={1}
        >
          <Grid item xs={6}>
            <SelectIngredient index={index} />
          </Grid>
          <Grid item xs={3}>
            <SetQuantity index={index} />
          </Grid>
          <Grid item xs={3}>
            <SelectUnit index={index} />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default RecipeIngredient;
