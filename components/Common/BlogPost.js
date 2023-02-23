import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'

const BlogPost = () => {
    return (
        <>
            <div className='blog-area pt-80 pb-50'>
                <div className='container'>
                    <div className='section-title'>
                        <h2>The News from Our Blog</h2>
                        <div className='bar'></div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>

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
                                        aliqua. Quis ipsum suspendisse.
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
                                        aliqua. Quis ipsum suspendisse.
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
                                        aliqua. Quis ipsum suspendisse.
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPost
