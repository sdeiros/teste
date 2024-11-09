self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Nova Notificação';
  const options = {
      body: data.body || 'Mensagem da notificação',
      icon: data.icon || 'default-icon.png',
      badge: 'icons/badge-72x72.png',
      timestamp: Date.now(),
  };

  event.waitUntil(
      self.registration.showNotification(title, options)
  );
});
