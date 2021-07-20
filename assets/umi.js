function isUrl(url) {
  try {
    new URL(url);
    return url;
  } catch (error) {}

  try {
    new URL(`http://${url}`);
    return `http://${url}`;
  } catch (error) {
    return '';
  }
}

document.getElementById('q').addEventListener('keydown', (e) => {
  const value = e.target.value;
  if (e.code !== 'Enter' || !e.target.value) {
    return;
  }

  if (isUrl(value)) {
    location.href = isUrl(value);
  }
});
