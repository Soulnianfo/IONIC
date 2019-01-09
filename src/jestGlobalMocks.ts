const mock = () => {
  let storage = {};
  return {
    getItem: key => key in storage ? storage[key] : null,
    setItem: (key, value) => storage[key] = value || '',
    removeItem: key => delete storage[key],
    clear: () => storage = {},
  };
};

const ENV = {
  API_URL: 'API_RUL',
  HTTP_RETRY: 0
};

Object.defineProperty(window, 'localStorage', {value: mock()});
Object.defineProperty(window, 'sessionStorage', {value: mock()});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ['-webkit-appearance']
});

DOMParser.prototype.parseFromString = (string, contenType) => {
  // Create a new document, since we're supposed to always return one.
  let doc = document.implementation.createHTMLDocument(''),
    body = doc.body,
    last;
  // Set the body's HTML, then change the DOM according the specs.
  body.innerHTML = string;
  // Remove all top-level children (<html><head/><body/></html>)
  while (last = doc.lastChild)
    doc.removeChild(last);
  // Insert the first child of the body at the top.
  doc.appendChild(body.firstChild);
  return doc;
};

Object.defineProperty(window, 'ENV', {value: ENV});


