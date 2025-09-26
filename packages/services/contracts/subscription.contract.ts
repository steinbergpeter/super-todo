import { z } from 'zod';
import { SubscriptionSchema, Subscription } from '../../db/zod-schemas';

/**
 * Subscription API Contract
 *
 * Endpoints:
 *   - POST /api/subscriptions
 *   - GET /api/subscriptions/:id
 *   - DELETE /api/subscriptions/:id
 */

export const CreateSubscriptionRequest = SubscriptionSchema.omit({
  id: true,
  createdAt: true,
});
export type CreateSubscriptionRequest = z.infer<
  typeof CreateSubscriptionRequest
>;

export const SubscriptionResponse = SubscriptionSchema;
export type SubscriptionResponse = Subscription;
