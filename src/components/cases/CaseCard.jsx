const CaseCard = ({ title, summary, img, url, date }) => {
  const formattedDate = date.toDateString();

  return (
    <a className="cursor-pointer">
      <div className="group relative h-[30rem] w-full overflow-hidden rounded-2xl xl:h-[36rem] 3xl:h-[40rem]  ">
        <div
          id="imgContainer"
          className=" absolute left-0 top-0 h-full w-full bg-[url(https://images.pexels.com/photos/18024337/pexels-photo-18024337/free-photo-of-a-man-with-fire-in-blue-hour.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center transition-all duration-500 ease-in-out group-hover:scale-[1.2]"
        />
        <div
          id="darkCover"
          className=" absolute left-0 top-0 h-full w-full bg-gradient-to-b from-alpha/0 to-alpha/40"
        />
        <div className="z-10 flex h-full flex-col justify-end p-6">
          <h2 className="z-10 mb-3 text-3xl font-bold uppercase text-white">
            {title}
          </h2>
          {/* <h2 className="title-font mb-2 w-fit bg-indigo-700 p-1 text-sm font-normal text-slate-200">
            {formattedDate}
          </h2> */}
          <p className="z-10 text-white lg:text-sm">{summary}</p>
          {/* <div className="flex flex-wrap items-center">
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
          </div> */}
        </div>
      </div>
    </a>
  );
};

export default CaseCard;
