'use client';

export default function Hero() {
  return (
    <section className="bg-blue h-75 position-relative overflow-hidden z-1">
        <svg className="position-absolute d-none d-lg-block" width="147" height="168" viewBox="0 0 147 168" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="23" r="145" fill="#F99D76"/>
        </svg>
        <div className="container">
            <div className="row align-items-center">
                <div className="p-3 col-lg-6 order-2 order-lg-1 mb-4 mb-lg-0 text-center text-lg-start">
                    <p className='text-light fs-6'>Software Recruitment Specialist</p>
                    <h1 id="hero-text" className="fw-bold mb-4 text-light">Elevate your <span id="pink-text">career</span></h1>
                    <div className="input-group search-button">
                        <input type="text" className="form-control px-3 py-2 px-md-4 py-md-3 fw-semibold" placeholder="E.g. Networking" />
                        <button className="org-button border-0 fw-semibold px-3 px-lg-5" type="button">Search jobs</button>
                    </div>
                </div>

                <div id="hero-img" className="p-3 p-lg-5 col-lg-6 order-1 order-lg-2 d-flex justify-content-center align-items-center">
                    <svg className="position-absolute z-1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g transform="translate(249.3796773063259 221.81353726299483)"><path d="M122.2 -140.1C155.7 -117.5 178.3 -76.5 180.6 -35.9C183 4.7 165.1 44.9 144.3 85.7C123.6 126.5 99.9 168 61.1 193C22.3 218 -31.6 226.5 -67.2 204.8C-102.9 183.1 -120.3 131.3 -141.8 85.8C-163.4 40.4 -189 1.3 -176.1 -24C-163.2 -49.2 -111.7 -60.5 -76 -82.7C-40.2 -104.9 -20.1 -137.9 12.1 -152.4C44.4 -166.9 88.7 -162.7 122.2 -140.1" fill="#FFD95A"></path></g></svg>
                    <img src="/hero-section-img.png" alt="Hero" className="position-relative z-2 img-fluid"/>
                </div>
            </div>
        </div>
        <svg className="position-absolute d-none d-lg-block bottom-0 end-0 z-n1 mb-3" width="240" viewBox="0 0 240 208" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="145" cy="145" r="145" fill="#FCDF69"/>
        </svg>
        <svg className="absolute bottom-0 w-full z-1" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M0,75 C120,45 240,105 360,75 C480,45 600,105 720,75 C840,45 960,105 1080,75 C1200,45 1320,105 1440,75 L1440,150 L0,150 Z" />
        </svg>
    </section>
  );
}
