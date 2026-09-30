import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../types';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response<ApiResponse<null>>,
  next: NextFunction
) => {
  console.error('Error:', err.message || err);

  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    success: false,
    message,
  });
};
