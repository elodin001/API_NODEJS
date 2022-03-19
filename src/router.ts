import { Router } from "express";
import { ProductController } from "./controllers/product.controller";

const router = Router();

router.post("/product", new ProductController().create);
router.get("/product", new ProductController().list);
router.get("/product/:id", new ProductController().get);
router.put("/proudct/:id", new ProductController().update);
router.delete("/product/:id", new ProductController().delete);

export { router };
