import type { Request, Response, NextFunction } from "express";
import { errResponse } from "../utils/responses.js";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);

  errResponse(res, 500, err);
}
