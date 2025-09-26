import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().optional(),
  password: z.string().min(8),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof UserSchema>;

export const DiscussionSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  content: z.string().min(1),
  createdAt: z.date(),
  updatedAt: z.date(),
  authorId: z.string().uuid(),
});

export type Discussion = z.infer<typeof DiscussionSchema>;

export const CommentSchema = z.object({
  id: z.string().uuid(),
  content: z.string().min(1),
  createdAt: z.date(),
  updatedAt: z.date(),
  authorId: z.string().uuid(),
  discussionId: z.string().uuid(),
  parentId: z.string().uuid().optional(),
});

export type Comment = z.infer<typeof CommentSchema>;

export const LikeSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  discussionId: z.string().uuid().optional(),
  commentId: z.string().uuid().optional(),
  createdAt: z.date(),
});

export type Like = z.infer<typeof LikeSchema>;

export const SubscriptionSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  discussionId: z.string().uuid(),
  createdAt: z.date(),
});

export type Subscription = z.infer<typeof SubscriptionSchema>;
