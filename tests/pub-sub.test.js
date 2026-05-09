const { PubSub } = require('../utils/pub-sub');

describe('PubSub', () => {
  it('delivers published data to subscribers', () => {
    const bus = new PubSub();
    const fn = vi.fn();
    bus.subscribe('click', fn);
    bus.publish('click', { x: 10 });
    expect(fn).toHaveBeenCalledWith({ x: 10 });
  });

  it('unsubscribes correctly', () => {
    const bus = new PubSub();
    const fn = vi.fn();
    const unsub = bus.subscribe('test', fn);
    unsub();
    bus.publish('test', 'data');
    expect(fn).not.toHaveBeenCalled();
  });

  it('supports multiple subscribers', () => {
    const bus = new PubSub();
    const a = vi.fn(), b = vi.fn();
    bus.subscribe('event', a);
    bus.subscribe('event', b);
    bus.publish('event', 42);
    expect(a).toHaveBeenCalledWith(42);
    expect(b).toHaveBeenCalledWith(42);
  });
});
