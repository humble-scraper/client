import { SetStateAction, Dispatch } from "react";

type BundleContentProps = {
  showExpanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  open: () => void;
};

type ItemProps = {
  itemName: string;
  itemPublisher: string;
  itemPrice: number;
  itemImage: string;
};

type BundleProps = {
  bundleTitle: string;
  bundlePrice: number;
  bundleCollapsedImage: string;
  bundleExpandedImage: string;
  bundleItems: [ItemProps];
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

const bundleTest = {
  bundleName: "Quantic Dream Deluxe Bundle",
  bundlePrice: 180.99,
  bundleCollapsedImage: "image_placeholder1.jpg",
  bundleExpandedImage: "image_placeholder2.jpg",
  bundleItems: itemTest
};

export default BundleContentProps;
