import React, { useState } from "react";
import { blogs } from "../utils/blogs";

function Blog() {
  const [selBlog, setSelBlog] = useState("");
  return (
    <main className="edu">
      <section className="blog-header">
        <h3>Blogs</h3>
      </section>

      <h4>{blogs[0].title}</h4>

      <section className="main-entries">
        {blogs.map((ele) => {
          <h4>{ele.title}</h4>;
        })}
      </section>
    </main>
  );
}

export default Blog;
