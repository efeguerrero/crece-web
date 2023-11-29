//Contentful Imports
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function CasePost({ caseEntry }) {
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

  console.log(caseBody);

  return (
    <div className="flex items-start gap-12">
      <div className="flex-1 ">
        {caseBody ? documentToReactComponents(caseBody, options) : null}
      </div>
      <div className="sticky top-40 w-[300px]">
        <div className="mb-6 flex flex-col gap-6 rounded-lg border border-bravo/30 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold leading-none tracking-tight text-bravo">
            Features Highlighted
          </h3>

          <div className="">
            <ul className="list-inside list-disc space-y-2 text-sm">
              <li>Next.js</li>
              <li>Edge Middleware</li>
              <li>Monitoring</li>
              <li>Comments</li>
              <li>Preview Deployments</li>
              <li>Web Analytics</li>
            </ul>
          </div>
        </div>
        <div className="mb-6 flex flex-col gap-6 rounded-lg border border-bravo/30 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold leading-none tracking-tight text-bravo">
            Performance
          </h3>

          <div className="flex flex-col gap-4">
            <div className="">
              <p className="text-xl font-extrabold text-bravo">75%</p>
              <p className="text-sm">Improvement in build times</p>
            </div>
            <div>
              <p className="text-xl font-extrabold text-bravo">15%</p>
              <p className="text-sm">Improvement in performance scores</p>
            </div>
          </div>
        </div>
        <div className="mb-6 flex flex-col gap-6 rounded-lg border border-bravo/30 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold leading-none tracking-tight text-bravo">
            Need to talk?
          </h3>
          <a href="/#contact">
            <button className="w-max transform rounded-md bg-alpha px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 lg:hover:bg-alphaDark">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
