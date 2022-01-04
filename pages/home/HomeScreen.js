import React from "react";
import SearchPageTemplate from "../../components/SearchPageTemplate";
import MenuLivros from './_components/MenuLivros'
import MenuTemas from './_components/MenuTemas'

const HomeScreen = (props) => {

  const [filter, setFilter] = React.useState('');

  return (
    <SearchPageTemplate >
      <MenuLivros {...props} />
      <MenuTemas {...props} filter={filter} />
    </SearchPageTemplate>
  )
}

export default HomeScreen;

