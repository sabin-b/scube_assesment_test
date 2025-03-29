import React from "react";

export interface IImageBoxProps {
  imageUrl: string;
  imageAltText: string;
  description: string;
}

export interface IListItemImageBoxProps extends IImageBoxProps {
  title: string;
}

export type IFloatingImageBoxProps = IImageBoxProps;

export interface GradientCardProps {
  headerImageUrl: string;
  headerImageAltText: string;
  bodyImageUrl: string;
  bodyImageAltText: string;
  className?: string;
}

export interface GradientCardSectionProps extends GradientCardProps {
  children: React.ReactNode;
  href?: string;
  linkText?: string;
}
