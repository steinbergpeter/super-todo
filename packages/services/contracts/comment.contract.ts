import { z } from 'zod';
import { CommentSchema, Comment } from '../../db/zod-schemas';

/**
 * Comment API Contract
 *
 * Endpoints:
 *   - POST /api/comments
 *   - GET /api/comments/:id
 *   - PUT /api/comments/:id
 *   - DELETE /api/comments/:id
 */

export const CreateCommentRequest = CommentSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type CreateCommentRequest = z.infer<typeof CreateCommentRequest>;

export const UpdateCommentRequest = CommentSchema.partial().omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type UpdateCommentRequest = z.infer<typeof UpdateCommentRequest>;

export const CommentResponse = CommentSchema;
export type CommentResponse = Comment;
