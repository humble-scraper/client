import { SetStateAction, Dispatch } from "react";

type BundleContentProps = {
  showExpanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  open: () => void;
};

export type ItemProps = {
  itemTitle?: string;
  itemPublisher?: string;
  itemPrice?: number;
  itemImage?: string;
};

export type BundleProps = {
  bundleTitle?: string;
  bundlePrice?: number;
  bundleCollapsedImage?: string;
  bundleExpandedImage?: string;
  bundleItems?: ItemProps[];
};

const itemTest = [
  {
    itemTitle: "Beyond Two Souls",
    itemPublisher: "Quantic Dream LLC",
    itemPrice: 29.99,
    itemImage: "beyond.jpg",
  },
  {
    itemTitle: "Heavy Rain",
    itemPublisher: "Quantic Dream LLC",
    itemPrice: 19.99,
    itemImage: "rain.jpg",
  },
  {
    itemTitle: "Detroit Become Human",
    itemPublisher: "Quantic Dream LLC",
    itemPrice: 79.99,
    itemImage: "image_placeholder3.jpg",
  },
];

export const bundleTest = {
  bundleTitle: "Quantic Dream Deluxe Bundle",
  bundlePrice: 180.99,
  bundleCollapsedImage: "quantic_Dream_Collapsed.jpg",
  bundleExpandedImage: "quantic_Dream_Expanded.jpg",
  bundleItems: itemTest,
};

export default BundleContentProps;
