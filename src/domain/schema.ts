import { z } from 'zod';

const PAGE_TYPES = ['manufacturer', 'product-line', 'product', 'protocol', 'concept'] as const;

const PRODUCT_CATEGORIES = [
  'controller',
  'field-panel',
  'actuator',
  'valve',
  'damper',
  'sensor',
  'vav-box',
  'packaged-unit-controller',
  'network-device',
  'software',
  'other',
] as const;

const slug = z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'must be a lowercase kebab-case slug');

const partNumberSchema = z.object({
  number: z.string().min(1),
  description: z.string().optional(),
  /** URL of the datasheet or catalog the part number was taken from. */
  source: z.string().url().optional(),
});

const imageSchema = z.object({
  /** Path relative to the content root, e.g. `images/siemens/pxc7.jpg`. */
  path: z.string().min(1),
  alt: z.string().min(1),
  /** Where the image came from. Required so provenance is never lost. */
  source: z.string().min(1),
  /** License or permission basis, e.g. `CC-BY-4.0`, `public-domain`, `own-work`, `manufacturer-permission`. */
  license: z.string().min(1),
});

export const pageSchema = z.object({
  id: slug,
  type: z.enum(PAGE_TYPES),
  title: z.string().min(1),
  summary: z.string().min(1),
  manufacturer: slug.optional(),
  productLine: slug.optional(),
  category: z.enum(PRODUCT_CATEGORIES).optional(),
  status: z.enum(['current', 'legacy', 'end-of-life', 'unknown']).default('unknown'),
  /** `draft` = AI-drafted from public docs, `needs-review` = awaiting human check, `verified` = checked. */
  review: z.enum(['draft', 'needs-review', 'verified']).default('draft'),
  protocols: z.array(slug).default([]),
  partNumbers: z.array(partNumberSchema).default([]),
  images: z.array(imageSchema).default([]),
  related: z.array(slug).default([]),
  replacedBy: slug.optional(),
  sources: z.array(z.string().url()).default([]),
});

type PageFrontmatter = z.infer<typeof pageSchema>;
export type Page = PageFrontmatter & { body: string; file: string };
