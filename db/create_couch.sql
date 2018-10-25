insert into couches (user_id, name, price, image)
values
($1,$2,$3,$4)
returning *;