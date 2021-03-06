import React, { useState, useEffect } from "react";
import Fundation from "./Fundation";
import fundations from "../../Data/json/fundations.json";
import Pagination from "./Pagination";

const WeHelpFundations = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    setPosts([...fundations]);
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(posts);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div className="center--container fundations--container">
        {fundations.slice(indexOfFirstPost, indexOfLastPost).map((el) => {
          return (
            <Fundation
              organization="Fundacja"
              key={el.id}
              name={el.name}
              goal={el.goal}
              need={el.need}
              currentPage={currentPage}
            />
          );
        })}
        <Pagination
          paginate={paginate}
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
        />
      </div>
    </>
  );
};

export default WeHelpFundations;
