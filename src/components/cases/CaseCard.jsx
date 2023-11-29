const CaseCard = ({ caseData }) => {
  const { title, description, tags, caseImage, slug } = caseData.fields;

  console.log(caseData);

  const bgImg = caseImage.fields.file.url;

  const caseUrl = import.meta.env.HOME_URL + `/cases/${slug}`;

  return (
    <a
      className=" flex-[0_1_384px] cursor-pointer lg:max-w-sm lg:flex-[1_0_25%]"
      href={caseUrl}
    >
      <div className="group relative flex aspect-[3/5] items-end overflow-hidden rounded-2xl  ">
        <div
          style={{ '--image-url': `url(${bgImg})` }}
          id="imgContainer"
          className=" absolute left-0 top-0 h-full w-full bg-[image:var(--image-url)] bg-cover bg-center transition-all duration-500 ease-in-out group-hover:scale-[1.08]"
        />
        <div
          id="darkCover"
          className=" absolute left-0 top-0 h-full w-full bg-gradient-to-b from-alpha/0 to-alpha/20 "
        />
        <div className="z-10 flex h-[50%] w-full flex-col justify-end bg-gradient-to-b from-alpha/0 to-alpha/[90] p-6">
          <h2 className="z-10 mb-3 text-3xl font-bold uppercase text-white">
            {title}
          </h2>
          <p className="z-10 mb-4 text-sm text-white">{description}</p>
          <div id="tagContainer" className="flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <div
                key={index}
                className="w-max rounded-md border-[1px] border-white px-2 py-1"
              >
                <p className="text-[0.6rem] uppercase text-white">{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default CaseCard;
