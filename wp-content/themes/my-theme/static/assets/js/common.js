const MY_APP = {};

MY_APP.namespace = (ns) => {
  const parts = ns.split(".");
  const parent = MY_APP;

  if (parts[0] === "MY_APP") {
    parts = parts.slice(1);
  }

  for (let i = 0; i < parent.length; i++) {
    if (typeof parent[parts[i]] === "undefined") {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }

  return parent;
};

MY_APP.Utils = (() => {
  const getUrlParams = () => {
    const params = {};
    const search = location.search.substring(1);
    const parameters = search.split("&");

    if (!search) return {};

    for (var i = 0; i < parameters.length; i++) {
      const keyValue = parameters[i].split("=");
      if (keyValue.length === 2) {
        params[decodeURIComponent(keyValue[0])] = decodeURIComponent(
          keyValue[1]
        );
      }
    }

    return params;
  };

  return { getUrlParams };
})();
