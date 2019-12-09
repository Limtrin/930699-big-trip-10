import {createElement} from '../utils.js';

const createRouteTemplate = (events) => {
  let cityArray = [];
  let eventsDate = [];

  events.map((event) => {
    const {city, dateBegining} = event;
    cityArray.push(city);
    eventsDate.push(dateBegining);
  });

  return (
    `<div class="trip-info__main">
        <h1 class="trip-info__title">${cityArray[0]} &mdash; ... &mdash; ${cityArray[cityArray.length - 1]}</h1>

        <p class="trip-info__dates">${eventsDate[0].toLocaleDateString(`en-US`, {month: `short`})} ${eventsDate[0].getDay()}&nbsp;&mdash;&nbsp;${eventsDate[eventsDate.length - 1].getDay()}</p>
    </div>`
  );
};


export default class Route {
  constructor(events) {
    this._events = events;
    this._element = null;
  }

  getTemplate() {
    return createRouteTemplate(this._events);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
