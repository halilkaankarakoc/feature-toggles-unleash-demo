# feature-toggles-demo

Demo project for experimenting feature toggles using Unleash.

Unleash Documentation: https://docs.getunleash.io/

### `Step 1`: Setup Unleash

```
cd unleash-docker
docker-compose build
docker-compose up

Go to http://localhost:4242

username: unleash
password: unleash4all
```

### `Step 2`: Create feature toggles

```
grid-layout-feature -> Standard strategy

grid-layout-feature-userId -> userIDs strategy

grid-layout-feature-rollout -> Gradual Rollout strategy

async-database-service-feature -> Standard strategy
```

### `Step 3`: Setup api and frontend

api
```
cd api
yarn install
yarn start:dev
```

frontend
```
cd frontend
yarn install
yarn start
```

### `Step 4`: Play with them :)

