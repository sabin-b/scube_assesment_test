export interface IImageBoxProps {
  imageUrl: string;
  imageAltText: string;
  description: string;
}

export interface IListItemImageBoxProps extends IImageBoxProps {
  title: string;
}
