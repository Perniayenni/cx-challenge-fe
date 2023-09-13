import React from "react";
import { AvailableSort } from '@/interfaces/availableSort';
import { act, renderHook } from "@testing-library/react-hooks";
import { useAvailableSort } from "./useAvailableSort";

  const routerPushMock = jest.fn();
  jest.mock('next/router', () => ({
    useRouter: () => ({
      push: routerPushMock,
      query: { search: 'iphone' }
    }),
  }));
 
  jest.mock('@/hooks/useFetchResults', ()=>({
    useFetchResults: ()=>({
        fetchResults: jest.fn()
    })
  }))
  
  describe('useAvailableSort.', () => {
    it('It should return all variables by default', () => {
        const mockContextValue = {
            dispatch: jest.fn(),
            state: {
              availableSorts: [] as AvailableSort[],
            },
          };
          jest.spyOn(React, 'useContext').mockReturnValue(mockContextValue);

          
        const { result } =  renderHook(()=> useAvailableSort())
        const {availableSorts, open, setOpen, searching } = result.current

        expect( availableSorts ).toEqual([] as AvailableSort[]);
        expect( open ).toBe( false );
        expect( searching ).toEqual( expect.any( Function ) );
        expect( setOpen ).toEqual( expect.any( Function ) );
    });
    
    it('should call router.push when calling searching', () => {
        const { result } = renderHook(() => useAvailableSort());

        act(() => {
            result.current.searching('price_desc');
        });

        expect(routerPushMock).toHaveBeenCalledWith('/items?search=iphone&sort=price_desc');
    });

  });