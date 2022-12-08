import './drink-item';

class DrinkList extends HTMLElement {
  constructor() {
    super();
    this.classList.add('container', 'w-11/12', 'mx-auto', 'grid', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-x-16', 'gap-y-8', 'items-center');
  }

  set drink(drinks) {
    this.drinks = drinks;
    this.render();
  }

  set loadMore(drinks) {
    this.drinks = drinks;
    this.load();
  }

  render() {
    this.innerHTML = '';
    this.drinks.forEach((drink) => {
      const drinkItemElement = document.createElement('drink-item');
      drinkItemElement.item = drink;

      this.appendChild(drinkItemElement);
    });
  }

  load() {
    this.drinks.forEach((drink) => {
      if (drink.strInstructions.length < 400) {
        const drinkItemElement = document.createElement('drink-item');
        drinkItemElement.item = drink;

        this.appendChild(drinkItemElement);
      }
    });
  }

  renderError() {
    this.innerHTML = `

    `;
  }
}

customElements.define('drink-list', DrinkList);
