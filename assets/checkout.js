/* Offload checkout links. Paste each Lemon Squeezy checkout URL between the quotes.
   A kit with an empty link keeps its button on the email list, so nothing breaks before launch. */
window.OFFLOAD_CHECKOUT = {
  agency:  '',  // The Book Detective Agency, $12
  hardday: '',  // The Hard Day Kit, founding edition, $15
  library: '',  // The Household Library, $27
  seminar: '',  // The Seminar Kit, $19
  archive: ''   // The Archive Kit, $19
};
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-kit]').forEach(function (a) {
    var url = window.OFFLOAD_CHECKOUT[a.dataset.kit];
    if (url) { a.href = url; a.textContent = a.dataset.buy; }
  });
});
