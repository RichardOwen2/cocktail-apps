import './script/component/app-bar.js';
import './script/component/app-footer.js';
import { randomRender, drinkRender } from './script/view/main.js';

import './style/style.css';
import 'flowbite/dist/flowbite.js';

document.addEventListener('DOMContentLoaded', randomRender);
document.addEventListener('DOMContentLoaded', drinkRender);
