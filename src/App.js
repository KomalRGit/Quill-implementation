import { useState } from "react";
import "./App.css";
import { BlogPost } from "./BlogPost";

const App = () => {
  if (localStorage.getItem("blogPost") === null) {
    localStorage.setItem("blogPost", "[]");
  }
  const [isCreate, setIsCreate] = useState(false);
  const [value, setValue] = useState("");
  const [blogs, setBlogs] = useState(
    JSON.parse(localStorage.getItem("blogPost"))
  );

  const onAddBlog = () => {
    setBlogs([...blogs, value]);
    localStorage.setItem("blogPost", JSON.stringify([...blogs, value]));
    setValue("");
    setIsCreate(false);
  };
  const imgMaker = (origString) => {
    const indexPosition = origString.indexOf("src");
    console.log(indexPosition);
    const stringToAdd = 'width="250px"';
    origString = origString.split("");
    origString.splice(indexPosition, 0, stringToAdd);
    return origString.join("");
  };
  return (
    <div className="container">
      <h3>Quill text editor with React!</h3>
      <button className="post-btn" onClick={() => setIsCreate(!isCreate)}>
        Create Blog
      </button>
      {isCreate && (
        <>
          <div className="container__quill-editor">
            <BlogPost value={value} setValue={setValue} />
          </div>
          <button className="post-btn" onClick={onAddBlog}>
            Post Your Blog
          </button>
        </>
      )}
      {blogs.map((blog) =>
        blog.includes("src") ? (
          <td key={blog} dangerouslySetInnerHTML={{ __html: imgMaker(blog) }} />
        ) : (
          <td key={blog} dangerouslySetInnerHTML={{ __html: blog }} />
        )
      )}
    </div>
  );
};

export default App;
