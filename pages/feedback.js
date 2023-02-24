import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import Feedback from '@/components/Common/Feedback'; 

 
const FeedbackPage = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle='Feedback or Testimonials' />

            <Feedback />

            <Footer />
        </>
    )
}

export default FeedbackPage;