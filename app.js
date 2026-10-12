const statusEl = document.getElementById('offlineStatus');
const cacheMessage = document.getElementById('cacheMessage');
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('./sw.js');
      await navigator.serviceWorker.ready;
      statusEl.textContent = 'Offline setup enabled · open once while online';
      cacheMessage.textContent = 'Offline support is registered. Keep this page open briefly while online, then test in airplane mode.';
    } catch (e) {
      statusEl.textContent = 'Offline setup could not be enabled in this browser';
      cacheMessage.textContent = 'Use Print / Save as PDF or take screenshots as a backup.';
    }
  });
} else {
  statusEl.textContent = 'For offline support, open this hosted page in a browser';
}
document.getElementById('textToggle').addEventListener('click', e => {
  const on = document.documentElement.classList.toggle('big-text');
  e.currentTarget.setAttribute('aria-pressed', String(on));
  e.currentTarget.textContent = on ? 'A− Normal text' : 'A+ Bigger text';
});
document.getElementById('printBtn').addEventListener('click', () => window.print());
document.getElementById('retryCache').addEventListener('click', async () => {
  if (!('serviceWorker' in navigator)) { cacheMessage.textContent = 'This browser does not support offline caching. Print or screenshot the guide.'; return; }
  try {
    await navigator.serviceWorker.ready;
    const keys = await caches.keys();
    cacheMessage.textContent = keys.some(k => k.startsWith('urappakkam-guide-')) ? 'The guide files have been cached. Now test by turning on airplane mode and reopening this page.' : 'Still preparing offline files. Keep the page open while online, then try again.';
  } catch { cacheMessage.textContent = 'Could not check offline storage. Print or screenshot the guide as backup.'; }
});
