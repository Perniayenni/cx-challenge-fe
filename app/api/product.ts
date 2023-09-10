export class Product {
    constructor(
      public id: string,
      public title: string,
      public price: {
        currency: string;
        amount: string;
        decimals: number;
      },
      public installments: {
        quantity: number;
        amount: string;
      },
      public address: {
        state_name: string;
        city_name: string;
      },
      public picture: string,
      public condition: string,
      public free_shipping: boolean
    ) {}
  }