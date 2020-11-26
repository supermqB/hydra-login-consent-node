$.on(document, "DOMContentLoaded", () => {
  $(`[name='_csrf']`).value = csrfToken;
  $(`[name='challenge']`).value = challenge;
});
