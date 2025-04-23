import './styles.css';

export default class SlideIn {
   /**
      * @param {HTMLElement|string} container - Existing element (your sidebar)
      * @param {Object} options
      * @param {Function} [options.onToggle] – optional callback when toggling occurs
      */
   constructor(container, { onToggle = () => {} } = {}) {
      this.container = typeof container === 'string'
      ? document.querySelector(container)
      : container;

      // create toggle button (if you want to use a dynamically created one)
      this.toggle = document.createElement('div');
      this.toggle.classList.add('si-toggle');
      this.toggle.innerHTML = `<span class="bar"></span>`;
      document.body.appendChild(this.toggle);

      // store onToggle callback if needed
      this.onToggle = onToggle;

      // event wiring for the toggle button
      this.toggle.addEventListener('click', () => this._toggle());
   }

   _toggle() {
      const isActive = this.container.classList.toggle('active');
      this.toggle.classList.toggle('active', isActive);
      this.onToggle(isActive);
   }

   // Public API to manually trigger the toggle
   toggleSidebar() {
      this._toggle();
   }
}
