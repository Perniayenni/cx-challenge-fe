
import axios from 'axios';
import { AvailableSort, Product } from './product';
const BASE_URL = 'sites/MLA/search'

export class SearchResults {
  private products: Product[] = [];
  private availableSort : AvailableSort[] = []

  constructor(
    private searchText: string,
    private sort:string = 'relevance'
    ) {

    }

  async fetchResults() {
    try {
      const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${this.searchText}&sort=${this.sort}&limit=10`;
      const response = await axios.get(apiUrl);

      this.products = response.data.results.map((item: any) => {
        return new Product(
          item.id,
          item.title,
          {
            currency: item.currency_id,
            amount: item.price?.toString(),
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
          item.shipping?.free_shipping
        );
      });
      const sorts = [response.data.sort, ...response.data.available_sorts] 
      this.availableSort = sorts.map((item: any, index:number)=>{
        const active = item.id === response.data.sort.id
        return new AvailableSort(
            item.id,
            item.name,
            active
        );
      })
      

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  getProducts() {
    return this.products;
  }

  getAvailableSorts(){
    return this.availableSort;
  }
}