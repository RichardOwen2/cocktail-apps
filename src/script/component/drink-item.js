class DrinkItem extends HTMLElement {
  set drink(drink) {
    this._drink = drink;
    this._ingredients = this.getIngredients();
    this.render();
  }

  getIngredients() {
    const {
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strIngredient15,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
      strMeasure6,
      strMeasure7,
      strMeasure8,
      strMeasure9,
      strMeasure10,
      strMeasure11,
      strMeasure12,
      strMeasure13,
      strMeasure14,
      strMeasure15,
    } = this._drink;

    const ingredients = [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strIngredient15,
    ];

    const measure = [
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
      strMeasure6,
      strMeasure7,
      strMeasure8,
      strMeasure9,
      strMeasure10,
      strMeasure11,
      strMeasure12,
      strMeasure13,
      strMeasure14,
      strMeasure15,
    ];

    let text = ' ';

    for (let i = 0; i < 15; i++) {
      if (ingredients[i] && measure[i]) {
        text += `${measure[i]} ${ingredients[i]} ,`;
      } else {
        break;
      }
    }

    return text;
  }

  render() {
    this.innerHTML = `
      <div class="max-w-[480px] bg-white rounded-lg shadow-md">
        <img class="rounded-t-lg" src="${this._drink.strDrinkThumb}"/>
        <div class="h-[320px] p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${this._drink.strDrink}</h5>
          <p class="mb-2 font-normal text-gray-700 italic">${this._drink.strAlcoholic}</p>
          <p class="mb-2 font-normal text-gray-700">Ingredients : ${this._ingredients}</p>
          <p class="mb-2 font-normal text-gray-700">Instructions : ${this._drink.strInstructions}</p>
        </div>
      </div>
      `;
  }
}

customElements.define('drink-item', DrinkItem);
