import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { PATH } from '@/constants';
import discountImg from '@public/assets/images/discount.png';
import style from './SearchBox.module.scss';

const SearchBox = ({ hiddenSubInfo }) => {
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [searchInputText, setSearchInputText] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === '/') {
      setSearchInputText('');
    }
  }, [pathname]);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const encodedSearchInput = encodeURIComponent(searchInputText);
    const redirectPath = `/search?keyword=${encodedSearchInput}`;
    router.push(redirectPath);
  };

  const handleOnChangeInput = (event) => {
    setSearchInputText(event.target.value);
  };

  return (
    <div className={style.search_container}>
      <div className={style['searchBox']}>
        <SearchInput handleSubmitForm={handleSubmitForm} isFocus={isFocusInput}>
          <FormattedMessage id='header.signup-get-voucher'>
            {(trans) => (
              <input
                type='text'
                name='keyword'
                placeholder={trans}
                autoComplete='off'
                value={searchInputText}
                onChange={handleOnChangeInput}
                onFocus={() => setIsFocusInput(true)}
                onBlur={() => setIsFocusInput(false)}
                onClick={(event) => event.stopPropagation()}
              />
            )}
          </FormattedMessage>
        </SearchInput>

        <button type='submit' form='search_form'>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </button>

        {isFocusInput && <RecentSearchList />}
      </div>

      {hiddenSubInfo || <TrendingSearchList />}
    </div>
  );
};

const SearchInput = ({ children, isFocus, handleSubmitForm }) => {
  return (
    <form
      id='search_form'
      action={PATH.SEARCH}
      className={isFocus ? style.input_outline : ''}
      onSubmit={handleSubmitForm}
    >
      {children}
    </form>
  );
};

const RecentSearchList = ({
  keywords = ['recently', 'searched', 'keywords'],
}) => {
  return (
    <div className={style.recent_search_list}>
      <FormattedMessage id='header.signup-get-voucher'>
        {(trans) => (
          <Link href={`/search?keyword=${trans}`}>
            <span>{trans}</span>
            <Image src={discountImg} height={24} />
          </Link>
        )}
      </FormattedMessage>

      {keywords.map((keyword, index) => (
        <RecentSearchKeyword keyword={keyword} key={index} />
      ))}
    </div>
  );
};

const RecentSearchKeyword = ({ keyword }) => {
  return (
    <Link href={`/search?keyword=${keyword}`}>
      <span>{keyword}</span>
    </Link>
  );
};

const TrendingSearchList = ({
  trendingSearches = ['trending', 'keywords'],
}) => {
  return (
    <div className={style['trending_search_list']}>
      {trendingSearches.map((keyword, index) => (
        <Link href={`/search?keyword=${keyword}`} key={index}>
          {keyword}
        </Link>
      ))}
    </div>
  );
};

export default SearchBox;
