import { useSearch } from "./useSearch";
import { act, renderHook } from "@testing-library/react-hooks";

  const routerPushMock = jest.fn();
  jest.mock('next/router', () => ({
    useRouter: () => ({
      push: routerPushMock,
      query: {  }
    }),
  }));

 
  
  jest.mock('@/hooks/useFetchResults', ()=>({
    useFetchResults: ()=>({
        fetchResults: jest.fn()
    })
  }))
  
 

  describe('useSearch', () => {
    it('It should return all variables by default', () => {
        const { result } =  renderHook(()=> useSearch())
        const {query, setQuery, searching, enterPressed } = result.current
        expect( query ).toBe('');
        expect( setQuery ).toEqual( expect.any( Function ) );
        expect( searching ).toEqual( expect.any( Function ) );
        expect( enterPressed ).toEqual( expect.any( Function ) );
      
    });


    it('should update the query when setQuery is called', () => {
        const { result } = renderHook(() => useSearch());
        act(() => {
          result.current.setQuery('nuevo-valor');
        });
        const { query } = result.current;
        expect(query).toBe('nuevo-valor');
    });

    it('should call searching when the Enter key is pressed', () => {
        const { result } = renderHook(() => useSearch());
    
        act(() => {
          result.current.setQuery('iphone');
        });
    
        const event = {
          keyCode: 13,
          preventDefault: jest.fn(),
        };
    
        act(() => {
          result.current.enterPressed(event);
        });
    
        expect(routerPushMock).toHaveBeenCalledWith('/items?search=iphone');
      });
  });