export type coffeeStoreType = {
  id: string;
  name: string;
  imgUrl: string;
  address: string;
};

export type CardType = {
  name: string;
  imgUrl: string;
  href: string;
};

export type MapboxType = {
  id: string;
  properties: {
    address: string;
  };
  text: string;
};
