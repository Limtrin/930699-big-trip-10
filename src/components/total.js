import AbstractComponent from './abstract-class.js';

const createRouteTemplate = (events) => {
  let total = 0;

  events.map((event) => {
    const {price, offers} = event;
    total += price;
    offers.map((offer) => {
      total += offer.price;
    });
  });

  return (
    `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${total}</span>
    </p>`
  );
};


export default class Route extends AbstractComponent {
  constructor(events) {
    super();
    this._events = events;
  }

  getTemplate() {
    return createRouteTemplate(this._events);
  }
}