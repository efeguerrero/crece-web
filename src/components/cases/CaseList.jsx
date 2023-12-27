//Component Import
import CaseCard from './CaseCard.jsx';

const ArticleList = ({ cases, lang }) => {
  return (
    <div className=" grid grid-cols-[repeat(1,_minmax(0,_384px))] justify-items-stretch gap-8 sm:grid-cols-[repeat(2,_minmax(0,_360px))] lg:grid-cols-[repeat(3,_minmax(0,_320px))] 3xl:grid-cols-[repeat(3,_minmax(0,_384px))]">
      {cases.items.map((caseData, index) => (
        <CaseCard key={index} caseData={caseData} lang={lang} />
      ))}
    </div>
  );
};

export default ArticleList;
