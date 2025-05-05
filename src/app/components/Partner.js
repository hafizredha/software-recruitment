export default function Partner() {
    return (
        <section id="partner" className="bg-white position-relative pt-4 z-2">
            <div className="container text-center">
                <p id="text-partner" className="fw-bold mb-5">Who we work with</p>
                <div className="row justify-content-between gap-4 mb-4 align-items-center">
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <img src="/microsoft.png" alt="Microsoft" className="img-fluid" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <img src="/oracle.png" alt="Oracle" className="img-fluid" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <img src="/atlassian.png" alt="Atlassian" className="img-fluid" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <img src="/cloudflare.png" alt="Cloudflare" className="img-fluid" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <img src="/vmware.png" alt="Vmware" className="img-fluid" />
                    </div>
                </div>
            </div>
            <svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
                <path fill="#D7E7FB" d="M0,75  C120,105 240,45 360,75 C480,105 600,45 720,75 C840,105 960,45 1080,75 C1200,105 1320,45 1440,75 L1440,150 L0,150 Z" />
            </svg>
        </section>
    );
}