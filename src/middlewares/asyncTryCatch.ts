import { Request, Response, NextFunction } from "express";

export function asyncTryCatch(controller: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res);
    } catch (error) {
      next(error);
    }
  };
}
