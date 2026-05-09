# SQL Cheat Sheet

## Basics
SELECT col FROM table WHERE cond ORDER BY col LIMIT n;

## Joins
INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN

## Aggregates
COUNT, SUM, AVG, MIN, MAX — use with GROUP BY.
HAVING filters groups; WHERE filters rows.

## Window Functions
ROW_NUMBER(), RANK(), LAG(), LEAD(), SUM() OVER (PARTITION BY ...)

## Upsert
INSERT INTO t (...) VALUES (...) ON CONFLICT (id) DO UPDATE SET col = excluded.col;
