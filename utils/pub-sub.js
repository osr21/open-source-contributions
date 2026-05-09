/**
 * A simple publish-subscribe event bus.
 */
class PubSub {
  constructor() { this._topics = {}; }

  subscribe(topic, fn) {
    (this._topics[topic] = this._topics[topic] || []).push(fn);
    return () => { this._topics[topic] = this._topics[topic].filter(f => f !== fn); };
  }

  publish(topic, data) {
    (this._topics[topic] || []).forEach(fn => fn(data));
  }

  unsubscribeAll(topic) {
    if (topic) delete this._topics[topic];
    else this._topics = {};
  }

  get topics() { return Object.keys(this._topics); }
}

module.exports = { PubSub };
