

const Hero = ({HeroSection, HeroImage}) => {
  return (
    <div data-theme="cupcake"><div className="hero pt-12 bg-base-200 ">
    <div className="hero-content flex-col lg:flex-row">
      <img src={HeroImage} className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">{HeroSection.Headline}</h1>
        <p className="py-6">{HeroSection.SubHeader}</p>
        <button className="btn btn-primary bg-base-100">Get Started</button>
      </div>
    </div>



   
  </div> <div > <section  className="bg-base-200">
      <div className="container py-24 px-5 mx-auto max-w-7xl">
        <div className="space-y-4 text-center mb-20">
          <h3 className="font-medium text-primary text-center md:text-lg">Testimonals</h3>
          <h2 className="sm:text-4xl text-3xl font-medium text-base-content">
            Thrilled Students Share Korean Express Course Success Stories!
          </h2>
        </div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:gap-8 md:grid-cols-2 lg:max-w-none lg:grid-cols-4"
        >
          <li>
            <ul className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative h-full p-6 bg-base-100 rounded-lg">
                  <blockquote className="relative">
                    <p className="text-sm text-base-content/80">
                      "I can now communicate confidently with my Korean friends thanks to the best language learning
                      experience I've had."
                    </p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                    <div className="shrink-0 overflow-hidden rounded-full bg-base-300">
                      <img
                        className="object-cover object-center w-10 h-10 md:w-12 md:h-12 rounded-full"
                        alt="User"
                        width="48"
                        height="48"
                        style={{ aspectRatio: '1' }}
                        src="https://make-landing.s3.amazonaws.com/static/testimonial/1.png"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-base-content">Amanda Flour</div>
                      <div className="mt-1 text-sm text-base-content/80">Happiness Officer at Smile</div>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="relative h-full p-6 bg-base-100 rounded-lg">
                  <blockquote className="relative">
                    <p className="text-sm text-base-content/80">
                      "I never thought I could learn Korean so fast! Now I can speak with my Korean friends with
                      confidence."
                    </p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                    <div className="shrink-0 overflow-hidden rounded-full bg-base-300">
                      <img
                        className="object-cover object-center w-10 h-10 md:w-12 md:h-12 rounded-full"
                        alt="User"
                        width="48"
                        height="48"
                        style={{ aspectRatio: '1' }}
                        src="https://make-landing.s3.amazonaws.com/static/testimonial/2.png"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-base-content">Jose Bas</div>
                      <div className="mt-1 text-sm text-base-content/80">Marketer at Pear</div>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="relative h-full p-6 bg-base-100 rounded-lg">
                  <blockquote className="relative">
                    <p className="text-sm text-base-content/80">
                      "Thanks to Korean Express Cours, I can now confidently speak Korean with my friends and colleagues.
                      Highly recommended!"
                    </p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                    <div className="shrink-0 overflow-hidden rounded-full bg-base-300">
                      <img
                        className="object-cover object-center w-10 h-10 md:w-12 md:h-12 rounded-full"
                        alt="User"
                        width="48"
                        height="48"
                        style={{ aspectRatio: '1' }}
                        src="https://make-landing.s3.amazonaws.com/static/testimonial/3.png"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-base-content">Bryan Chess</div>
                      <div className="mt-1 text-sm text-base-content/80">Designer at Canvaz</div>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li className="hidden md:grid order-none md:order-first lg:order-none col-span-2 grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <ul className="col-span-2">
              <li>
                <figure className="relative h-full p-6 bg-base-100 rounded-lg">
                  <blockquote className="relative p-4">
                    <p className="text-lg font-medium text-base-content">
                      Korean Express Course made learning Korean easy and fun! The lessons were well-structured and the
                      instructors were knowledgeable and supportive. I highly recommend this course to anyone looking to
                      learn Korean quickly.
                    </p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                    <div className="shrink-0 overflow-hidden rounded-full bg-base-300">
                      <img
                        className="object-cover object-center w-10 h-10 md:w-12 md:h-12 rounded-full"
                        alt="User"
                        width="48"
                        height="48"
                        style={{ aspectRatio: '1' }}
                        src="https://make-landing.s3.amazonaws.com/static/testimonial/11.png"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-base-content">Marc Lou</div>
                      <div className="mt-1 text-sm text-base-content/80">Founder</div>
                    </div>
                    <div className="ml-auto flex items-center gap-x-1">
                      <div className="w-8 h-8 inline-flex items-center justify-center rounded-full text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                          />
                        </svg>
                      </div>
                      <div className="text-lg font-medium text-primary">KoreanWorks.</div>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative h-full p-6 bg-base-100 rounded-lg">
                  <blockquote className="relative">
                    <p className="text-sm text-base-content/80">
                      "I'm amazed at how fast I learned Korean. The course was easy to follow and fun!"
                    </p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                    <div className="shrink-0 overflow-hidden rounded-full bg-base-300">
                      <img
                        className="object-cover object-center w-10 h-10 md:w-12 md:h-12 rounded-full"
                        alt="User"
                        width="48"
                        height="48"
                        style={{ aspectRatio: '1' }}
                        src="https://make-landing.s3.amazonaws.com/static/testimonial/4.png"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-base-content">Meryl Streep</div>
                      <div className="mt-1 text-sm text-base-content/80">CEO at Academy Awards</div>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="relative h-full p-6 bg-base-100 rounded-lg">
                  <blockquote className="relative">
                    <p className="text-sm text-base-content/80">
                      "I never thought I could learn Korean so fast! Korean Express Coures made it easy and fun!"
                    </p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                    <div className="shrink-0 overflow-hidden rounded-full bg-base-300">
                      <img
                        className="object-cover object-center w-10 h-10 md:w-12 md:h-12 rounded-full"
                        alt="User"
                        width="48"
                        height="48"
                        style={{ aspectRatio: '1' }}
                        src="https://make-landing.s3.amazonaws.com/static/testimonial/5.png"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-base-content">Irina Svatz</div>
                      <div className="mt-1 text-sm text-base-content/80">Communication at SpeakEasy</div>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative h-full p-6 bg-base-100 rounded-lg">
                  <blockquote className="relative">
                    <p className="text-sm text-base-content/80">
                      "I never thought I could learn Korean so fast! Now I can speak with my Korean friends confidently."
                    </p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                    <div className="shrink-0 overflow-hidden rounded-full bg-base-300">
                      <img
                        className="object-cover object-center w-10 h-10 md:w-12 md:h-12 rounded-full"
                        alt="User"
                        width="48"
                        height="48"
                        style={{ aspectRatio: '1' }}
                        src="https://make-landing.s3.amazonaws.com/static/testimonial/6.png"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-base-content">Kadek Gede</div>
                      <div className="mt-1 text-sm text-base-content/80">Manager at Nasi Inc.</div>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="relative h-full p-6 bg-base-100 rounded-lg">
                  <blockquote className="relative">
                    <p className="text-sm text-base-content/80">
                      "I never thought I could learn Korean so fast! Korean Express Course made it easy and enjoyable."
                    </p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                    <div className="shrink-0 overflow-hidden rounded-full bg-base-300">
                      <img
                        className="object-cover object-center w-10 h-10 md:w-12 md:h-12 rounded-full"
                        alt="User"
                        width="48"
                        height="48"
                        style={{ aspectRatio: '1' }}
                        src="https://make-landing.s3.amazonaws.com/static/testimonial/7.png"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-base-content">Sophie Lou</div>
                      <div className="mt-1 text-sm text-base-content/80">HR at FitForce</div>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative h-full p-6 bg-base-100 rounded-lg">
                  <blockquote className="relative">
                    <p className="text-sm text-base-content/80">
                      "I can now confidently speak Korean thanks to this amazing course. Highly recommend to anyone wanting
                      to learn!"
                    </p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                    <div className="shrink-0 overflow-hidden rounded-full bg-base-100">
                      <img
                        className="object-cover object-center w-10 h-10 md:w-12 md:h-12 rounded-full"
                        alt="User"
                        width="48"
                        height="48"
                        style={{ aspectRatio: '1' }}
                        src="https://make-landing.s3.amazonaws.com/static/testimonial/8.png"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-base-content">Maxime Roux</div>
                      <div className="mt-1 text-sm text-base-content/80">Investor at Smile</div>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="relative h-full p-6 bg-base-100 rounded-lg">
                  <blockquote className="relative">
                    <p className="text-sm text-base-content/80">
                      "Thanks to Korean Express Course, I can now confidently speak Korean with ease. Highly recommended!"
                    </p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                    <div className="shrink-0 overflow-hidden rounded-full bg-base-300">
                      <img
                        className="object-cover object-center w-10 h-10 md:w-12 md:h-12 rounded-full"
                        alt="User"
                        width="48"
                        height="48"
                        style={{ aspectRatio: '1' }}
                        src="https://make-landing.s3.amazonaws.com/static/testimonial/9.png"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-base-content">Fleury Simon</div>
                      <div className="mt-1 text-sm text-base-content/80">Stylist at Pear</div>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="relative h-full p-6 bg-base-100 rounded-lg">
                  <blockquote className="relative">
                    <p className="text-sm text-base-content/80">
                      "Thanks to Korean Express Course, I can now confidently communicate with my Korean friends. Highly
                      recommend!"
                    </p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                    <div className="shrink-0 overflow-hidden rounded-full bg-base-300">
                      <img
                        className="object-cover object-center w-10 h-10 md:w-12 md:h-12 rounded-full"
                        alt="User"
                        width="48"
                        height="48"
                        style={{ aspectRatio: '1' }}
                        src="https://make-landing.s3.amazonaws.com/static/testimonial/10.png"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-base-content">Tina Truong</div>
                      <div className="mt-1 text-sm text-base-content/80">Copywriter at Canvaz</div>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section></div></div>
  )
}

export default Hero