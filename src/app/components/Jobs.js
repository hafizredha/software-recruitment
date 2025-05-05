'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Jobs() {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSwiper = (swiper) => {
        swiperRef.current = swiper;
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);

        swiper.on('slideChange', () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        });
    };

    const jobs = [
        {
          id: 1,
          title: 'Software Engineer',
          location: 'London',
          salary: '£65,000',
          description: 'Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.',
          postedDate: '29/8/2023',
          image: '/sectors.svg',
        },
        {
          id: 2,
          title: 'Software Engineer',
          location: 'Remote',
          salary: '£55,000',
          description: 'Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.',
          postedDate: '3/9/2023',
          image: '/sectors.svg',
        },
        {
          id: 3,
          title: 'DevOps Engineer',
          location: 'Manchester',
          salary: '£70,000',
          description: 'Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.',
          postedDate: '10/9/2023',
          image: '/sectors.svg',
        },
        {
          id: 4,
          title: 'Backend Developer',
          location: 'Bristol',
          salary: '£60,000',
          description: 'Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.',
          postedDate: '12/9/2023',
          image: '/sectors.svg',
        }
    ];

    return (
        <section className="jobs py-5">
            <div className='container'>
                <h1 id="job-text" className="text-center fw-bold pb-5">Latest Jobs</h1>
                <Swiper
                    spaceBetween={50}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        1400: {
                            slidesPerView: 3,
                        },
                    }}
                    onSwiper={handleSwiper}
                >
                    {jobs.map(job => (
                        <SwiperSlide key={job.id}>
                        <div className='d-flex flex-column gap-0 row-gap-2 p-5'>
                            <div>
                                <img src={job.image} alt={job.title} className="mb-3" />
                            </div>
                            <h3 className="fw-bold">{job.title}</h3>
                            <div>
                                <p>
                                    <span className='job-icons pe-3'>
                                        <svg viewBox="0 0 15 21" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.5 0.466675C3.63 0.466675 0.5 3.59667 0.5 7.46667C0.5 12.7167 7.5 20.4667 7.5 20.4667C7.5 20.4667 14.5 12.7167 14.5 7.46667C14.5 3.59667 11.37 0.466675 7.5 0.466675ZM7.5 9.96667C6.83696 9.96667 6.20107 9.70328 5.73223 9.23444C5.26339 8.7656 5 8.12972 5 7.46667C5 6.80363 5.26339 6.16775 5.73223 5.69891C6.20107 5.23007 6.83696 4.96667 7.5 4.96667C8.16304 4.96667 8.79893 5.23007 9.26777 5.69891C9.73661 6.16775 10 6.80363 10 7.46667C10 8.12972 9.73661 8.7656 9.26777 9.23444C8.79893 9.70328 8.16304 9.96667 7.5 9.96667Z"/>
                                        </svg>
                                    </span>
                                    {job.location}
                                </p>
                                <p>
                                    <span className='job-icons pe-3'>
                                        <svg viewBox="0 0 19 13" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.5 0.466675H18.5V12.4667H0.5V0.466675ZM9.5 3.46667C10.2956 3.46667 11.0587 3.78274 11.6213 4.34535C12.1839 4.90796 12.5 5.67103 12.5 6.46667C12.5 7.26232 12.1839 8.02539 11.6213 8.588C11.0587 9.1506 10.2956 9.46667 9.5 9.46667C8.70435 9.46667 7.94129 9.1506 7.37868 8.588C6.81607 8.02539 6.5 7.26232 6.5 6.46667C6.5 5.67103 6.81607 4.90796 7.37868 4.34535C7.94129 3.78274 8.70435 3.46667 9.5 3.46667ZM4.5 2.46667C4.5 2.99711 4.28929 3.50582 3.91421 3.88089C3.53914 4.25596 3.03043 4.46667 2.5 4.46667V8.46667C3.03043 8.46667 3.53914 8.67739 3.91421 9.05246C4.28929 9.42753 4.5 9.93624 4.5 10.4667H14.5C14.5 9.93624 14.7107 9.42753 15.0858 9.05246C15.4609 8.67739 15.9696 8.46667 16.5 8.46667V4.46667C15.9696 4.46667 15.4609 4.25596 15.0858 3.88089C14.7107 3.50582 14.5 2.99711 14.5 2.46667H4.5Z"/>
                                        </svg>
                                    </span>
                                    {job.salary}
                                </p>
                            </div>
                            <p>{job.description}</p>
                            <p className='text-center'>
                                <a href="#" className='link-underline link-underline-opacity-0 view-job-button'>
                                    View this job
                                </a>
                            </p>
                            <span className='job-date fw-light'>Posted on {job.postedDate}</span>
                        </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="job-page-btn flex gap-2 mt-4 justify-center">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className={`border border-0 bg-transparent ${isBeginning ? 'opacity-50 fade' : 'opacity-100 fade'}`}
                    >
                        <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M0.333313 17.5205C0.333313 26.7205 7.79998 34.1872 17 34.1872C26.2 34.1872 33.6667 26.7205 33.6667 17.5205C33.6667 8.32049 26.2 0.853821 17 0.853821C7.79998 0.853821 0.333313 8.32049 0.333313 17.5205ZM17 15.8538H23.6667V19.1872H17V24.1872L10.3333 17.5205L17 10.8538V15.8538Z" fill="#0E2152"/>
                        </svg>
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className={`border border-0 bg-transparent ${isEnd ? 'opacity-50 fade' : 'opacity-100 fade'}`}
                    >
                        <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M33.6667 17.5205C33.6667 8.32049 26.2 0.853821 17 0.853821C7.79998 0.853821 0.333313 8.32049 0.333313 17.5205C0.333313 26.7205 7.79998 34.1872 17 34.1872C26.2 34.1872 33.6667 26.7205 33.6667 17.5205ZM17 19.1872H10.3333V15.8538H17V10.8538L23.6667 17.5205L17 24.1872V19.1872Z" fill="#0E2152"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
