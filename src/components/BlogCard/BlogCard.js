import React from 'react';
import './BlogCard.css';

const BlogCard = (props) => {
    const {title, img, description} = props.blog;
    return (
            <div className="row">
                <div className="col-md-10 BlogCard px-2 mx-auto">
                    <img src={img} alt="img" />
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <button className="btn btn-danger">Read more</button>
                </div>
            </div>
    );
};

export default BlogCard;