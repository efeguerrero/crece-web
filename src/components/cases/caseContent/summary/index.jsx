import Platforms from './Platforms';
import Results from './Results';

export default function Index({ platforms, results }) {
  return (
    <div>
      {platforms && <Platforms platforms={platforms} />}
      {results && <Results results={results} />}
    </div>
  );
}
