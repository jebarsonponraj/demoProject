import React, { useState, useEffect } from "react";
import Nav from "../Template/Nav";
import Hero from "../Template/Hero";
import Demo from "../Template/Demo";

const About = () => {
    const [htmlContent, setHtmlContent] = useState("");
    const [navSection, setNavSection] = useState([]);
    const [heroSection, setHeroSection] = useState({});
    const [heroImage, setHeroImage] = useState("");
    const [CaseStudies, setCaseStudies] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [CTASection, setCTASection] = useState([]);
    const [ AdditionalInfoSection, setAdditionalInfoSection] = useState([]);
   
    
    const [footerSection, setFooterSection] = useState({});

    const [localStorageItem, setLocalStorageItem] = useState({});

    // Use useEffect to fetch the item from localStorage when the component mounts
    let parsedData;
    useEffect(() => {
        const item = localStorage.getItem("generatedText");
        setLocalStorageItem(item);

        try {
            parsedData = JSON.parse(item);
            setNavSection(parsedData.NavSection);
            setHeroSection(parsedData.HeroSection);
            setHeroImage(parsedData.Images);
            setCaseStudies(parsedData.SocialProofSection.CaseStudies)
            setTestimonials(parsedData.SocialProofSection?.Testimonials);
            setAdditionalInfoSection(parsedData.AdditionalInfoSection);
            
            setCTASection(parsedData.CTASection)
            setFooterSection(parsedData.FooterSection)
        } catch (error) {
            // Handle the error, e.g., log it or set a default value
            console.error("Error parsing JSON:", error);
            // Set a default value or handle the data in some way
            parsedData = {};
        }

        console.log("Parsed Data:", parsedData);
    }, []); // The empty dependency array ensures this effect runs only once

    console.log(localStorageItem);

    // useEffect(() => {
    //     // Fetch your HTML file from the server or use any method to load the HTML content
    //     fetch("/demo.html")
    //         .then((response) => response.text())
    //         .then((data) => {
    //             // Replace placeholders in the HTML content with values from localStorage
    //             const replacedHtmlContent = data
    //                 .replace("{Logo}", parsedData.NavSection?.Logo)
    //                 .replace("{home}", parsedData.NavSection?.NavLinks[0])
    //                 .replace("{about}", parsedData.NavSection?.NavLinks[1])
    //                 .replace("{contact}", parsedData.NavSection?.NavLinks[2])
    //                 .replace("{heroHeading}", parsedData.HeroSection?.Headline)
    //                 .replace(
    //                     "{heroDescription}",
    //                     parsedData.HeroSection?.SubHeader
    //                 )
    //                 .replace("{Feature1}", parsedData.ProductFeature?.Feature1)
    //                 .replace(
    //                     "{Feature1Body}",
    //                     parsedData.ProductFeature?.Feature1Body
    //                 )
    //                 .replace("{Feature2}", parsedData.ProductFeature?.Feature2)
    //                 .replace(
    //                     "{Feature2Body}",
    //                     parsedData.ProductFeature?.Feature2Body
    //                 )
    //                 .replace("{Feature3}", parsedData.ProductFeature?.Feature3)
    //                 .replace(
    //                     "{Feature3Body}",
    //                     parsedData.ProductFeature?.Feature3Body
    //                 )
    //                 .replace(
    //                     "{Review1}",
    //                     parsedData.SocialProofSection?.Testimonials[0].Review
    //                 )
    //                 .replace(
    //                     "{Review1Name}",
    //                     parsedData.SocialProofSection?.Testimonials[0].Name
    //                 )
    //                 .replace(
    //                     "{Review2}",
    //                     parsedData.SocialProofSection?.Testimonials[1].Review
    //                 )
    //                 .replace(
    //                     "{Review2Name}",
    //                     parsedData.SocialProofSection?.Testimonials[1].Name
    //                 )
    //                 .replace(
    //                     "{contact}",
    //                     parsedData.FooterSection?.ContactInformation
    //                 )
    //                 .replace(
    //                     "{AdditionalResources1}",
    //                     parsedData.FooterSection?.AdditionalResources[0]
    //                 )
    //                 .replace(
    //                     "{AdditionalResources2}",
    //                     parsedData.FooterSection?.AdditionalResources[1]
    //                 )
    //                 .replace(
    //                     "{AdditionalResources3}",
    //                     parsedData.FooterSection?.AdditionalResources[2]
    //                 )
    //                 .replace("{backgroundImage}", parsedData.Images.BackgroundImage)

    //             setHtmlContent(replacedHtmlContent);
    //         });
    // }, []);

    console.log("htmlContent", htmlContent);
    return (
        /* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */
        /* <div className='text-gray-50'>{localStorageItem}</div> */
        /* <Nav NavLinks={navSection}/> */
        <div className="text-gray-50">
            <Demo
                navSection={navSection}
                heroSection={heroSection}
                heroImage={heroImage}
                testimonials={testimonials}
                CaseStudies={CaseStudies}
                CTASection={CTASection}
                AdditionalInfoSection={AdditionalInfoSection}
                footerSection={footerSection}
            />
        </div>
    );
};

export default About;
