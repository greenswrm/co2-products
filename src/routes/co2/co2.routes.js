import express from "express";
import productCo2Fetch from "../../controller/productCo2Fetch.js";
import productsCo2Fetch from "../../controller/productsCo2Fetch.js";

import HomeController from '../../controller/homeController.js';

const Home = new HomeController();

const co2Router = express.Router();

co2Router.post("/product", productCo2Fetch);
co2Router.post("/products", productsCo2Fetch);

// co2Router.post("/access", homeController.createAccess);
co2Router.post("/access", Home.getAccess);

export default co2Router;
