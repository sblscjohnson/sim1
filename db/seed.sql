drop table if exists inventory;

create table inventory (
  id serial,
  image_url text,
  product_name varchar(80),
  price varchar(20)
);

insert into inventory (
  image_url,
  product_name,
  price
) values (
  'https://www.tesla.com/content/dam/tesla-site/sx-redesign/img/model3-proto/specs/compare-model3--center.png',
  'Tesla Model 3',
  '35000'
)