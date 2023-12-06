//Contentful Imports
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Summary from './summary';
import Contact from './Contact';

export default function CasePost({ caseEntry, lang }) {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h2 className="mb-6 text-4xl font-bold text-alpha">{children}</h2>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h3 className="my-6 text-2xl font-bold text-alpha">{children}</h3>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h4 className="my-6 text-lg font-bold text-alpha">{children}</h4>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="my-5">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="mb-10">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="mb-10">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="ml-8 list-disc">{children}</li>
      ),
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a
            href={uri}
            target="_blank"
            className="my-5 cursor-pointer text-bravo underline underline-offset-2 transition-all hover:text-alpha"
          >
            {children}
          </a>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url } = node.data.target.fields.file;
        const { title } = node.data.target.fields;
        return (
          <img
            src={url}
            alt={title + 'Image'}
            className="my-10 w-full rounded-lg object-cover"
          />
        );
      },
    },
  };

  const caseBody = caseEntry.fields.caseBody;

  return (
    <div className="flex items-start gap-12">
      <div className="flex-1 ">
        {caseBody ? documentToReactComponents(caseBody, options) : null}
        <div className="lg:hidden ">
          <Summary
            results={caseEntry.fields.results}
            platforms={caseEntry.fields.platforms}
            lang={lang}
          />
        </div>
        <div className="lg:hidden">
          <Contact lang={lang} />
        </div>
      </div>
      <div className="top-40 hidden w-[300px] lg:block 3xl:sticky">
        <Summary
          results={caseEntry.fields.results}
          platforms={caseEntry.fields.platforms}
          lang={lang}
        />
        <Contact lang={lang} />
      </div>
    </div>
  );
}
