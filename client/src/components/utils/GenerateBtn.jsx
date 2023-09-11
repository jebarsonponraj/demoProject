"use client";
import { useState, useEffect } from "react";
import sparkles from "../../assets/sparkles.svg";
import { useNavigate } from "react-router-dom";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
});

const GenerateBtn = () => {
    const [generatedContent, setGeneratedContent] = useState("");
    const [userInput, setUserInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [backendResponse, setBackendResponse] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const navigate = useNavigate();

    // const handleGenerateFoodImage = async (userInput) => {
    //     try {
    //         // Generate a food-related image using DALL·E
    //         const response = await openai.images.generate({
    //             prompt: `Generate an image related to the prompt for the background image ${userInput} (replace    
    //                 ${userInput} with a relevant keyword)`,
    //             n: 1, // Number of images to generate (in this case, 1)
    //             size: "1024x1024", // Desired image size
    //         });
    
    //         // Extract the generated image URL from the response
    //         const dalleImageUrl = response.data[0].url;
    
    //         // Set the generated image URL in the component state
    //         setImageUrl(dalleImageUrl);
    //         console.log(dalleImageUrl);
    //     } catch (err) {
    //         // Handle any errors that may occur during image generation
    //         setError("Error generating food image. Please try again.");
    //     }
    // };
    

    const handleGenerateClick = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo-16k",
                messages: [
                  {
                    "role": "system",
                    "content": `You are a skilled content creator tasked with generating compelling content for a website's landing page. The website is for something [Type of Business] called "[Business Name]."
                    Your goal is to create engaging and informative content that captures the essence of the business and encourages visitors to take action.
                   
                   Write the copy for a website following this framework:
                   NavSection:
                     * Logo (Add a custom name based on user prompt)
                   * NavLinks (Add three custom nav links based on user prompt)
                   HeroSection
                     1. Headline (Headline should be minimum 8 words)
                     2. SubHeader (SubHeader should be minimum 20 words)
                     3. CTA: 
                   ProductFeature: (additional features and associated benefits)
                    Title: (Add a custom general product feature title based on productfeatures)
                      1. Feature1 
                            Feature1Body
                      2. Feature2
                            Feature2Body
                      3. Feature3
                            Feature3Body
                   ReinforcingStatement:
                   Here create four sections array based on the Navlinks the sections should have 
                     Title: (A short statement that maintains interest as visitors scroll down the page))
                     (A shortlist of major benefits for the product or service tailored to the target audience)
                     1. Benefit1
                        1. Heading
                        2. Benefit Body
                     2. Benefit2
                        1. Heading
                        2. Benefit Body
                    3. Benefit3
                        1. Heading
                        2. Benefit Body
                        HowItWorks :
                    Here create a how it works sections array based on the user prompt should have 
                      Title: (Add a custom general matching title based on How it works)
                        1. Section1
                            1. Heading
                            2. Section Body
                        2. Section2
                            1. Heading
                            2. Section Body
                        3. Section3
                            1. Heading
                            2. Section Body
                   CTASection: (Encourage the customer to take action with a clear call to action)
                      1. Headline
                      2. Section Body
                      3. CTA (Call-to-action)
                   SocialProofSection: (Include customer testimonials (in name of the customer also include their designation) and case studies to show the company’s credibility)
                   FooterSection: (Include contact information, links to social media, and additional resources)
                   ColorPalleteSection: (You should give the color palette for the website based on the user prompt )
                   Images: (Use three random images related to the prompt for the background image, generating it with the URL "https://source.unsplash.com/featured/2280x2880/?{description}" (replace {description} with a relevant keyword))
                   
                   For the given user prompt ${userInput}
                   
                   Remember always give the same heading and don’t change the heading of the sections
                   
                   Output this in json object with each section as a separate keys.
                   {
                    "NavSection": {
                       "Logo": "",
                       "NavLinks": [
                         "",
                         "",
                         ""    ]
                     },
                     "HeroSection": {
                       "Headline": "",
                       "SubHeader": "",
                       "CTA": ""
                     },
                     "ProductFeature": {
                       "Feature1": "",
                       "Feature1Body": "",
                       "Feature2": "",
                       "Feature2Body": "",
                       "Feature3": "",
                       "Feature3Body": ""
                     },
                     "AdditionalInfoSection": [
                       {
                         "Section1": {
                           "Heading": "",
                           "SectionBody": ""
                         }
                       },
                      {
                         "Section2": {
                           "Heading": "",
                           "SectionBody": ""
                         }
                       },
                       {
                         "Section3": {
                           "Heading": "",
                            "SectionBody": ""
                         }
                       }
                     ],
                     "CTASection": {
                       "Headline": "",
                       "SectionBody": "",
                       "CTA": ""
                     },
                     "SocialProofSection": {
                       "Testimonials": [
                         {
                           "Name": "",
                           "Review": "",
                           "Designation": ""
                         },
                         {
                           "Name": "",
                           "Review": "",
                           "Designation": ""
                         },
                         {
                            "Name": "",
                            "Review": "",
                            "Designation": ""
                         }
                       ]
                       "CaseStudies": [
                         {
                           "Title": "",
                           "Description": ""
                         },
                         {
                           "Title": "",
                           "Description": ""
                         }
                       ]
                     },
                     "FooterSection": {
                       "Address": "",
                       "MailId": "",
                       "ContactNumber": "",
                       "SocialMediaLinks": [
                         "",
                         "",
                         ""
                       ],
                       "AdditionalResources": [
                         "",
                         "",
                         ""
                       ]
                     },
                   ColorPallete:{
                      "PrimaryColor": "",
                      "SecondaryColor": ""
                   },
                   Images:{
                        "BackgroundImage1": "",
                        "BackgroundImage2": "",
                        "BackgroundImage3": ""
                   }
                   }`
            
                  },
                  {
                    "role": "user",
                    "content": `${userInput}`
                  }
                ],
                temperature: 1,
                max_tokens: 9905,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
              });
            
            // Extract the generated text from the API response
            const generatedText = response.choices[0].message.content;

        //   handleGenerateFoodImage(userInput);

            // const backendResonse = await fetch(
            //     "http://localhost:8080/api/content",
            //     {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //         body: JSON.stringify({ generatedText }),
            //     }
            // );

            const saveToLocalStorage = generatedText;

            localStorage.setItem("generatedText", saveToLocalStorage);
            // const contentData = await backendResonse.json();

            // setBackendResponse(contentData.message.generatedText);
            // console.log("This is from line 56", contentData.message);

            setGeneratedContent(generatedText);
            // console.log("This is from line 60",response.data);
            console.log(generatedText);
            navigate("/about", { replace: true });
        } catch (err) {
            setError("Error generating content. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const placeholderTexts = [
        "Create a professional website for my online business",
        "Make a landing page for my new product",
        "Create a portfolio website for my freelance business",
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [text, setText] = useState("");
    const typingSpeed = 100; // Typing speed in milliseconds

    useEffect(() => {
        let currentIndex = 0;
        let currentText = "";

        const typeText = () => {
            if (currentIndex < placeholderTexts[currentTextIndex].length) {
                currentText += placeholderTexts[currentTextIndex][currentIndex];
                setText(currentText);
                currentIndex++;
                setTimeout(typeText, typingSpeed);
            } else {
                setTimeout(() => {
                    currentIndex = 0;
                    currentText = "";
                    setCurrentTextIndex(
                        (prevIndex) => (prevIndex + 1) % placeholderTexts.length
                    );
                }, 2000); // Delay between greetings in milliseconds
            }
        };

        typeText();

        return () => {
            clearTimeout();
        };
    }, [currentTextIndex]);

    return (
        <div className=" lg:px-20 md:p-8">
            <div className="relative mt-7 md:mt-7   ">
                <div className=" absolute w-full h-full  blur opacity-20">
                    xx
                    {/* xxdd   intha txt main for bg */}
                </div>

                {/* ithula background gradient add pannanum */}

                <div className="w-full rounded-md bg-gradient-to-r from-[#DB569F] to-[#FEDA95]  p-[.13rem]">
                    <div className="relative block w-full  rounded-md  bg-[#2b2b2b] px-2 py-1 shadow-sm ">
                        <textarea
                            id="about"
                            name="about"
                            rows="8"
                            className="block w-full resize-none focus:outline-0 bg-[#2b2b2b] text-gray-50 "
                            placeholder={text}
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                        ></textarea>

                        <div className="mt-2 md:mt-3">
                            <button
                                type="submit"
                                onClick={handleGenerateClick}
                                className="flex items-center gap-1 justify-center w-full bg-gradient-to-r from-[#DB569F] to-[#FEDA95] text-white px-4 py-2 rounded-md font-semibold "
                            >
                                {isLoading ? "Generating..." : "Generate site"}

                                <img
                                    src={sparkles}
                                    width={20}
                                    height={10}
                                    className="pt-0"
                                    alt="logo of the sparkle"
                                />
                            </button>
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenerateBtn;