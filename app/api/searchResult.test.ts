import axios from 'axios';
import { SearchResults } from './searchResults';
import { Product, AvailableSort } from './product';


jest.mock('axios');

describe('SearchResults', () => {
    const searchText = 'iphone';
    const searchResults = new SearchResults(searchText);

    beforeEach(() => {
        jest.resetAllMocks()
      });

  it('should fetch results and map to Product objects', async () => {
    const mockResponse = {
      data: {
        results: [
          {
            id: '1',
            title: 'Product 1',
            currency_id: 'USD',
            price: 100,
            installments: {
              quantity: 2,
              amount: '50',
            },
            address: {
              state_name: 'State 1',
              city_name: 'City 1',
            },
            thumbnail: 'thumbnail_url',
            condition: 'new',
            shipping: {
              free_shipping: true,
            },
          },
        ],
        sort: {
          "id": "price_desc",
          "name": "Mayor precio"
        },
        available_sorts: [
          {
            "id": "relevance",
            "name": "Más relevantes"
          },
          {
            "id": "price_asc",
            "name": "Menor precio"
          }
        ],
      },
    };
    axios.get.mockResolvedValue(mockResponse);
   
    await searchResults.fetchResults();
    expect(searchResults.getProducts()).toHaveLength(1);
    expect(searchResults.getProducts()[0]).toBeInstanceOf(Product);
    expect(searchResults.getAvailableSorts()[0]).toBeInstanceOf(AvailableSort);
    expect(searchResults.getProducts()[0].id).toBe('1');
  });

  it('handles error when fetching results', async () => {
    const error = new Error('Network error');
    const spy = jest.spyOn(console, 'error').mockImplementation();
    axios.get.mockImplementation(() => Promise.reject(error))

    await searchResults.fetchResults();

    expect(spy).toHaveBeenCalledWith('Error fetching data:', error);
  });
});