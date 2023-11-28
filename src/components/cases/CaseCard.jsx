const CaseCard = ({ title, summary, img, url, date }) => {
  return (
    <a className="cursor-pointer" href={url}>
      <div className="group relative flex aspect-[3/5] w-full max-w-sm items-end overflow-hidden rounded-2xl  ">
        <div
          id="imgContainer"
          className=" absolute left-0 top-0 h-full w-full bg-[url(https://images.pexels.com/photos/8944067/pexels-photo-8944067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center transition-all duration-500 ease-in-out group-hover:scale-[1.08]"
        />
        <div
          id="darkCover"
          className=" absolute left-0 top-0 h-full w-full bg-gradient-to-b from-alpha/0 to-alpha/20 "
        />
        <div className="z-10 flex h-[50%] flex-col justify-end bg-gradient-to-b from-alpha/0 to-alpha/[90] p-6">
          <h2 className="z-10 mb-3 text-3xl font-bold uppercase text-white">
            {title}
          </h2>
          <p className="z-10 mb-4 text-sm text-white">{summary}</p>
          <div id="tagContainer" className="flex flex-wrap gap-2">
            <div className="w-max rounded-md border-[1px] border-white px-2 py-1">
              <p className="text-[0.6rem] uppercase text-white">Website</p>
            </div>
            <div className="w-max rounded-md border-[1px] border-white px-2 py-1">
              <p className="text-[0.6rem] uppercase text-white">Campaign</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CaseCard;
