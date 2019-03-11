# Getting Started

require software
- docker

## getting docker-compose

1. `$ git clone https://github.com/ArakiTakaki/docker-infrastructure`
2. `$ cd docker-infrastructure`
3. `$ cp .env.example .env`

## started mysql

- `$ docker-compose -d rdb`

### healt hcheck

- `$ docker-compose exec rdb bash`
- `$ mysql -u root -p` -> type of `.env` password
- `> show databases`

## started mongo

- `$ docker-compose -d mongo`

### healt hcheck

- `$ docker-compose exec mongo bash`
- `$ mongo`
- `> db.posts.count()`

## started dynamo

- `$ docker-compose up -d dynamo-admin`

### healt hcheck

- `$ open http://localhost:8011`
