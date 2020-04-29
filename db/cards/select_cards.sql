SELECT   c.card_id,c.name,c.bank, c.type, c.annual_fee, c.points, c.img FROM cards c
JOIN users u ON c.user_id = u.user_id
WHERE c.user_id =$1;