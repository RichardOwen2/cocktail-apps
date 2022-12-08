class DrinkDataSource {
  static getDrink(keyword) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then((responseJson) => responseJson.json())
      .then((responseJson) => {
        if (responseJson.drinks.length) {
          return Promise.resolve(responseJson.drinks);
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(`${keyword} is not found`);
      });
  }
}

export default DrinkDataSource;
