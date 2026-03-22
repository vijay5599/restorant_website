import { defineType, defineField } from 'sanity';

export const menuItemType = defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Item Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price String',
      type: 'string',
      description: 'e.g., ₹250',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Emoji Icon',
      type: 'string',
      description: 'e.g., 🍕, 🍟',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the item.',
    }),
    defineField({
      name: 'isSpecial',
      title: 'Is Signature Special?',
      type: 'boolean',
      description: 'Will be highlighted as a Chef Special on some layouts.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      icon: 'icon',
    },
    prepare({ title, subtitle, icon }) {
      return {
        title,
        subtitle,
        media: () => icon || '🍽️',
      }
    }
  },
});
