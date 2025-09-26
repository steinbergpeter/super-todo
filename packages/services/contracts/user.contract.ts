import { z } from 'zod';
import { UserSchema, User } from '../../db/zod-schemas';

/**
 * User API Contract
 *
 * Endpoints:
 *   - POST /api/users
 *   - GET /api/users/:id
 *   - PUT /api/users/:id
 *   - DELETE /api/users/:id
 */

export const CreateUserRequest = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type CreateUserRequest = z.infer<typeof CreateUserRequest>;

export const UpdateUserRequest = UserSchema.partial().omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type UpdateUserRequest = z.infer<typeof UpdateUserRequest>;

export const UserResponse = UserSchema;
export type UserResponse = User;
