class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="flex bg-[#000000] shadow p-5">
      <h1 class="text-3xl font-semibold text-white">Cocktail Recipe</h1>
    </div>`;
  }
}

customElements.define('app-bar', AppBar);
