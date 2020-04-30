SELECT SUM (points)
FROM cards
WHERE user_id = $1;