export default function CasePost() {
  return (
    <div className="flex gap-12">
      <div className="flex-1">
        <h1 className="mb-6 text-4xl font-bold text-alpha">
          Developing at the speed of sound: How Sonos amplified their DevEx
        </h1>
        <p className="my-5">
          Learn how Sonos improved build times, saved developer time, and
          optimized their digital presence by migrating to Next.js and Vercel.
        </p>
        <img
          src="https://images.pexels.com/photos/18110319/pexels-photo-18110319/free-photo-of-birds-on-wire-in-evening.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Case Image"
          className="my-10 w-full rounded-lg object-cover"
        />
        <h2 className="my-6 text-2xl font-bold text-alpha">
          Effortless listening
        </h2>
        <p className="my-5">
          As the world's leading sound experience company with a 20-year legacy
          of innovation and over 3,000 patents, Sonos understands the importance
          of a robust digital presence that reflects the brand's cutting-edge
          ethos.
        </p>
        <p className="my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices
          mauris sit amet quam iaculis venenatis. Donec elit turpis, luctus et
          congue in, luctus quis lorem. Ut luctus, mauris a.
        </p>
        <h3 className="my-6 text-lg font-bold text-alpha">Case subtitle</h3>
        <p className="my-5">
          As the world's leading sound experience company with a 20-year legacy
          of innovation and over 3,000 patents, Sonos understands the importance
          of a robust digital presence that reflects the brand's cutting-edge
          ethos.
        </p>
        <p className="my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices
          mauris sit amet quam iaculis venenatis. Donec elit turpis, luctus et
          congue in, luctus quis lorem. Ut luctus, mauris a.
        </p>
        <img
          src="https://images.pexels.com/photos/15469650/pexels-photo-15469650/free-photo-of-monochroom-winterlandschap.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Case Image"
          className="my-10 w-full rounded-lg object-cover"
        />
      </div>
      <div className="w-[300px]">
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
              <li>ISR</li>
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
