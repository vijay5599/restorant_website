import type { SchemaTypeDefinition } from 'sanity';
import { categoryType } from './categoryType';
import { menuItemType } from './menuItemType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, menuItemType],
};
