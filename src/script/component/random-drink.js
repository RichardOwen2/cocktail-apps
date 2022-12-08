class RandomDrink extends HTMLElement {
  connectedCallback() {
    this.waitingRender();
  }

  set drink(drinks) {
    if (drinks) {
      this.drinks = drinks;
      if (this.drinks.strInstructions.length > 400) {
        this.renderDefault();
      } else {
        this.ingredients = this.getIngredients();
        this.render();
      }
    } else {
      this.renderDefault();
    }
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
    } = this.drinks;

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

    for (let i = 0; i < 15; i += 1) {
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
        <div class="md:flex flex-row items-center">
            <img class="object-cover w-full md:w-64 rounded-t-lg md:rounded-tr-none md:rounded-l-lg" src="${this.drinks.strDrinkThumb}" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <p class="mb-0.5 text-2xl xl:text-2xl font-bold tracking-tight text-gray-900">${this.drinks.strDrink}</p>
                <p class="mb-3 font-normal xl:text-base lg:text-sm text-gray-700 italic">${this.drinks.strAlcoholic}</p>
                <p class="mb-3 font-normal xl:text-base lg:text-sm text-gray-700">Ingredients : ${this.ingredients}</p>
                <p class="mb-3 font-normal xl:text-base lg:text-sm text-gray-700">Instructions : ${this.drinks.strInstructions}</p>
            </div>
        </div>
        `;
  }

  renderDefault() {
    this.innerHTML = `
        <div class="md:flex flex-row items-center">
            <img class="object-cover w-full md:w-64 rounded-t-lg md:rounded-tr-none md:rounded-l-lg" src="https://www.thecocktaildb.com/images/media/drink/709s6m1613655124.jpg" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <p class="mb-0.5 text-2xl xl:text-2xl font-bold tracking-tight text-gray-900">Americano</p>
                <p class="mb-3 font-normal xl:text-base lg:text-sm text-gray-700 italic">Alcoholic</p>
                <p class="mb-3 font-normal xl:text-base lg:text-sm text-gray-700">Ingredients :  1 oz  Campari ,1 oz red  Sweet Vermouth ,Twist of  Lemon peel ,Twist of  Orange peel ,</p>
                <p class="mb-3 font-normal xl:text-base lg:text-sm text-gray-700">Instructions : Pour the Campari and vermouth over ice into glass, add a splash of soda water and garnish with half orange slice.</p>
            </div>
        </div>`;
  }

  waitingRender() {
    this.innerHTML = `
            <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                <div class="flex justify-center items-center w-full h-64 bg-gray-300 rounded sm:w-96">
                    <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                </div>
                <div class="w-full">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
                <span class="sr-only">Loading...</span>
            </div>
        `;
  }
}

customElements.define('random-drink', RandomDrink);
