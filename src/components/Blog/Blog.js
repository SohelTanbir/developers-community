import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import FakeData from '../../FakeDate/Blogs'
import './Blog.css'

const Blog = () => {
    return (
        <div className="container">
             <h2 className="blogTitle">Programming Blogs</h2>
            {
            FakeData.map(blog => <BlogCard blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default Blog;