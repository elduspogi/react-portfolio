const Footer = () => {
  return (
    <section className="footer pages p-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <h3>elduspogi69</h3>
                    <p>Your Not So Pogi But Napakalupet Na Developer</p>
                </div>
                <div className="col-md-3 mb-3">
                    <h3>Contact Me</h3>
                    <div className="row">
                        <div className="col-12">
                            <i className="bi bi-envelope"></i> <a href="">test@gmail.com</a>                            
                        </div>
                        <div className="col-12">
                            <i className="bi bi-phone"></i> +63 912312312                           
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <h3>Social Accounts</h3>
                    <div className="d-inline">
                        <a href="" className="m-3">
                        <i className="bi bi-facebook"></i>
                        </a>
                        <a href="" className="m-3">
                        <i className="bi bi-instagram"></i>
                        </a>
                        <a href="" className="m-3">
                        <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="" className="m-3">
                        <i className="bi bi-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
