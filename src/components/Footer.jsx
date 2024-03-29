import React from 'react'

let bgFooter = {
  backgroundColor: '#6b533b',
  height: '10vh'
}


const Footer = () => {
  return (
    <>
  <div className="container-fluid border border-dark" style={bgFooter}>
  <footer className="d-flex flex-wrap justify-content-between align-items-center my-4">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"/></svg>
      </a>
      <span className="mb-3 mb-md-0 text-light">&copy; 2023 Budget, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"/></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"/></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"/></svg></a></li>
    </ul>
  </footer>
</div>
    </>
  )
}

export default Footer