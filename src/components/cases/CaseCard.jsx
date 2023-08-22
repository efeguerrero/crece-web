const CaseCard = ({ title, summary, img, url, date }) => {
  const formattedDate = date.toDateString();

  return (
    <div className="p-4 md:w-1/3">
      <div className="border-gray-200 h-full overflow-hidden rounded-lg border-2 border-opacity-60">
        <img
          className="w-full object-cover object-center md:h-36 lg:h-48"
          src={`${import.meta.env.BASE_URL}${img}`}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="title-font text-gray-900 mb-3 text-2xl font-medium">
            {title}
          </h2>
          <h2 className="title-font mb-2 w-fit bg-indigo-700 p-1 text-sm font-normal text-slate-200">
            {formattedDate}
          </h2>
          <p className="mb-3 leading-relaxed">{summary}</p>
          <div className="flex flex-wrap items-center">
            <a
              href={`${import.meta.env.BASE_URL}${url}`}
              className="inline-flex items-center font-bold text-indigo-500 md:mb-2 lg:mb-0"
            >
              Learn More
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
