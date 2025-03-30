import { IconType } from "react-icons";

export interface IImageBoxProps {
  imageUrl: string;
  imageAltText: string;
  description: string;
}

export interface IListItemImageBoxProps extends IImageBoxProps {
  title: string;
}

export type IFloatingImageBoxProps = IImageBoxProps;

export type BlogCardProps = Omit<
  IImageBoxProps,
  "description" | "imageAltText"
> & {
  title: string;
  category: string;
};

export interface SocialIconProps {
  href: string;
  Icon: IconType;
}

export interface FooterNavigationLinkProps {
  href: string;
  label: string;
}

export type DesktopHeaderNavLinksProps = FooterNavigationLinkProps & {
  childLinks?: FooterNavigationLinkProps[];
};

export type MobileHeaderNavLinksProps = DesktopHeaderNavLinksProps & {
  onClose?: () => void;
  onChildOpen?: (label: string) => void;
};
