import '../component/random-drink';
import '../component/drink-list';
import '../component/search-bar';
import RandomDataSource from '../data/random-data';
import DrinkDataSource from '../data/drink-data';

const randomRender = () => {
  const next = document.querySelector('#next');
  const randomDrink = document.querySelector('random-drink');

  const renderResult = (results) => {
    randomDrink.drink = results;
  };

  const fallbackResult = () => {
    randomDrink.renderDefault();
    // eslint-disable-next-line no-alert
    alert('Unknown Error');
  };

  const main = () => {
    RandomDataSource.getRandomDrink()
      .then(renderResult)
      .catch(fallbackResult);
  };

  next.addEventListener('click', () => {
    main();
  });

  main();
};

const drinkRender = () => {
  const buttonSearch = document.querySelector('#search');
  const drinkList = document.querySelector('drink-list');
  const loadMore = document.querySelector('#load');

  const renderResult = (results) => {
    let index = 3;

    if (results.length > 3) {
      loadMore.classList.remove('hidden');

      loadMore.addEventListener('click', () => {
        const end = index + 3 > results.length ? results.length : index + 3;
        drinkList.loadMore = results.slice(index, end);
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

  const fallbackResult = (message) => {
    drinkList.renderError(message);
    loadMore.classList.add('hidden');
  };

  buttonSearch.addEventListener('click', () => {
    DrinkDataSource.getDrink(document.querySelector('#input-search').value)
      .then(renderResult)
      .catch(fallbackResult);
  });
};

export { randomRender, drinkRender };
