insert into users2 (auth0_id, email, name, picture) values (${auth0_id}, ${email}, ${name}, ${picture}) returning *;
