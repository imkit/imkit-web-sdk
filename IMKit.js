(() => {
  window.IMKit = window.IMKit || {};

  IMKit.Object = {
    fromEntries: entries =>
      [...entries].reduce(
        (object, [key, val]) => ({...object, [key]: val}),
        {},
      ),
  };

  IMKit.Token = {
    KEY: 'IMKit-token',

    get: () => localStorage[IMKit.Token.KEY],

    init: maybeToken =>
      maybeToken ? IMKit.Token.set(maybeToken) : IMKit.Token.get(),

    set: token => {
      localStorage[IMKit.Token.KEY] = token;
      return token;
    },
  };

  IMKit.URL = {
    getParams: () =>
      IMKit.Object.fromEntries(new URLSearchParams(location.search)),
  };
})();
