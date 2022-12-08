import '../component/random-drink.js';
import '../component/drink-list.js';
import '../component/search-bar.js';
import RandomDataSource from '../data/random-data.js';
import DrinkDataSource from '../data/drink-data.js';

const randomRender = () => {
  const next = document.querySelector('#next');
  const randomDrink = document.querySelector('random-drink');

  next.addEventListener('click', () => {
    main();
  });

  const main = () => {
    RandomDataSource.getRandomDrink()
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = (results) => {
    randomDrink.drink = results;
  };

  const fallbackResult = () => {
    randomDrink.renderDefault();
    alert('Unknown Error');
  };

  main();
};

const drinkRender = () => {
  const buttonSearch = document.querySelector('#search');
  const drinkList = document.querySelector('drink-list');
  const loadMore = document.querySelector('#load');

  buttonSearch.addEventListener('click', () => {
    DrinkDataSource.getDrink(document.querySelector('#input-search').value)
      .then(renderResult)
      .catch(fallbackResult);
  });

  const renderResult = (results) => {
    let index = 3;

    if (results.length > 3) {
      loadMore.classList.remove('hidden');

      loadMore.addEventListener('click', () => {
        drinkList.loadMore = results.slice(index, (index + 3 > results.length) ? results.length : index + 3);
        index += 3;
        if (index > results.length) {
          loadMore.classList.add('hidden');
        }
      });

      drinkList.drink = results.slice(0, 3);
    } else {
      loadMore.classList.add('hidden');
      drinkList.drink = results;
    }
  };

  const fallbackResult = (error) => {
    drinkList.renderError();
    alert(error);
  };
};

export { randomRender, drinkRender };
