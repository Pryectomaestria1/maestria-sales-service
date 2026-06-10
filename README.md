# Maestria - Sales Service 💳

Microservicio encargado de gestionar el proceso de compra simulado de cursos y facturación. Emite un evento a RabbitMQ (`sales_queue`) cuando una compra se completa satisfactoriamente. Utiliza PostgreSQL con Prisma.

## 🚀 Requisitos e Instalación

### 1. Contratos gRPC (Obligatorio)
Clona el repositorio de contratos en el **mismo directorio padre** donde está este microservicio con el nombre `grpc-contracts`:

```bash
# Desde el directorio padre común:
git clone https://github.com/Pryectomaestria1/maestria-grpc-contracts.git grpc-contracts
```

La estructura de carpetas debe quedar así:
```
directorio-padre/
├── maestria-sales-service/  (Este repositorio)
└── grpc-contracts/
```

### 2. Base de Datos (Prisma)
Asegúrate de tener la infraestructura de Docker encendida (`docker-compose up -d` en el gateway) y aplica el esquema de la base de datos:

```bash
npm install
npx prisma db push
```

### 3. Ejecución del Servicio
Inicia el microservicio en modo desarrollo (corre en el puerto gRPC `50055`):

```bash
npm run start:dev
```
