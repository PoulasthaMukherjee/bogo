class BOGOSelector {
    constructor() {
        this.options = document.querySelectorAll('.option');
        this.totalPriceElement = document.getElementById('totalPrice');
        this.prices = {
            '1': '$10.00 USD',
            '2': '$18.00 USD',
            '3': '$24.00 USD'
        };
        this.init();
    }
    init() {
        this.options.forEach(option => {
            const header = option.querySelector('.option-header');
            if (header) {
                header.addEventListener('click', () => this.handleOptionClick(option));
            }
        });
    }
    handleOptionClick(clickedOption) {
        const isCurrentlyExpanded = clickedOption.classList.contains('expanded');
        this.deselectAllOptions();
        this.selectOption(clickedOption, isCurrentlyExpanded);
        this.updateTotal(clickedOption.dataset.unit);
    }
    deselectAllOptions() {
        this.options.forEach(option => {
            option.classList.remove('selected', 'expanded');
        });
    }
    selectOption(option, wasExpanded) {
        option.classList.add('selected');
        if (!wasExpanded) {
            option.classList.add('expanded');
        }
    }
    updateTotal(unit) {
        if (this.totalPriceElement && this.prices[unit]) {
            this.totalPriceElement.textContent = this.prices[unit];
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new BOGOSelector();
});