import { columnService } from 'src/services';
import { Request, Response } from 'express';

/**
 * Retrieves all columns by their board ID.
 * @param req The HTTP request object.
 * @param res The HTTP response object.
 */
export const getColumnsByBoardId = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { boardId } = req.params;
    const columns = await columnService.getColumnsByBoardId(boardId);
    return res.json(columns);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};
