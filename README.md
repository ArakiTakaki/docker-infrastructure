# Getting Started

require software
- docker


1. `$ git clone https://github.com/ArakiTakaki/docker-infrastructure`
2. `$ cd docker-infrastructure`
3. `$ cp .env.example .env`

## started mysql

2. `$ docker-compose -d rdb`

### healt hcheck

1. `$ docker-compose exec rdb bash`
2. `$ mysql -u root -p` -> type of `.env` password
3. `> show databases`

## started mongo

2. `$ docker-compose -d mongo`

### healt hcheck

1. `$ mongo`
2. `> db.posts.count()`
