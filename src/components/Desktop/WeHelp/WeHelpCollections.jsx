import React, { useState, useEffect } from "react";
import Fundation from "./Fundation";
import ngos from "../../Data/json/collects.json";
import Pagination from "./Pagination";

const WeHelpCollections = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    setPosts([...ngos]);
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(posts);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log(`posts: ${posts}`);
  return (
    <>
      <div className="center--container fundations--container">
        {ngos.slice(indexOfFirstPost, indexOfLastPost).map((el) => {
          return (
            <Fundation
              organization="Zbiórka"
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

export default WeHelpCollections;
