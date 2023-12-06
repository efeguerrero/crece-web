export default function Contact({ lang }) {
  return (
    <div className="mb-6 flex flex-col gap-6 rounded-lg border border-bravo/30 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold leading-none tracking-tight text-bravo">
        {lang === 'es' ? '¿Necesitas hablar?' : 'Need to talk?'}
      </h3>
      <a href="/#contact">
        <button className="w-max transform rounded-md bg-alpha px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 lg:hover:bg-alphaDark">
          {lang === 'es' ? 'Contactanos' : ' Contact Us'}
        </button>
      </a>
    </div>
  );
}
