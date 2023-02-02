import React from 'react'

const BlogTemplete = ({ BlogData, className }) => {
  return (
    <div className={`mt-2 container-fluid ${className}`}>
      <div className="w-100">
        <h5 className='px-1 py-3 w-100 introHeading'>{BlogData?.introHeading}</h5>
        <p className='introDesc p-1 text-justify'>
          {BlogData?.intro}
        </p>
      </div>

      <hr />
      <div className="mt-3 blog_wrapper row align-items-start">
        <div className="main-content col-xs-10 col-md-7 col-lg-8">
          {
            BlogData.data.map(data => {
              return <>
                <a id={`${data.title}`} className="text-decoration-none">
                  <div className="item mb-4">
                    <h6 className="fw-bolder side-heading">{data?.title}</h6>
                    <p className="content text-justify">
                      {data?.desc}
                    </p>
                  </div>
                </a>
              </>
            })
          }
        </div>

        <aside className="d-none d-md-block bg-light side-navigation border col-md-4 col-lg-3 mx-auto">
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
        </aside>
      </div>
    </div>
  )
}

export default BlogTemplete