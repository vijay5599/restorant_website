import { defineType, defineField } from 'sanity';

export const categoryType = defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'e.g. Pizzas, Snacks, Drinks',
    }),
    defineField({
      name: 'order',
      title: 'Order Display Weight',
      type: 'number',
      description: 'Lower numbers show up first on the menu',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
