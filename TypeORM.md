
### [TypeORM Documentation](https://typeorm.io/)

Object-relational mapping **(ORM)** is the bridge between the API and database.

Changing the **entity** — aka **data model** (TypeORM class that stores an object’s state in the database) — will update the **schema** during synchronization or **migration**.

`ormconfig.json`: the config file that gets generated when you initialize a new TypeORM project with `typeorm init`:
```
{
   "type": "postgres",
   "host": "localhost",
   "port": 5432,
   "username": "test",
   "password": "test",
   "database": "test",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/**/*.entities.ts"
   ],
   "migrations": [
      "migrations/**/*.ts"
   ],
   "cli": {
      "migrationsDir": "src/migration"
   }
}
```

`synchronize` makes sure your entities will be synced with the database, every time you run the application.

More at: https://betterprogramming.pub/typeorm-migrations-explained-fdb4f27cb1b3
