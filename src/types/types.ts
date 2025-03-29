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
