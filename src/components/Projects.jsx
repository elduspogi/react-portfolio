const Projects = () => {
  return (
    <section className="projects pages pt-5 pb-5">
        <div className="container d-flex justify-content-center align-items-center pt-5 mb-3">
            <div className="text-center">
                <h1>Projects</h1>
                <p>Here are some of the projects I made</p>  
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mb-3">
                    <div className="project-card">
                        <div className="header">
                            <h3>OCRVault</h3>
                            <p>A Document Management System Integrating Optical Character Recognition</p>                            
                        </div>

                        <div className="text-end">
                            <a href="#">
                                Visit Repo <i className="bi bi-arrow-right"></i>
                            </a>                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-3">
                    <div className="project-card">
                        <div className="header">
                            <h3>Deeco Electronics</h3>
                            <p>An E-Commerce Platform for Deeco Electronics.</p>                            
                        </div>

                        <div className="text-end">
                            <a href="#">
                                Visit Repo <i className="bi bi-arrow-right"></i>
                            </a>                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-3">
                    <div className="project-card">
                        <div className="header">
                            <h3>2048</h3>
                            <p>A Simple 2048 Game using Vanilla Javascript.</p>                            
                        </div>

                        <div className="text-end">
                            <a href="#">
                                Visit Repo <i className="bi bi-arrow-right"></i>
                            </a>                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects
