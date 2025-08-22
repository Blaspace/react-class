import { useState, useEffect } from "react";

const AllPosts = () => {
  const [posts, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading, posts]);

  return (
    <div className="post-con">
      <div className="post">
        {posts.map((value) => {
          return (
            <section>
              <p>
                <b>{value.title}</b>
              </p>
              <br />
              <p>{value.body}</p>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default AllPosts;
