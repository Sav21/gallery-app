const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid container d-flex flex-wrap justify-content-center">
        <a
          className="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
          href="/"
        >
          All Galleries
        </a>
        <div className="nav">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/signin">
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
//   <header class="p-3 text-bg-dark">
//   <div class="container">
//     <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//       <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
//         <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
//       </a>

//       <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//         <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
//         <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
//         <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
//         <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
//         <li><a href="#" class="nav-link px-2 text-white">About</a></li>
//       </ul>

//       <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
//         <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
//       </form>

//       <div class="text-end">
//         <button type="button" class="btn btn-outline-light me-2">Login</button>
//         <button type="button" class="btn btn-warning">Sign-up</button>
//       </div>
//     </div>
//   </div>
// </header>
  );
};

export default Navbar;
