import React from "react";
import SearchPageTemplate from "../../components/SearchPageTemplate";
import MenuLivros from './_components/MenuLivros'
import MenuTemas from './_components/MenuTemas'

const HomeScreen = (props) => {

  const [filter, setFilter] = React.useState('');

  return (
    <SearchPageTemplate  {...props} onSearch={(data) => setFilter(data)}>
      <MenuLivros {...props} filter={filter} />
      <MenuTemas {...props} filter={filter} />
    </SearchPageTemplate>
  )
}

export default HomeScreen;

