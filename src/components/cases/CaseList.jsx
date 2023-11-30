//Component Import
import CaseCard from './CaseCard.jsx';

const ArticleList = ({ cases, show }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:px-16 lg:px-0">
      {cases.items.map((caseData, index) => (
        <CaseCard key={index} caseData={caseData} />
      ))}
    </div>
  );
};

export default ArticleList;
