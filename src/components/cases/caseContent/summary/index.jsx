import Platforms from './Platforms';
import Results from './Results';

export default function Index({ platforms, results, lang }) {
  return (
    <div>
      {platforms && <Platforms platforms={platforms} lang={lang} />}
      {results && <Results results={results} lang={lang} />}
    </div>
  );
}
