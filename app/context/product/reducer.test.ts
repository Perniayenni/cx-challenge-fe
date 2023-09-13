import { Reducer, ActionType } from './reducer';
import { State } from './provider';

describe('Reducer', () => {
  it('should handle the "isPendingFetchProducts" action correctly', () => {
    const initialState: State = {
      loading: false,
      products: [],
      availableSorts: [],
    };

    const action: ActionType = { type: 'isPendingFetchProducts' };
    const newState = Reducer(initialState, action);

    expect(newState.loading).toBe(true);
    expect(newState.products).toEqual([]);
    expect(newState.availableSorts).toEqual([]);
  });

  it('should handle the "isReadyFetchProducts" action correctly', () => {
    const initialState: State = {
      loading: true,
      products: [],
      availableSorts: [],
    };

    const action: ActionType = {
      type: 'isReadyFetchProducts',
      payload: { products: [{ name: 'Product 1' }] },
    };
    const newState = Reducer(initialState, action);

    expect(newState.loading).toBe(false);
    expect(newState.products).toEqual([{ name: 'Product 1' }]);
    expect(newState.availableSorts).toEqual([]);
  });

  it('should handle the "setAvailableSort" action correctly', () => {
    const initialState: State = {
      loading: false,
      products: [],
      availableSorts: [],
    };

    const action: ActionType = {
      type: 'setAvailableSort',
      payload: { availableSorts: [{ id: '1', label: 'Sort 1' }] },
    };
    const newState = Reducer(initialState, action);

    expect(newState.loading).toBe(false);
    expect(newState.products).toEqual([]);
    expect(newState.availableSorts).toEqual([{ id: '1', label: 'Sort 1' }]);
  });

});