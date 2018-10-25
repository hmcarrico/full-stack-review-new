-- drop table if exists users;
-- drop table if exists couches;

create table if not exists users(
    id serial primary key,
    auth0_id textnot null,
    email text not null,
    name text not null,
    picture text not null
);

create table if not exists couches (
    id serial primary key,
    user_id int references users(id),
    name text not null,
    price int not null,
    image text not null
);

select * from couches;
select * from users;
