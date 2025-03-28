import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import ImageBox from "../components/ui/ImageBox";

export default function Home() {
  return (
    <main>
      {/* first section */}
      <section className="min-h-svh relative flex items-center z-0 bg-[url(./images/hero_bg.webp)] bg-no-repeat bg-cover bg-bottom">
        {/* over lay */}
        <div className="absolute -z-[1] inset-0 w-full h-full bg-gradient-to-b from-gradient-from-blue/60 to-gradient-to-dark-blue/10"></div>
        <div className="absolute -z-[1] inset-0 w-full h-full bg-gradient-to-r from-gradient-from-dark-blue/90 via-83%  to-gradient-to-dark-blue/25"></div>

        {/* content */}
        <div className="container relative z-10 h-full">
          <div className="flex flex-col items-start gap-y-6">
            <h1 className="text-white max-w-2xl">
              Scale up your Impact Investment
            </h1>
            <p className="text-white mb-4">
              Impactable provides impact investing solutions at institutional
              scale
            </p>
            <Link className="button-link" to={"#"}>
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
      {/* first section / */}

      {/* second section */}
      <section className="z-20 relative">
        <div className="container  -mt-[90px]">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
            <ImageBox
              imageUrl="/images/investments_image_box_1.png"
              imageAltText="investments"
              description="We are driven by the belief that investment can make a positive impact - without compromising returns."
            />
            <ImageBox
              imageUrl="/images/investment_Network_image_box_2.png"
              imageAltText="investment network"
              description="Connects institutional scale impact
investors, to benefit from collaboration
in often opaque private markets."
            />
            <ImageBox
              imageUrl="/images/technical_Assistance_image_box_3.png"
              imageAltText="technical assistance"
              description="Helps sub-scale fund managers expand
capacity and grow assests under
management."
            />
          </div>
        </div>
      </section>
      {/* second section / */}

      {/* third section */}
      <section className="py-[100px]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* content */}
            <div className="flex flex-col gap-y-4">
              <h2 className="text-primary-blue">About Impactable</h2>
              <p>
                We are driven by the belief that investment can make a positive
                impact - without compromising returns:
              </p>
              <ul>
                <li>
                  <span>
                    <IoIosCheckmarkCircleOutline className="size-6 text-primary-blue" />
                  </span>
                  <span>
                    <p className="text-b1">ssssss</p>
                  </span>
                </li>
              </ul>
            </div>
            {/* image wrapper */}
            <div className=""></div>
          </div>
        </div>
      </section>
      {/* third section */}
    </main>
  );
}
