import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";

import CTAForm from "../components/CTAForm";
import FloatingImageBox from "../components/FloatingImageBox";
import ImageBox from "../components/ImageBox";
import ListItemImageBox from "../components/ListItemImageBox";
import {
  blogData,
  floatingImageBoxData,
  imageBoxData,
  listItemImageBoxData,
} from "../data/data";

export default function Home() {
  return (
    <main>
      {/* first section */}
      <section className="min-h-svh relative flex items-center z-0 bg-[url(/images/home/first_section/hero_bg.webp)] bg-no-repeat bg-cover bg-bottom">
        {/* over lay */}
        <div className="absolute -z-[1] inset-0 w-full h-full bg-gradient-to-b from-gradient-from-blue/60 to-gradient-to-dark-blue/10"></div>
        <div className="absolute -z-[1] inset-0 w-full h-full bg-gradient-to-r from-gradient-from-dark-blue/90 via-83%  to-gradient-to-dark-blue/25"></div>

        {/* content */}
        <div className="container px-6 xl:px-0 max-w-7xl mx-auto relative z-10 h-full">
          <div className="flex flex-col items-start gap-y-6">
            <h1 className="text-white max-w-2xl">
              Scale up your Impact Investment
            </h1>
            <p className="text-white mb-4 text-b1">
              Impactable provides impact investing solutions at institutional
              scale
            </p>
            <Link className="btn-link" to={"#"}>
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
      {/* first section / */}

      {/* second section */}
      <section className="z-20 relative">
        <div className="container px-6 xl:px-0 max-w-7xl mx-auto -mt-[90px]">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
            {imageBoxData.map(({ imageUrl, imageAltText, description }) => (
              <ImageBox
                key={imageAltText}
                imageUrl={imageUrl}
                imageAltText={imageAltText}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>
      {/* second section / */}

      {/* third section */}
      <section className="py-[100px]">
        <div className="container px-6 xl:px-0 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-y-8  lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12">
            {/* content */}
            <div className="flex flex-col items-start gap-y-6 xl:gap-8">
              <h2 className="text-primary-blue">About Impactable</h2>
              <p className="text-b1 text-black">
                We are driven by the belief that investment can make a positive
                impact - without compromising returns:
              </p>
              <ul className="space-y-4">
                <li className="flex flex-row gap-x-4 items-start">
                  <span>
                    <IoIosCheckmarkCircleOutline className="size-6 text-primary-blue" />
                  </span>
                  <span className="flex flex-col gap-y-2.5">
                    <span className="text-b1 text-primary-blue">
                      Financial-First
                    </span>
                    <span className="text-b1 text-black">
                      We focus on investments that deliver competitive financial
                      returns.
                    </span>
                  </span>
                </li>
                <li className="flex flex-row gap-x-4 items-start">
                  <span>
                    <IoIosCheckmarkCircleOutline className="size-6 text-primary-blue" />
                  </span>
                  <span className="flex flex-col gap-y-2.5">
                    <span className="text-b1 text-primary-blue">Impact</span>
                    <span className="text-b1 text-black">
                      We integrate impact considerations into all our services
                      and investments.
                    </span>
                  </span>
                </li>
              </ul>
              <p className="text-b1 text-black">
                We are driven by the belief that investment can make a positive
                impact - without compromising returns:
              </p>
              <Link className="btn-link-outline" to={"#"}>
                Learn About Impactable
              </Link>
            </div>
            {/* image wrapper */}
            <div className="h-full  w-full order-first lg:order-last  lg:pl-10 xl:pl-20">
              <img
                className="h-full w-full object-cover object-left rounded-image"
                src="/images/home/third_section/impactable_about.webp"
                alt="Impactable"
              />
            </div>
          </div>
        </div>
      </section>
      {/* third section */}

      {/* fourth section */}
      <section className="py-[100px] bg-secondary-dark-blue relative z-0">
        <div className="absolute inset-0 w-full h-full bg-[url(/images/home/fourth_section/bg.png)] bg-no-repeat bg-left-bottom"></div>
        <div className="container relative z-10 px-6 xl:px-0 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-y-8  lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12">
            {/* image wrapper */}
            <div className="relative z-0 w-full min-h-[480px] lg:min-h-fit h-full">
              <div className="w-full -z-1 absolute inset-0 h-full">
                <div className="inset-0 absolute w-full h-full bg-overlay-blue/18 rounded-image"></div>
                <img
                  className="w-full h-full object-cover rounded-image"
                  src="/images/home/fourth_section/farmer.webp"
                  alt="farmer"
                />
              </div>
              <div className="absolute z-10 inset-0 -ml-2.5 w-full h-full">
                <div className="w-full h-full flex flex-col justify-end pb-10">
                  <ul className="space-y-6 lg:space-y-8">
                    {floatingImageBoxData.map((data) => (
                      <FloatingImageBox key={data.imageAltText} {...data} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* content area */}
            <div className="flex flex-col items-start gap-y-6 xl:gap-y-8">
              <div className="flex flex-col gap-y-4">
                <h2 className="text-white">What we do at high level</h2>
                <p className="text-b1 text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.
                </p>
              </div>
              <ul className="space-y-5 w-full">
                {listItemImageBoxData.map((data) => (
                  <ListItemImageBox key={data.title} {...data} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* fourth section / */}

      {/* fifth section */}
      <section className="py-[100px] bg-theme-gray">
        <div className="container relative z-10 px-6 xl:px-0 max-w-7xl mx-auto">
          <div className="flex flex-col gap-y-10">
            <h2 className="text-primary-blue">
              Capital growth that benefits people and planet
            </h2>
            <div className="flex flex-col gap-y-[100px]">
              {/* first row */}
              <div className="grid grid-cols-1 gap-y-8  relative  lg:gap-x-8 xl:gap-x-16 lg:grid-cols-[400px_1fr] xl:grid-cols-[435px_1fr]">
                {/* card */}
                <div className="lg:min-w-[400px]  xl:min-w-[435px] lg:max-w-[435px] z-0 h-full w-full min-h-full relative rounded-[20px] bg-primary-blue bg-[url(/images/home/fifth_section/card_1_bg.png)] bg-top bg-no-repeat bg-contain flex flex-col lg:justify-center xl:justify-start">
                  <div className="z-10 p-10 flex flex-col gap-y-8 items-center">
                    <div className="max-w-[270px] md:max-w-[300px] lg:max-w-[270px] w-full h-full">
                      <img
                        className="w-full h-full object-contain"
                        src="/images/home/fifth_section/investments.png"
                        alt="investments"
                      />
                    </div>
                    <div className="max-w-[325px] md:max-w-[400px] lg:max-w-[325px] lg:min-h-[347px] border-2 shadow-2xl shadow-[#0C0C0D66]/40% border-white w-full h-full overflow-clip">
                      <img
                        className="w-full !h-full lg:min-h-[347px] object-cover object-right-top"
                        src="/images/home/fifth_section/buildings.webp"
                        alt="buildings"
                      />
                    </div>
                  </div>
                </div>
                {/* content */}
                <div className="flex flex-col gap-y-6 xl:gap-y-8">
                  <p className="text-b2 text-secondary-medium-blue">
                    Impactable Investment
                  </p>
                  <h3 className="text-primary-blue font-bold">
                    Institutional scale Impact Investment
                  </h3>
                  <p className="text-b2 text-black">
                    Many institutional investors want to increase the
                    environmental and social impact of their portfolio, but
                    struggle to find investment opportunities – typically
                    because they are too small.
                  </p>
                  <p className="text-b2 text-black">
                    Impactable Investment Group is designing institutional scale
                    solutions to overcome these challenges. We believe that
                    investment aggregation is a helpful method for investors
                    seeking to access financial-first, private market impact
                    investments. This can benefit from lower risk through
                    diversification, lower costs through scale, and improved
                    return and impact through greater access.
                  </p>
                  <p className="text-b2 text-black">
                    Impactable is currently focused on private debt and private
                    equity investment opportunities in Emerging Markets (EM)
                    that generate significant returns, whilst also addressing
                    significant challenges for people at the bottom of the
                    pyramid.
                  </p>
                  <div className="my-3 xl:my-6">
                    <Link
                      className="text-base flex flex-row items-center gap-x-3 font-inter leading-[28px] tracking-tight font-semibold text-secondary-light-blue hover:text-secondary-medium-blue transition-colors duration-100"
                      to="#"
                    >
                      Learn More
                      <span className="transform -rotate-z-45">
                        <FaArrowRightLong className="size-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* second row */}
              <div className="grid grid-cols-1 gap-y-8  relative  lg:gap-x-8 xl:gap-x-16 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_435px]">
                {/* card */}
                <div className="lg:min-w-[400px] lg:min-h-[380px]  xl:min-w-[435px] lg:max-w-[435px] z-0 h-full w-full min-h-full relative rounded-[20px] bg-primary-gold bg-[url(/images/home/fifth_section/card_2_bg.png)] bg-top bg-no-repeat bg-contain flex flex-col lg:justify-center xl:justify-start">
                  <div className="z-10 p-10 lg:pb-12  h-full flex flex-col gap-y-8 items-center">
                    <div className="max-w-[270px] md:max-w-[300px] lg:max-w-[270px] w-full">
                      <img
                        className="w-full h-full object-contain"
                        src="/images/home/fifth_section/investment_network.png"
                        alt="investment network"
                      />
                    </div>
                    <div className="max-w-[325px] md:max-w-[400px] lg:max-w-[325px] lg:min-h-[347px] border-2 border-white shadow-2xl shadow-[#0C0C0D66]/40% w-full h-full overflow-clip">
                      <img
                        className="w-full !h-full lg:min-h-[347px] object-cover object-center"
                        src="/images/home/fifth_section/team.webp"
                        alt="team"
                      />
                    </div>
                  </div>
                </div>
                {/* content */}
                <div className="flex flex-col gap-y-6 xl:gap-y-8 lg:order-first">
                  <p className="text-b2 text-secondary-medium-gold">
                    Impactable Network
                  </p>
                  <h3 className="text-primary-blue font-bold">
                    Collaborate with Impact Investors
                  </h3>
                  <p className="text-b2 text-black">
                    We are partnering with leading impact investors to establish
                    the Impactable Network. Impactable, a network of investors
                    who allocate capital to financial-first, impact investments.
                    The network is designed to meet the industry’s need for
                    collaboration, to grow the upstream impact investment market
                    and ecosystem.
                  </p>
                  <p className="text-b2 text-black">
                    There are opportunities for capital allocators and investors
                    to become Impactable Network Partners, with many potential
                    benefits, including collaboration on investment due
                    diligence, best practice advice, industry events and idea
                    sharing - all aimed at supporting Impactable Network
                    Partners’ impact investment needs.
                  </p>
                  <p className="text-b2 text-black">
                    There are also a limited number of places available for
                    institutions to become Impactable Network Sponsors,
                    receiving additional benefits, whilst supporting the growth
                    of the Network, to meet our common objectives.
                  </p>
                  <div className="my-3 xl:my-6">
                    <Link className="link" to="#">
                      Learn More
                      <span className="transform -rotate-z-45">
                        <FaArrowRightLong className="size-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* third row */}
              <div className="grid grid-cols-1 gap-y-8  relative  lg:gap-x-8 xl:gap-x-16 lg:grid-cols-[400px_1fr] xl:grid-cols-[435px_1fr]">
                {/* card */}
                <div className="lg:min-w-[400px] lg:min-h-[380px]  xl:min-w-[435px] lg:max-w-[435px] z-0 h-full w-full min-h-full relative rounded-[20px] bg-primary-green bg-[url(/images/home/fifth_section/card_3_bg.png)] bg-top bg-no-repeat bg-contain flex flex-col lg:justify-center xl:justify-start">
                  <div className="z-10 p-10 lg:pb-12  h-full flex flex-col gap-y-8 items-center">
                    <div className="max-w-[270px] md:max-w-[300px] lg:max-w-[270px] w-full">
                      <img
                        className="w-full h-full object-contain"
                        src="/images/home/fifth_section/technical_assitance.png"
                        alt="technical assitance"
                      />
                    </div>
                    <div className="max-w-[325px] md:max-w-[400px] lg:max-w-[325px] lg:min-h-[347px] border-2 border-white shadow-2xl shadow-[#0C0C0D66]/40% w-full h-full overflow-clip">
                      <img
                        className="w-full !h-full lg:min-h-[347px] object-cover object-center"
                        src="/images/home/fifth_section/solar_energy.webp"
                        alt="solar energy"
                      />
                    </div>
                  </div>
                </div>
                {/* content */}
                <div className="flex flex-col gap-y-6 xl:gap-y-8">
                  <p className="text-b2 text-primary-green">
                    Impactable Technical Assistance
                  </p>
                  <h3 className="text-primary-blue font-bold">
                    Multiply your Impact
                  </h3>
                  <p className="text-b2 text-black">
                    Impact investment offers an effective opportunity for social
                    and environmental advancement in Emerging Markets. However,
                    most EM Impact Funds struggle to scale because:
                  </p>
                  <p className="text-b2 text-black">
                    -Too small for institutional investors: less than 1 in 10
                    have AUM over $250m -Limited follow-on funds: less than 1 in
                    4 progress beyond Series 1 -Scarcity of support services:
                    less than 1 in 20 Technical Assistance programs help EM
                    impact managers (GPs).
                  </p>
                  <p className="text-b2 text-black">
                    Impactable Technical Assistance (TA) helps EM Impact GPs
                    build AUM capacity.
                  </p>
                  <p className="text-b2 text-black">
                    For Grantmakers, this provides a highly effective way to
                    increase impact. Increasing impact funds’ Assets Under
                    Management (AUM) increases investment in critically needed
                    areas. Impactable Technical Assistance aims to help dozens
                    of EM impact funds increase AUM, with the potential to
                    combine to $billions.
                  </p>
                  <div className="my-3 xl:my-6">
                    <Link className="link" to="#">
                      Learn More
                      <span className="transform -rotate-z-45">
                        <FaArrowRightLong className="size-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* fifth section / */}

      {/* sixth section */}
      <section className="py-[100px]">
        <div className="container relative z-10 px-6 xl:px-0 max-w-7xl mx-auto">
          <div className="flex flex-col gap-y-10">
            <h2 className="text-primary-blue">Our Latest Insights</h2>
            <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
              {/* blog card */}
              {blogData.map((blog) => (
                <BlogCard key={blog.title} {...blog} />
              ))}
            </div>
            <div className="flex items-center mt-4 lg:mt-5 justify-center">
              <Link className="btn-link-outline" to={"#"}>
                See all Insights
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* sixth section /  */}

      {/* seventh section */}
      <section className="py-[100px] bg-theme-gray">
        <div className="container relative z-10 px-6 xl:px-0 max-w-7xl mx-auto">
          {/* CTA */}
          <div className="bg-secondary-dark-blue pt-12 pb-20 rounded-[20px]">
            <div className="max-w-[900px] mx-auto">
              <div className="flex flex-col gap-y-6 lg:gap-y-8">
                <div className="flex flex-col space-y-4">
                  <h2 className="text-white text-center">
                    What are you interested in?
                  </h2>
                  <p className="text-b2 text-white text-center max-w-2xl mx-auto">
                    We work with ambitious investors who want to define the
                    future through impactful investments to achieve
                    extraordinary outcomes in Emerging Markets.
                  </p>
                </div>
                <CTAForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* seventh section */}
    </main>
  );
}
