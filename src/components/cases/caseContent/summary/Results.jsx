//Contentful Imports
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Results({ results, lang }) {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="text-xl font-extrabold text-bravo">{children}</h4>
      ),

      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-5 text-sm">{children}</p>
      ),
    },
  };

  return (
    <div className="mb-6 flex flex-col gap-6 rounded-lg border border-bravo/30 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold leading-none tracking-tight text-bravo">
        {lang === 'es' ? 'Resultados' : 'Results'}
      </h3>
      <div className="flex flex-col">
        {results ? documentToReactComponents(results, options) : null}
      </div>
    </div>
  );
}
