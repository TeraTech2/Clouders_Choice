import React, { useContext } from 'react'
import { ThemeContext } from '../context/Theme';

const BlogTemplete = ({ BlogData, className }) => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`${className} blog-template theme-${theme}`}>

      <div className="w-100 introHeading">
        <h4>{BlogData?.introHeading}</h4>
        <p className='introDesc text-justify'>
          {BlogData?.intro}
        </p>
      </div>

      <div className="mt-3 px-2 blog_content row align-items-start">
        <div className="main-content col-xs-12 col-md-12 col-lg-12">
          {
            BlogData.data.map(data => {
              return <div className="item mb-4" id={`${data.title}`}>
                <h6 className="fw-bolder side-heading">{data?.title}</h6>
                <p className="content text-justify">
                  {data?.desc}
                </p>
              </div>
            })
          }
        </div>

        {/* <aside className="d-none d-md-block side-navigation col-md-4 col-lg-3 mx-auto">
          <h4 className='text-center pt-3'>Contents</h4>
          <hr />
          <div className="side-navigation-links mt-2">
            {
              BlogData.data.map(data => {
                return <p>
                  <a href={`#${data.title}`}>{data.title}</a>
                </p>
              })
            }
          </div>
        </aside> */}
      </div>

    </div>
  )
}

export default BlogTemplete