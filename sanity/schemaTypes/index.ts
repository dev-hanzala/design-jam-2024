import { type SchemaTypeDefinition } from "sanity";
import { productType } from "@/sanity/schemaTypes/productType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType],
};
