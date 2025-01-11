# Vehicle Transfer API

## Descripción
API REST desarrollada con NestJS implementando arquitectura hexagonal (puertos y adaptadores) para gestionar transferencias de vehículos.

## URLs
- **API**: [https://api-module-vehicle-transfer.onrender.com/](https://api-module-vehicle-transfer.onrender.com/)
- **Swagger Documentation**: [https://api-module-vehicle-transfer.onrender.com/api/docs](https://api-module-vehicle-transfer.onrender.com/api/docs)

## Tecnologías Utilizadas
- NestJS
- TypeORM
- PostgreSQL
- Redis
- JWT
- Swagger
- Helmet
- Rate Limiting

## Arquitectura Hexagonal
El proyecto sigue los principios de la arquitectura hexagonal (ports & adapters):

```
src/
├── domain/
│   ├── entities/
│   ├── ports/
│   └── services/
├── infrastructure/
│   ├── adapters/
│   ├── config/
│   └── persistence/
└── application/
    ├── controllers/
    ├── dtos/
    └── use-cases/
```

### Capas
- **Domain**: Contiene la lógica de negocio, entidades y puertos
- **Infrastructure**: Implementa los adaptadores y configuración
- **Application**: Maneja los casos de uso y controladores

## Configuración Local del Proyecto

### Prerequisitos
- Node.js (v18 o superior)
- PostgreSQL
- Redis

### Variables de Entorno
1. Crear un archivo `.env` en la raíz del proyecto:

```env
PORT=8000
DB_TYPE=postgres
DB_HOST=your_host
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_NAME=vehicle_transfer
NODE_ENV=development
JWT_SECRET=your_secret_key
```

### Configuración de Base de Datos
1. Crear la base de dato vehicle_transfer.
2. Importar o ejecutar el query con los datos en el archivo vehicle_transfer.sql`.


### Instalación y Ejecución
```bash
# Clonar el repositorio
git clone <repository-url>

# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run start:dev

# Iniciar en producción
npm run build
npm run start:prod
```

## Documentación API
La documentación de la API está disponible a través de Swagger UI en `/api/docs`.

### Endpoints Principales
- `POST /auth/login`: Login de usuarios
- `POST /transfers`: Crear transferencia
- `GET /transfers`: Obtener transferencias

## Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.