# Task Manager API - Generic SQL/NoSQL

API desarrollada con **NestJS 11**, diseñada bajo el patrón de **Repositorio Genérico** para soportar múltiples motores de base de datos.

## 🛠️ Tecnologías
* **Backend**: NestJS
* **ORM**: Prisma v5.22.0
* **Base de Datos**: PostgreSQL (via Docker)

## 🚀 Despliegue Rápido
1. Levantar DB: `docker-compose up -d`
2. Instalar: `npm install --legacy-peer-deps`
3. Migrar: `npx prisma migrate dev --name init`