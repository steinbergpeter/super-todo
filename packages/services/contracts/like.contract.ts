import { z } from 'zod';
import { LikeSchema, Like } from '../../db/zod-schemas';

/**
 * Like API Contract
 *
 * Endpoints:
 *   - POST /api/likes
 *   - GET /api/likes/:id
 *   - DELETE /api/likes/:id
 */

export const CreateLikeRequest = LikeSchema.omit({ id: true, createdAt: true });
export type CreateLikeRequest = z.infer<typeof CreateLikeRequest>;

export const LikeResponse = LikeSchema;
export type LikeResponse = Like;
