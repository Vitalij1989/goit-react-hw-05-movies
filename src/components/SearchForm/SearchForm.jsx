import { useState } from 'react';
import { Container } from 'utils/Container';
import {
  FormSearch,
  SearchFormWrap,
  FormInput,
  FormButton,
} from './SearchForm.styled';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';

export const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const formSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <>
      <Container>
        <SearchFormWrap>
          <FormSearch onSubmit={formSubmit}>
            <div>
              <FormInput
                type="text"
                placeholder="Enter name of movie..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
            </div>

            <FormButton type="submit">
              <ImSearch size="20" />
            </FormButton>
          </FormSearch>
        </SearchFormWrap>
      </Container>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
