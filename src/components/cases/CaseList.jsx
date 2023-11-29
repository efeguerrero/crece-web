import { useState, useRef } from 'react';

//Component Import
import CaseCard from './CaseCard.jsx';

//Functions Import
//import postSort from './postSort.js';

const ArticleList = ({ cases, show, filters }) => {
  //const [featuredPosts, setFeaturedPosts] = useState(postSort(cases, show));
  //const [displayedPosts, setDisplayedPosts] = useState(featuredPosts);
  //const refInput = useRef(null);

  // const handleSearch = (e) => {
  //   e.preventDefault();

  //   const filteredPosts = featuredPosts.filter((post) => {
  //     return post.data.title
  //       .toLowerCase()
  //       .includes(refInput.current.value.toLowerCase());
  //   });

  //   setDisplayedPosts(filteredPosts);
  // };

  return (
    <>
      {/* Search box and other filters are only displayed if required */}
      {filters ? (
        <div className="searchBoxContainer mb-8">
          <form onSubmit={(e) => handleSearch(e)}>
            <input
              ref={refInput}
              type="text"
              name="search"
              id="searchInput"
              placeholder="Search..."
              className="searchBox mr-4"
            />
          </form>
        </div>
      ) : null}
      <div className="flex flex-wrap justify-center gap-8 md:px-16 lg:px-0">
        {cases.items.map((caseData, index) => (
          <CaseCard key={index} caseData={caseData} />
        ))}
      </div>
    </>
  );
};

export default ArticleList;
