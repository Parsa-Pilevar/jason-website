import { type SchemaTypeDefinition } from 'sanity'
import { pageSchemaTypes } from './pages'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...pageSchemaTypes],
}
