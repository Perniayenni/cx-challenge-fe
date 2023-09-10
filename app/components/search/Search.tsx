import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import searchStyle from 'styles/search.module.scss';
import { useSearch } from './useSearch';

const Search: FC = () => {
  const { query, setQuery, searching, enterPressed } = useSearch()

  return (
    <div className={searchStyle.search}>
      <input
        className={searchStyle.search__input}
        type='text'
        placeholder='Nunca dejes de buscar'
        onChange={(e) => setQuery(e.target.value)}
        maxLength={120}
        value={query}
        onKeyDown={enterPressed.bind(this)}
      ></input>
      <button className={searchStyle.search__button}  onClick={searching} >
        <FontAwesomeIcon className={searchStyle.search__icon} icon={faSearch} />
      </button>
    </div>
  )
}

export default Search
