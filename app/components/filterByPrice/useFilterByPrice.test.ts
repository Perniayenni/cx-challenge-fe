import React from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { useFilterByPrice } from "./useFilterByPrice";
import { FilterByPrice } from "@/interfaces/filterByPrice";

  const routerPushMock = jest.fn();
  jest.mock('next/router', () => ({
    useRouter: () => ({
      push: routerPushMock,
      query: { search: 'iphone' }
    }),
  }));
  
  describe('useFilterByPrice.', () => {
    it('It should return all variables by default', () => {
        const mockContextValue = {
            dispatch: jest.fn(),
            state: {
                filterByPrices: [] as FilterByPrice[],
            },
          };
          jest.spyOn(React, 'useContext').mockReturnValue(mockContextValue);

          
        const { result } =  renderHook(()=> useFilterByPrice())
        const {filterByPrices,
            searching,
            max,
            min,
            setMin,
            setMax,
            searchPrice } = result.current

        expect( filterByPrices ).toEqual([] as FilterByPrice[]);
        expect( max ).toBe( undefined );
        expect( min ).toBe( undefined );
        expect( setMax ).toEqual( expect.any( Function ) );
        expect( setMin ).toEqual( expect.any( Function ) );
        expect( searchPrice ).toEqual( expect.any( Function ) );
    });
    
    it('should call router.push when calling searching', () => {
        const { result } = renderHook(() => useFilterByPrice());

        act(() => {
            result.current.searching('8000.0-35000.0');
        });

        expect(routerPushMock).toHaveBeenCalledWith('/items?search=iphone&price=8000.0-35000.0');
    });

  });