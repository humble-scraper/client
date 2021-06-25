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
    itemImage: "quantic_Dream/beyond.jpg",
  },
  {
    itemTitle: "Heavy Rain",
    itemPublisher: "Quantic Dream LLC",
    itemPrice: 19.99,
    itemImage: "quantic_Dream/rain.jpg",
  },
  {
    itemTitle: "Detroit Become Human",
    itemPublisher: "Quantic Dream LLC",
    itemPrice: 79.99,
    itemImage: "quantic_Dream/detroit.jpg",
  },
];

export const bundleTest = {
  bundleTitle: "Quantic Dream Deluxe Bundle",
  bundlePrice: 180.99,
  bundleCollapsedImage: "quantic_Dream/quantic_Dream_Collapsed.jpg",
  bundleExpandedImage: "quantic_Dream/quantic_Dream_Expanded.jpg",
  bundleItems: itemTest,
};

const itemTest2 = [
  {
    itemTitle: "Planet Coaster Deluxe Edition",
    itemPublisher: "Frontier Developments plc",
    itemPrice: 79.99,
    itemImage: "frontier_Developments/planet_coaster.jpg",
  },
  {
    itemTitle: "Planet Coaster Adventure Pack",
    itemPublisher: "Frontier Developments plc",
    itemPrice: 9.99,
    itemImage: "frontier_Developments/adventure_pack.jpg",
  },
  {
    itemTitle: "Planet Coaster Spooky Pack",
    itemPublisher: "Frontier Developments plc",
    itemPrice: 9.99,
    itemImage: "frontier_Developments/spooky_pack.jpg",
  },
  {
    itemTitle: "Planet Coaster Studio Pack",
    itemPublisher: "Frontier Developments plc",
    itemPrice: 9.99,
    itemImage: "frontier_Developments/studio_pack.jpg",
  },
  {
    itemTitle: "Planet Coaster Vintage Pack",
    itemPublisher: "Frontier Developments plc",
    itemPrice: 9.99,
    itemImage: "frontier_Developments/studio_pack.jpg",
  },
  {
    itemTitle: "Planet Coaster World Fair Pack",
    itemPublisher: "Frontier Developments plc",
    itemPrice: 9.99,
    itemImage: "frontier_Developments/world_fair_pack.jpg",
  },
];

export const bundleTest2 = {
  bundleTitle: "Planet Coaster Holiday Bundle",
  bundlePrice: 110.99,
  bundleCollapsedImage: "frontier_Developments/planet_coaster_Collapsed.jpg",
  bundleExpandedImage: "frontier_Developments/planet_coaster_Expanded.jpg",
  bundleItems: itemTest2,
};






export default BundleContentProps;
