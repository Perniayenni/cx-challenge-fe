
import axios from 'axios';
import { AvailableSort, FilterByPrice, Product } from './product';
const BASE_URL = 'sites/MLA/search'

export class SearchResults {
  private products: Product[] = [];
  private availableSort : AvailableSort[] = []
  private filterByPrice: FilterByPrice[] = []

  constructor(
    private searchText: string,
    private sort:string = 'relevance',
    private price:string = ''
    ) {

    }

  async fetchResults() {
    try {
      const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${this.searchText}&sort=${this.sort}&price=${this.price}&limit=10`;
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
      this.availableSort = sorts.map((item: any)=>{
        const active = item.id === response.data.sort.id
        return new AvailableSort(
            item.id,
            item.name,
            active
        );
      })
      const available_filters = response.data.available_filters.length > 0 ? response.data.available_filters.filter((filter:any) => filter.id === 'price')[0].values : []
      this.filterByPrice = available_filters
        .map((item: any)=>{
          return new FilterByPrice(
            item.id,
            item.name,
            item.results
          )
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

  getFilterByPrice(){
    return this.filterByPrice;
  }
}