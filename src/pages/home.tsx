import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import ImageBox from "../components/ui/ImageBox";
import ListItemImageBox from "../components/ui/ListItemImageBox";
import { imageBoxData, listItemImageBoxData } from "../data/data";

export default function Home() {
  return (
    <main>
      {/* first section */}
      <section className="min-h-svh relative flex items-center z-0 bg-[url(/images/hero_bg.webp)] bg-no-repeat bg-cover bg-bottom">
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
                src="/images/impactable_about.webp"
                alt="Impactable"
              />
            </div>
          </div>
        </div>
      </section>
      {/* third section */}

      {/* fourth section */}
      <section className="py-[100px] bg-primary-blue">
        <div className="container px-6 xl:px-0 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-y-8  lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12">
            {/* image wrapper */}
            <div className="relative w-full h-full">
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-cover rounded-image"
                  src="/images/farmer.webp"
                  alt="farmer"
                />
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
                  <ListItemImageBox {...data} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* fourth section / */}
    </main>
  );
}
