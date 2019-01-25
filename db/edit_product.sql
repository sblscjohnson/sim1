update inventory
set image_url = $1, product_name = $2, price = $3
where id = $4;
