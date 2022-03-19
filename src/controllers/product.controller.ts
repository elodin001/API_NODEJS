import { ProductService } from "../services/product.service";
import { Request, Response } from "express";

export class ProductController {
  async create(request: Request, response: Response) {
    const { name, description, price } = request.body;

    const service = new ProductService();

    const result = await service.create({ name, description, price });

    if (result instanceof Error)
      return response.status(400).json(result.message);
    else return response.json(result);
  }

  async list(request: Request, response: Response) {
    const service = new ProductService();

    const result = await service.list();

    return response.json(result);
  }

  async get(request: Request, response: Response) {
    const { id } = request.params;

    const service = new ProductService();

    const result = await service.get(id);

    if (result instanceof Error)
      return response.status(404).json(result.message);
    else return response.json(result);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, description, price } = request.body;

    const service = new ProductService();

    const result = await service.update({ id, name, description, price });

    if (result instanceof Error)
      return response.status(400).json(result.message);
    else return response.json(result);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const service = new ProductService();

    const result = await service.delete(id);

    if (result instanceof Error)
      return response.status(400).json(result.message);
    else return response.status(204).end();
  }
}
