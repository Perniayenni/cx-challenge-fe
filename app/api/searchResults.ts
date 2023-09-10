
import axios from 'axios';
import { Product } from './product';

export class SearchResults {
  private results: Product[] = [];

  constructor(private searchText: string) {}

  async fetchResults() {
    try {
      const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${this.searchText}&limit=10`;
      const response = await axios.get(apiUrl);

      this.results = response.data.results.map((item: any) => {
        // Mapea los datos a la clase Product
        return new Product(
          item.id,
          item.title,
          {
            currency: item.currency_id,
            amount: item.price.toString(),
            decimals: 2,
          },
          {
            quantity: item.installments?.quantity,
            amount: item.installments?.amount.toString(),
          },
          {
            state_name: item.address?.state_name,
            city_name: item.address?.city_name,
          },
          item.thumbnail,
          item.condition,
          item.shipping.free_shipping
        );
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  getResults() {
    return this.results;
  }
}