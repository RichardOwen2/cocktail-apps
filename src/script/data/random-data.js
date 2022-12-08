class RandomDataSource {
  static getRandomDrink() {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((responseJson) => responseJson.json())
      .then((responseJson) => {
        if (responseJson.drinks.length == 1) {
          return Promise.resolve(responseJson.drinks[0]);
        }
        return Promise.reject();
      });
  }
}

export default RandomDataSource;
