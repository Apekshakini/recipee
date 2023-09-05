import express from "express";
import mongoose from "mongoose";
import {RecipesModel} from "../modules/Recipes.js";
import { verifyToken } from "./users.js";


const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const response = await RecipesModel.find({});
      res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
  });


router.post("/",verifyToken, async (req, res) => {


    const recipe = new RecipesModel(req.body)
    try {
      const response = await recipe.save();
      res.json(recipe);
    } catch (err) {
      res.json(err);
    }
  });

router.put("/", async (req, res) => {
    try {
        const recipe = await RecipesModel.findById(req.body.recipeID);
        const user = await UserModel.findById(req.body.userID);
        user.savedRecipes.push(recipe);
        await user.save();
        res.status(201).json({ savedRecipes: user.savedRecipes });
    } catch (err) {
      res.json(err);
    }
  });

  router.get("/savedRecipes/ids/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userId);
        res.status(201).json({ savedRecipes: user?.savedRecipes });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
  });

  router.get("/savedRecipes/:userId", async (req, res) => {
    try {
        const user = await UserModel.findById(req.body.userId);
        const savedRecipes = await RecipesModel.find({
            _id: { $in: user.savedRecipes },
          });
      
        res.status(201).json({ savedRecipes});
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
  });
















export { router as recipesRouter };