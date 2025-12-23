# Prisma migration and genrate command  

npx prisma migrate dev --name init
npx prisma generate

npx prisma db pull 

npx prisma migrate reset


# Prisma seed data 

npx prisma db seed


# NestJS Backend Template

A NestJS backend template with PostgreSQL, Prisma, Docker, and development tooling.

## Prerequisites

- Node.js (v22 or higher)
- pnpm (package manager)
- Docker and Docker Compose
- PostgreSQL (if running without Docker)

## Installation

```bash
pnpm install
```

## Environment Setup

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
DB_USER=user
DB_PASSWORD=password
DB_NAME=dbname

# Application
PORT=5000
```

## Docker Commands

### Start Database

```bash
docker-compose up -d
# or
docker-compose up -d
```

### Stop Database

```bash
pnpm run docker:down
# or
docker-compose down
```

### Restart Database

```bash
pnpm run docker:restart
# or
docker-compose restart
```

### View Database Logs

```bash
pnpm run docker:logs
# or
docker-compose logs -f db
```

### Remove Database Volume (Clean Reset)

```bash
pnpm run docker:clean
# or
docker-compose down -v
```

## Prisma Commands

### Generate Prisma Client

```bash
pnpm run prisma:generate
# or
pnpm prisma generate
```

### Create Migration

```bash
pnpm run prisma:migrate --name migration_name
# or
pnpm prisma migrate dev --name migration_name
```

### Apply Migrations

```bash
pnpm run prisma:migrate:deploy
# or
pnpm prisma migrate deploy
```

### Reset Database

```bash
pnpm run prisma:migrate:reset
# or
pnpm prisma migrate reset
```

### View Database (Prisma Studio)

```bash
pnpm run prisma:studio
# or
pnpm prisma studio
```

### Format Schema

```bash
pnpm run prisma:format
# or
pnpm prisma format
```

## Development

### Start Development Server

```bash
pnpm run start:dev
```

### Build for Production

```bash
pnpm run build
```

### Start Production Server

```bash
pnpm run start:prod
```

### Start with Debug

```bash
pnpm run start:debug
```

## Code Quality

### Format Code

```bash
pnpm run format
```

### Lint Code

```bash
pnpm run lint
```

## Testing

### Run Unit Tests

```bash
pnpm run test
```

### Run Tests in Watch Mode

```bash
pnpm run test:watch
```

### Run E2E Tests

```bash
pnpm run test:e2e
```

### Run Tests with Coverage

```bash
pnpm run test:cov
```

## Project Structure

```
src/
├── main.ts              # Application entry point
├── app.module.ts        # Root module
├── app.controller.ts    # Root controller
├── app.service.ts       # Root service
└── generated/           # Generated Prisma client

libs/
└── common/              # Shared library

prisma/
├── schema.prisma        # Prisma schema
└── migrations/          # Database migrations

test/                    # E2E tests
```

## Quick Start

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env  # Edit .env with your values
   ```

3. Start PostgreSQL with Docker:
   ```bash
   pnpm run docker:up
   ```

4. Run Prisma migrations:
   ```bash
   pnpm run prisma:migrate
   ```

5. Generate Prisma client:
   ```bash
   pnpm run prisma:generate
   ```

6. Start development server:
   ```bash
   pnpm run start:dev
   ```

The application will be available at `http://localhost:5000`

## Available Scripts

### Development
- `build` - Build the application
- `start` - Start the application
- `start:dev` - Start in development mode with watch
- `start:debug` - Start in debug mode
- `start:prod` - Start in production mode

### Code Quality
- `format` - Format code with Prettier
- `lint` - Lint code with ESLint

### Testing
- `test` - Run unit tests
- `test:watch` - Run tests in watch mode
- `test:cov` - Run tests with coverage
- `test:e2e` - Run end-to-end tests

### Prisma
- `prisma:generate` - Generate Prisma client
- `prisma:migrate` - Create and apply migration
- `prisma:migrate:deploy` - Apply migrations
- `prisma:migrate:reset` - Reset database
- `prisma:studio` - Open Prisma Studio
- `prisma:format` - Format Prisma schema

### Docker
- `docker:up` - Start database container
- `docker:down` - Stop database container
- `docker:restart` - Restart database container
- `docker:logs` - View database logs
- `docker:clean` - Remove database volume (clean reset)
