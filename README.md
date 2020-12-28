Build image:

```sh
docker build -t todo:dev
```

Run:

```sh
docker run -it --rm -p 3000:3000 -v ${pwd}:/app -v /app/node_modules todo:dev
```

Using docker-compose:

```sh
docker-compose up -d --build
```
