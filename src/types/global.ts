import z from 'zod';

export const CategoryTypeSchema = z.enum(['headphones', 'speakers', 'earphones']);

export type CategoryType = z.infer<typeof CategoryTypeSchema>;

const ResponsiveImage = z.object({
    mobile: z.string(),
    tablet: z.string(),
    desktop: z.string(),
});

export const ProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    price: z.number(),
    image: ResponsiveImage,
    category: CategoryTypeSchema,
    categoryImage: ResponsiveImage,
    features: z.string(),
    includes: z.array(
        z.object({
            quantity: z.number(),
            item: z.string(),
        })
    ),
    new: z.boolean(),
    gallery: z.object({ first: ResponsiveImage, second: ResponsiveImage, third: ResponsiveImage }),
    others: z.array(
        z.object({
            slug: z.string(),
            name: z.string(),
            image: ResponsiveImage,
        })
    ),
    cartImage: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;

export type Cart = { item: Product; quantity: number };
