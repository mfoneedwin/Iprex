import React from 'react'
import Navbar from '@/components/_App/Navbar'
import Footer from '@/components/_App/Footer'
import PageBanner from '@/components/Common/PageBanner'
import * as Icon from 'react-feather'
import Link from 'next/link'

const Blog1 = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle='Blog Grid' />

            <div className='blog-area ptb-80'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-4 col-md-6'>
                            <div className='single-blog-post'>
                                <div className='blog-image'>
                                    <Link href='/blog-details'>
                                        <img
                                            src='/images/blog-image/blog1.jpg'
                                            alt='image'
                                        />
                                    </Link>

                                    <div className='date text-white'>
                                        <Icon.Calendar /> March 15, 2022
                                    </div>
                                </div>

                                <div className='blog-post-content'>
                                    <h3>
                                        <Link href='/blog-details'>
                                            The Security Risks of Changing
                                            Package Owners
                                        </Link>
                                    </h3>

                                    <span>
                                        By <Link href='#'>Admin</Link>
                                    </span>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Quis ipsum suspendisse ultrices
                                        gravida.
                                    </p>

                                    <Link
                                        href='/blog-details'
                                        className='read-more-btn'
                                    >
                                        Read More <Icon.ArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6'>
                            <div className='single-blog-post'>
                                <div className='blog-image'>
                                    <Link href='/blog-details'>
                                        <img
                                            src='/images/blog-image/blog2.jpg'
                                            alt='image'
                                        />
                                    </Link>

                                    <div className='date text-white'>
                                        <Icon.Calendar /> March 17, 2022
                                    </div>
                                </div>

                                <div className='blog-post-content'>
                                    <h3>
                                        <Link href='/blog-details'>
                                            Tips to Protecting Your Business and
                                            Family
                                        </Link>
                                    </h3>

                                    <span>
                                        By <Link href='#'>Smith</Link>
                                    </span>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Quis ipsum suspendisse ultrices
                                        gravida.
                                    </p>

                                    <Link
                                        href='/blog-details'
                                        className='read-more-btn'
                                    >
                                        Read More <Icon.ArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6'>
                            <div className='single-blog-post'>
                                <div className='blog-image'>
                                    <Link href='/blog-details'>
                                        <img
                                            src='/images/blog-image/blog3.jpg'
                                            alt='image'
                                        />
                                    </Link>

                                    <div className='date text-white'>
                                        <Icon.Calendar /> March 19, 2022
                                    </div>
                                </div>

                                <div className='blog-post-content'>
                                    <h3>
                                        <Link href='/blog-details'>
                                            Protect Your Workplace from Cyber
                                            Attacks
                                        </Link>
                                    </h3>

                                    <span>
                                        By <Link href='#'>John</Link>
                                    </span>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Quis ipsum suspendisse ultrices
                                        gravida.
                                    </p>

                                    <Link
                                        href='/blog-details'
                                        className='read-more-btn'
                                    >
                                        Read More <Icon.ArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6'>
                            <div className='single-blog-post'>
                                <div className='blog-image'>
                                    <Link href='/blog-details'>
                                        <img
                                            src='/images/blog-image/blog4.jpg'
                                            alt='image'
                                        />
                                    </Link>

                                    <div className='date text-white'>
                                        <Icon.Calendar /> March 15, 2022
                                    </div>
                                </div>

                                <div className='blog-post-content'>
                                    <h3>
                                        <Link href='/blog-details'>
                                            Here are the 5 most telling signs of
                                            micromanagement
                                        </Link>
                                    </h3>

                                    <span>
                                        By <Link href='#'>Admin</Link>
                                    </span>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Quis ipsum suspendisse ultrices
                                        gravida.
                                    </p>

                                    <Link
                                        href='/blog-details'
                                        className='read-more-btn'
                                    >
                                        Read More <Icon.ArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6'>
                            <div className='single-blog-post'>
                                <div className='blog-image'>
                                    <Link href='/blog-details'>
                                        <img
                                            src='/images/blog-image/blog5.jpg'
                                            alt='image'
                                        />
                                    </Link>

                                    <div className='date text-white'>
                                        <Icon.Calendar /> March 17, 2022
                                    </div>
                                </div>

                                <div className='blog-post-content'>
                                    <h3>
                                        <Link href='/blog-details'>
                                            I Used The Web For A Day On A 50 MB
                                            Budget
                                        </Link>
                                    </h3>

                                    <span>
                                        By <Link href='#'>Smith</Link>
                                    </span>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Quis ipsum suspendisse ultrices
                                        gravida.
                                    </p>

                                    <Link
                                        href='/blog-details'
                                        className='read-more-btn'
                                    >
                                        Read More <Icon.ArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6'>
                            <div className='single-blog-post'>
                                <div className='blog-image'>
                                    <Link href='/blog-details'>
                                        <img
                                            src='/images/blog-image/blog6.jpg'
                                            alt='image'
                                        />
                                    </Link>

                                    <div className='date text-white'>
                                        <Icon.Calendar /> March 19, 2022
                                    </div>
                                </div>

                                <div className='blog-post-content'>
                                    <h3>
                                        <Link href='/blog-details'>
                                            Making Peace With The Feast Or
                                            Famine Of Freelancing
                                        </Link>
                                    </h3>

                                    <span>
                                        By <Link href='#'>John</Link>
                                    </span>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Quis ipsum suspendisse ultrices
                                        gravida.
                                    </p>

                                    <Link
                                        href='/blog-details'
                                        className='read-more-btn'
                                    >
                                        Read More <Icon.ArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Blog1
