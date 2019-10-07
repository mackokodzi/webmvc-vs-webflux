# Spring WebFlux Client Cars Service

### Postgres
Install locally postgres:
https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb

```
brew install postgres
brew services start postgresql
psql postgres
CREATE USER postgres SUPERUSER;
CREATE DATABASE cars WITH OWNER postgres;
```

login to db:
```
psql -h localhost -p 5432 -U postgres cars
```
