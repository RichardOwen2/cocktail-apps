class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="p-[30px] bg-[#000000]">
                <p class="text-white font-bold text-center">Cocktail Apps @ 2022, Richard Owen Hoan</p>
            </div>
        `;
  }
}

customElements.define('app-footer', AppFooter);
