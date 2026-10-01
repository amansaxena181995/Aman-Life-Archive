const search = document.querySelector('#search');
const category = document.querySelector('#category');
const entries = [...document.querySelectorAll('.entry')];
function filterEntries() {
  const term = search.value.trim().toLocaleLowerCase();
  let count = 0;
  for (const entry of entries) {
    const match = (!category.value || entry.dataset.category === category.value) && entry.dataset.search.toLocaleLowerCase().includes(term);
    entry.hidden = !match;
    if (match) count++;
  }
  document.querySelector('#empty').hidden = count !== 0;
  document.querySelector('#result-count').textContent = `${count} ${count === 1 ? 'entry' : 'entries'} shown`;
}
search.addEventListener('input', filterEntries);
category.addEventListener('change', filterEntries);
filterEntries();
