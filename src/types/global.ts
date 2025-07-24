import z from 'zod';

export const CategoryTypeSchema = z.enum(['headphones', 'speakers', 'earphones']);

export type CategoryType = z.infer<typeof CategoryTypeSchema>;
