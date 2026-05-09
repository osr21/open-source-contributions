class FSM {
  constructor(cfg) { this.state = cfg.initial; this.transitions = cfg.transitions; }
  can(event) { return !!(this.transitions[this.state]?.[event]); }
  send(event) {
    if (!this.can(event)) throw new Error('Cannot send "' + event + '" from "' + this.state + '"');
    this.state = this.transitions[this.state][event];
    return this.state;
  }
}
module.exports = { FSM };
