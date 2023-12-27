import contentful from 'contentful';
import type { EntryFieldTypes } from 'contentful';

export interface Case {
  contentTypeId: 'caso';
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    caseImage: EntryFieldTypes.AssetLink;
    Tags: EntryFieldTypes.Text;
  };
}

const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: 'cdn.contentful.com',
});

export { contentfulClient };
