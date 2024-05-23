DO $$
BEGIN
   IF NOT EXISTS (
      SELECT
      FROM   pg_catalog.pg_user
      WHERE  usename = 'ai') THEN
      CREATE USER ai WITH ENCRYPTED PASSWORD 'ai';
   END IF;
END
$$;

DO $$
BEGIN
   IF NOT EXISTS (
      SELECT
      FROM   pg_database
      WHERE  datname = 'ai') THEN
      CREATE DATABASE ai;
      GRANT ALL PRIVILEGES ON DATABASE ai TO ai;
   END IF;
END
$$;
