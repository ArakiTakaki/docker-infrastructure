# Getting Started

require software
- docker


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
