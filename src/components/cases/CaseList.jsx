//Component Import
import CaseCard from './CaseCard.jsx';

const ArticleList = ({ cases, show }) => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {cases.items.map((caseData, index) => (
        <CaseCard key={index} caseData={caseData} />
      ))}
      {cases.items.map((caseData, index) => (
        <CaseCard key={index} caseData={caseData} />
      ))}
      {cases.items.map((caseData, index) => (
        <CaseCard key={index} caseData={caseData} />
      ))}
    </div>
  );
};

export default ArticleList;
