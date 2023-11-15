import React from 'react'

export const Gallery = () => {
  return (
    <div className="row my-3" id="galleryId">
      <div className="col-sm-3 img-hover-zoom img-hover-zoom--colorize">
        <img src={process.env.PUBLIC_URL + "/assets/images/common_files/no-image-available.jpg"} alt="" className="img-fluid p-5" />
      </div>
      <div className="col-sm-3 img-hover-zoom img-hover-zoom--colorize">
        <img src={process.env.PUBLIC_URL + "/assets/images/common_files/no-image-available.jpg"} alt="" className="img-fluid p-5" />
      </div>
      <div className="col-sm-3 img-hover-zoom img-hover-zoom--colorize">
        <img src={process.env.PUBLIC_URL + "/assets/images/common_files/no-image-available.jpg"} alt="" className="img-fluid p-5" />
      </div>
      <div className="col-sm-3 img-hover-zoom img-hover-zoom--colorize">
        <img src={process.env.PUBLIC_URL + "/assets/images/common_files/no-image-available.jpg"} alt="" className="img-fluid p-5" />
      </div>
    </div>
  )
}
