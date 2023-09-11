import heroPic from "../../assets/hero-example.png";

const Demo = ({ navSection, heroSection, heroImage ,CaseStudies,AdditionalInfoSection,testimonials,CTASection, footerSection}) => {
  if (!navSection || !navSection.NavLinks) {
    // Handle the case where NavLinks is not defined.
    return null; // Or any other appropriate action
  }
  return (
    <div data-theme="cupcake">
      <nav className="flex max-sm:px-4 justify-between items-center bg-base-300">
        <h1 className="lg:ml-16 text-lg font-semibold">{navSection.Logo}</h1>
        <ul className="flex gap-8 p-5 lg:mr-16">
          {navSection.NavLinks.map((link) => (
            <li key={link}>
              <a>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <section className=" flex lg:pt-5 lg:mx-16 flex-wrap-reverse justify-center items-center">
        <div className="flex-col  lg:mt-24 lg:w-[61%] lg:gap-2 max-sm:w-full max-sm:p-4">
          <h1 className="hero-text lg:text-[3.7rem] max-sm:text-[2.5rem] font-medium lg:leading-[3.5rem] max-sm:leading-[3rem] mb-7">
            {heroSection.Headline}
          </h1>
          <p className="hero-description break-normal lg:w-[70%] mb-5 text-[1rem]">
            {heroSection.SubHeader}
          </p>
          <div className="flex max-sm:justify-center pb-7">
            <button className="bg-base-300 hover:bg-base-200  font-bold py-4 px-7 max-sm:w-full rounded  ">
              {heroSection.CTA}
            </button>
          </div>
        </div>

        <div className="pt-4 max-sm:mx-4 relative lg:mr-10 lg:mb-32">
          <img
            className="w-[290px] h-[325px]  max-sm:h-96 object-cover "
            src={heroImage.BackgroundImage1}
            alt="This is a hero image"
          />

<img
            className="w-[282px] h-[235px]  max-sm:h-96 absolute translate-x-32 translate-y-12 bottom-0  object-cover"
            src={heroImage.BackgroundImage2}
            alt="This is a hero image"
          />
            <img
            className="w-full h-[235px]  max-sm:h-96 absolute -translate-x-24 bottom-0 translate-y-32 object-cover"
            src={heroImage.BackgroundImage3}
            alt="This is a hero image"
          />
        </div>
      </section>


      <section className="flex lg:p-8 lg:mt-7 max-sm:px-4 items-center justify-center max-sm:flex-wrap pb-7 gap-5">

<div className="relative">
    {/* Square Container */}

    <div className="w-48 h-48 bg-secondary rounded-3xl">

    </div>
    <div className="w-96 h-60 ">
      {/* Image */}
      <img
        src={heroPic} // Replace with your image URL
        alt="Your Image"
        className="absolute top-5 left-5 w-full h-full rounded-2xl object-cover"
      />
    </div>
  </div>
  <div className="flex-col lg:ml-16 lg:w-[61%] lg:px-4 max-sm:px-4 justify-center max-sm:pt-4">
    <h1 className="lg:text-[3rem] max-sm:text-[2rem] font-medium lg:leading-[3.5rem] max-sm:leading-[3rem]">{CaseStudies[0].Title}</h1>
    <p>{CaseStudies[0].Description}</p>
  </div>

 
</section>


{/* Feature */}
<section className="bg-base-200 py-7 max-sm:px-4 flex gap-12 flex-wrap justify-center">

<div className="bg-base-100 p-5 rounded-lg w-64 text-center">
<p className="font-semibold">{AdditionalInfoSection[0].Section1.Heading}</p>
<p >{AdditionalInfoSection[0].Section1.SectionBody}</p></div>

<div className="bg-primary p-5 rounded-lg w-64 text-center">
<p className="font-semibold">{AdditionalInfoSection[1].Section2.Heading}</p>
  
  <p>{AdditionalInfoSection[1].Section2.SectionBody}</p></div>


  <div className="bg-base-100 p-5 rounded-lg w-64 text-center">
  <p className="font-semibold">{AdditionalInfoSection[2].Section3.Heading}</p>
  
  <p>{AdditionalInfoSection[2].Section3.SectionBody}</p>

</div>


</section>



      <section className="flex lg:p-8 lg:mt-7 max-sm:px-4 items-center justify-center max-sm:flex-wrap pb-7 gap-5">
  <div className="flex-col lg:ml-16 lg:w-[61%] lg:px-4 max-sm:px-4 justify-center max-sm:pt-4">
    <h1 className="lg:text-[3rem] max-sm:text-[2rem] font-medium lg:leading-[3.5rem] max-sm:leading-[3rem]">{CaseStudies[1].Title}</h1>
    <p>{CaseStudies[1].Description}</p>
  </div>

  <div className="relative">
    {/* Square Container */}

    <div className="w-48 h-48 bg-primary rounded-3xl">

    </div>
    <div className="w-96 h-60 ">
      {/* Image */}
      <img
        src={heroPic} // Replace with your image URL
        alt="Your Image"
        className="absolute top-5 left-5 w-full h-full rounded-2xl object-cover"
      />
    </div>
  </div>
</section>






      <section className=" bg-base-200 flex lg:p-8 lg:mt-7 max-sm:px-4 items-center justify-center max-sm:flex-wrap pb-7 ">
        {/* //what they say */}

        <div className="flex-col lg:ml-16  lg:w-[61%] lg:px-4 max-sm:w-full max-sm:px-4 justify-center max-sm:pt-4">
          <h1 className="lg:text-[3rem] max-sm:text-[2rem] font-medium lg:leading-[3.5rem] max-sm:leading-[3rem] ">
            What they say about {navSection.Logo}
          </h1>
        </div>

        {/* // testimonials card */}

        <div className="flex-col lg:mx-16 lg:mt-7  bg-base-100 lg:w-[60%] lg:px-4 max-sm:w-full max-sm:px-4 max-sm:mt-5 p-4 rounded-md ">
          <h1 className=" ">
            "{testimonials[0].Review}"
          </h1>

          <div className="flex items-center pt-7 gap-3">
            <img
              className="w-[50px] h-[50px] rounded-full "
              src={heroPic}
              alt="This is a hero image"
            />

            <div><p>{testimonials[0].Name}</p>
            <p className="text-sm ">{testimonials[0].Designation}</p></div>
          </div>
        </div>
      </section>








      <section className="bg-base-100 lg:p-8 lg:mt-7 max-sm:px-4 text-center py-10 text-sm ">
        <p>{CTASection.SectionBody}</p>
        <h1 className="font-semibold text-5xl mt-5 max-sm:text-4xl">{CTASection.Headline}</h1>
        <button className="bg-base-300 px-4 py-3 rounded-md font-semibold mt-7 ">{CTASection.CTA}</button>
      </section>


      <footer className="bg-base-300 max-sm:px-4 pt-4 pb-7 flex justify-between items-center max-sm:flex-wrap ">

        <div> <h1 className="lg:mx-16 text-lg font-semibold">{navSection.Logo}</h1></div>




        <div className="" >
        <ul className="flex gap-12 pt-3 lg:mr-16 max-sm:flex-wrap">
        <li  className="grid col-span-1">
              <p>Address</p>
              <p>{footerSection.Address}</p>
              <p>{footerSection.MailId}</p>
              <p>{footerSection.ContactNumber}</p>
             
            </li>
            
          
            <ul  className="grid col-span-1">
                {footerSection.AdditionalResources.map((link) => (
                    <li key={link}>
                        <a>{link}</a>
                    </li>
                ))}
            </ul>

            <li  className="grid col-span-1">
              <a href={footerSection.SocialMediaLinks[0]}>FaceBook</a>
              <a href={footerSection.SocialMediaLinks[2]} >Twitter</a>
              <a href={footerSection.SocialMediaLinks[1]}>Instagram</a>
            </li>
       
        </ul>
        </div>

      </footer>
    </div>
  );
};

export default Demo;
