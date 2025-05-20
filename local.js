const languages = [
  { text: 'English', value: 'en' },
  { text: 'Spanish', value: 'es' },
 ];

const select = document.getElementById('select-language');

for (let i = 0; i < languages.length; i++) {
  const opt = languages[i];

  const el = document.createElement('option');
  el.textContent = opt.text;
  el.value = opt.value;
  select.appendChild(el);
}
