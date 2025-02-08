
## Getting Started

First, run the local database:
```bash
docker-compose up 
```

Next, run migrations on the database:
```bash
npx drizzle-kit push
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


Run drizzle studio to browse the database:
```base
npx drizzle-kit studio
```
