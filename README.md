# En chrome
- Clonar repo `git clone https://github.com/mdemaredeb/debNumia`
- Abrir chrome, ir a `chrome://extensions/`
- Activar "Developer mode", arriba a la derecha
- Tocar el botón "Load unpacked"
- Navegar hasta donde está clonado el repo, y abrir la carpeta
- Tocar el ícono de extensiones (pieza de rompecabeza, arriba a la derecha, al lado del
input de URL), y pinnear debNumia, para tener acceso rápido a URLs

# En firefox
- Clonar repo `git clone https://github.com/mdemaredeb/debNumia`
- Generar API keys en [https://addons.mozilla.org/es/developers/addon/api/key/](https://addons.mozilla.org/es/developers/addon/api/key/)
- Instalar web-ext: `npm i -g web-ext` (con una versión de node reciente)
- Compilar y firmar: `web-ext sign --channel="unlisted" --api-key="user:12345678:123" --api-secret="lfjkasdjdsfkjdslf65444984fjjfosdjfiajfoiadj465984"`
- Instalar el .xpi generado desde `about:addons`
- Tocar el ícono de extensiones (pieza de rompecabeza, arriba a la derecha, al lado del
input de URL), y pinnear debNumia, para tener acceso rápido a URLs

- Alternativamente, se puede cargar sin empaquetar desde `about:debugging#/runtime/this-firefox`, pero sólo sirve para esa sesión, al reiniciar el navegador se borra

