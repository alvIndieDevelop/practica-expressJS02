import { Request, Response, NextFunction } from "express";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // verify if inside of body have password if have password dont show it
  const body = { ...req.body };
  if (body.password) {
    body.password = "*****";
  }
  console.log(`[${req.method}] ${req.path} - ${JSON.stringify(body)}`);
  next();
};
