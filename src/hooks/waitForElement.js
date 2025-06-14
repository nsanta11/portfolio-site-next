export function waitForElement(selector, maxRetries = 10, interval = 100) {
    return new Promise((resolve, reject) => {
      let retries = 0;
      const check = () => {
        const el = document.querySelector(selector);
        if (el) return resolve(el);
        retries++;
        if (retries >= maxRetries) return reject(new Error(`Element ${selector} not found.`));
        setTimeout(check, interval);
      };
      check();
    });
  }
  