import { z } from 'zod';
import { DiscussionSchema, Discussion } from '../../db/zod-schemas';

/**
 * Discussion API Contract
 *
 * Endpoints:
 *   - POST /api/discussions
 *   - GET /api/discussions/:id
 *   - PUT /api/discussions/:id
 *   - DELETE /api/discussions/:id
 */

export const CreateDiscussionRequest = DiscussionSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type CreateDiscussionRequest = z.infer<typeof CreateDiscussionRequest>;

export const UpdateDiscussionRequest = DiscussionSchema.partial().omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type UpdateDiscussionRequest = z.infer<typeof UpdateDiscussionRequest>;

export const DiscussionResponse = DiscussionSchema;
export type DiscussionResponse = Discussion;
