SELECT   c.name, c.type, c.annaul_fee, c.points, c.img, c.bank FROM cards c
JOIN users u ON c.user_id = u.user_id
WHERE c.user_id =$1;