# fifa-api

Node.js + MySQL API for User Management, Authentication and Registration

For documentation and instructions see https://jasonwatmore.com/post/2020/08/18/nodejs-mysql-simple-api-for-authentication-registration-and-user-management# fifaserver

# Clonar repo con git clone https://github.com/neoxyx/fifaserver.git
# Ir a carpeta del proyecto con cd fifaserver
# Instalar paquetes con npm install
# Ejecutar servidor node con npm start

Rutas de api

Obtener equipos http://localhost:4000/api/v1/team
tipo POST. Request ej: {
    "Name": "juventus",
    "Page": 1
}

Obtener juagadores por nombre o indicios de nombre http://localhost:4000/api/v1/players
tipo GET. ej: http://localhost:4000/api/v1/players?search=cristi&order=desc&page=1
