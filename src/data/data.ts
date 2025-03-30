import {
  BlogCardProps,
  DesktopHeaderNavLinksProps,
  FooterNavigationLinkProps,
  IFloatingImageBoxProps,
  IImageBoxProps,
  IListItemImageBoxProps,
  MobileHeaderNavLinksProps,
} from "../types/types";

// data for second section
export const imageBoxData: IImageBoxProps[] = [
  {
    imageUrl: "/images/home/second_section/investments.png",
    imageAltText: "investments",
    description:
      "We are driven by the belief that investment can make a positive impact - without compromising returns.",
  },
  {
    imageUrl: "/images/home/second_section/investment_Network.png",
    imageAltText: "investment network",
    description:
      "Connects institutional scale impact investors, to benefit from collaboration in often opaque private markets.",
  },
  {
    imageUrl: "/images/home/second_section/technical_Assistance.png",
    imageAltText: "technical assistance",
    description:
      "Helps sub-scale fund managers expand capacity and grow assests under management.",
  },
];

// data for fourth section

export const listItemImageBoxData: IListItemImageBoxProps[] = [
  {
    imageUrl: "/images/home/fourth_section/financial-growth.png",
    imageAltText: "financial-growth",
    title: "High Impact",
    description: "Positively impacting lives at the bottom of the pyramid",
  },
  {
    imageUrl: "/images/home/fourth_section/managed_risk.png",
    imageAltText: "managed_risk",
    title: "Managed Risk",
    description: "Low simulated drawdowns Principal Protection Solution",
  },
  {
    imageUrl: "/images/home/fourth_section/competitive_returns.png",
    imageAltText: "competitive_returns",
    title: "Competitive Returns",
    description: "Financial-first, targeting competitive net returns",
  },
  {
    imageUrl: "/images/home/fourth_section/investment_at_scale.png",
    imageAltText: "investment_at_scale",
    title: "Investment at Scale",
    description: "Over $1bn capacity",
  },
];

// data for fourth section iconboxdata
export const floatingImageBoxData: IFloatingImageBoxProps[] = [
  {
    imageUrl: "/images/home/fourth_section/save-money.png",
    imageAltText: "save money",
    description: "Attractive Returns",
  },
  {
    imageUrl: "/images/home/fourth_section/save-the-world.png",
    imageAltText: "save the world",
    description: "Positive Impact",
  },
  {
    imageUrl: "/images/home/fourth_section/power.png",
    imageAltText: "power",
    description: "Sufficient Capacity",
  },
  {
    imageUrl: "/images/home/fourth_section/statistics.png",
    imageAltText: "statistics",
    description: "Minimal Drawdowns",
  },
];

// sixth section blogData
export const blogData: BlogCardProps[] = [
  {
    title: "Impact investment Market Outlook - 2023 and Beyond",
    category: "Impact investment",
    imageUrl: "/images/home/sixth_section/blog_1.webp",
  },
  {
    title:
      "Cultivating Impact: Demonstrating the Pivotal Role of Private Capital",
    category: "Impact investment, Private Markets",
    imageUrl: "/images/home/sixth_section/blog_2.webp",
  },
  {
    title: "What is Impact Investment?",
    category: "Impact investment",
    imageUrl: "/images/home/sixth_section/blog_3.webp",
  },
];

//  footer navigation
export const footerNavLinks: FooterNavigationLinkProps[] = [
  {
    label: "Homepage",
    href: "#",
  },
  {
    label: "Resources",
    href: "#",
  },
  {
    label: "Contact Us",
    href: "#",
  },
  {
    label: "Privacy Policy",
    href: "#",
  },
  {
    label: "Terms of Use",
    href: "#",
  },
];

// header navigation (desktop)
export const headerDesktopNavLinks: DesktopHeaderNavLinksProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "#",
  },
  {
    label: "Investment",
    href: "#",
    childLinks: [
      {
        label: "Why Impactable?",
        href: "#",
      },
      {
        label: "Impactable EM products",
        href: "#",
      },
    ],
  },
  {
    label: "Impact Industry Building",
    href: "#",
    childLinks: [
      {
        label: "Impactable Network",
        href: "#",
      },
      {
        label: "Impactable Technical Assistance",
        href: "#",
      },
    ],
  },
  {
    label: "News & Insights",
    href: "#",
  },
];

// header navigation (mobile)
export const headerMobileNavLinks: MobileHeaderNavLinksProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "#",
  },
  {
    label: "Investment",
    href: "#",
    childLinks: [
      {
        label: "Why Impactable?",
        href: "#",
      },
      {
        label: "Impactable EM products",
        href: "#",
      },
    ],
  },
  {
    label: "Impact Industry Building",
    href: "#",
    childLinks: [
      {
        label: "Impactable Network",
        href: "#",
      },
      {
        label: "Impactable Technical Assistance",
        href: "#",
      },
    ],
  },
  {
    label: "News & Insights",
    href: "#",
  },
  {
    label: "Terms of Use",
    href: "#",
  },
  {
    label: "Privacy Policy",
    href: "#",
  },
];
