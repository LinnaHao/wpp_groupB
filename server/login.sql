
create table account (
  id serial primary key,
  username varchar(100) unique not null,
  password varchar(255) not null
);

insert into account (username,password) values ('admin','admin123');
