import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RecipeState {
  items: Recipe[];
  newRecipe: Recipe;
}

export interface Recipe {
  name: string;
  ingredients: Ingredient[];
  makes: Cupcake | Cake;
}

export interface Ingredient {
  name: string;
  quantity: string;
  unit: string;
}

export interface Cupcake {
  quantity: number;
}

export interface Cake {
  shape: "round" | "square";
  size: Diameter | Dimensions;
}

export interface Diameter {
  diameter: number;
  unit: "in" | "cm";
}

export interface Dimensions {
  width: number;
  height: number;
  unit: "in" | "cm";
}

const initialState: RecipeState = {
  items: [],
  newRecipe: {
    name: "",
    ingredients: [
      {
        name: "",
        quantity: "",
        unit: "",
      },
    ],
    makes: {
      shape: "round",
      size: {
        diameter: 8,
        unit: "in",
      },
    },
  },
};

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<Recipe>) => {
      state.items.push(action.payload);
    },
    setNewRecipeName: (state, action: PayloadAction<string>) => {
      state.newRecipe.name = action.payload;
    },
    addNewRecipeIngredient: (state) => {
      state.newRecipe.ingredients.push({
        name: "",
        quantity: "",
        unit: "",
      });
    },
    removeNewRecipeIngredient: (state, action: PayloadAction<number>) => {
      state.newRecipe.ingredients.splice(action.payload, 1);
    },
    setNewRecipeIngredientName: (
      state,
      action: PayloadAction<{ index: number; name: string }>
    ) => {
      const { index, name } = action.payload;
      state.newRecipe.ingredients[index].name = name;
    },
    setNewRecipeIngredientQuantity: (
      state,
      action: PayloadAction<{ index: number; quantity: string }>
    ) => {
      const { index, quantity } = action.payload;
      state.newRecipe.ingredients[index].quantity = quantity;
    },
    setNewRecipeIngredientUnit: (
      state,
      action: PayloadAction<{ index: number; unit: string }>
    ) => {
      const { index, unit } = action.payload;
      state.newRecipe.ingredients[index].unit = unit;
    },
  },
});

// Action creators are generated for each case reducer function

export const {
  addRecipe,
  setNewRecipeName,
  addNewRecipeIngredient,
  removeNewRecipeIngredient,
  setNewRecipeIngredientName,
  setNewRecipeIngredientQuantity,
  setNewRecipeIngredientUnit,
} = recipeSlice.actions;

export default recipeSlice.reducer;
