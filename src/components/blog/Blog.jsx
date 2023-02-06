import React from "react";
import { blogImgOne, blogImgTwo, blogImgThree } from "../../assets";
import Title from "../home/Title";
import BlogCard from "./BlogCard";

const leftBlogs = [
  {
    id: 1,
    image: blogImgOne,
    title: "September 16, 2020",
    subTitle: "UI & UX Conference at Lviv 2022",
    category: "Travel",
  },
  {
    id: 2,
    image: blogImgTwo,
    title: "July 15, 2020",
    subTitle: "UI & UX Conference at Lviv 2022",
    category: "Travel",
  },
  {
    id: 3,
    image: blogImgThree,
    title: "September 16, 2020",
    subTitle: "UI & UX Conference at Lviv 2022",
    category: "Travel",
  },
  {
    id: 4,
    image: blogImgOne,
    title: "September 16, 2020",
    subTitle: "UI & UX Conference at Lviv 2022",
    category: "Travel",
  },
];

const rightBlogs = [
  {
    id: 1,
    image: blogImgOne,
    title: "September 16, 2020",
    subTitle: "UI & UX Conference at Lviv 2022",
    category: "Travel",
  },
  {
    id: 2,
    image: blogImgTwo,
    title: "September 16, 2020",
    subTitle: "UI & UX Conference at Lviv 2022",
    category: "Travel",
  },
  {
    id: 3,
    image: blogImgThree,
    title: "September 16, 2020",
    subTitle: "UI & UX Conference at Lviv 2022",
    category: "Travel",
  },
  {
    id: 4,
    image: blogImgOne,
    title: "September 16, 2020",
    subTitle: "UI & UX Conference at Lviv 2022",
    category: "Travel",
  },
];

const Blog = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Posts" />
      <div className="grid grid-cols-2 gap-10">
        <div className="px-6">
          {leftBlogs.map((blog) => (
            <BlogCard
              image={blog.image}
              title={blog.title}
              subTitle={blog.subTitle}
              category={blog.category}
              key={blog.id}
            />
          ))}
        </div>
        <div className="px-6">
          {rightBlogs.map((blog) => (
            <BlogCard
              image={blog.image}
              title={blog.title}
              subTitle={blog.subTitle}
              category={blog.category}
              key={blog.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
