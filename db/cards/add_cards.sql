INSERT INTO cards(name, bank,type, annual_fee, points, img, user_id)
VALUES
($1, $2, $3, $4, $5, $6, $7)
RETURNING *;