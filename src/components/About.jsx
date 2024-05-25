const About = () => {
  return (
    <section className="about pages">
        <div className="container d-flex justify-content-center align-items-center pt-5">
            <div className="text-center">
                <h1>About</h1>
                <p>Get to know more about me.</p>  
            </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-md-4 mb-3">
                    <img src="/face.png" className="img-fluid" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <p>
                                Hi, I am Aldus Alaiza,
                                a fourth year college student taking 
                                Bachelor of Science in Information Technology at
                                Polytechnic University of the Philippines - San Pedro Campus.
                            </p>
                            <p>
                                I am an aspiring Full Stack Developer based in Laguna, Philippines.
                            </p>
                            <p>I am primarily focused on Backend Development.</p>
                            <p>I like to share my knowledge to others.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
