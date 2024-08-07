-- Conectar a PostgreSQL
--psql -U postgres

-- Create database if it does not exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'dbtransaction') THEN
        CREATE DATABASE dbtransaction;
    END IF;
END
$$;
    
-- Conectarse a la base de datos recién creada
\c dbtransaction

-- Crear las tablas y permisos necesarios
CREATE TABLE public.transacciones
(
    id_debit text COLLATE pg_catalog."default",
    id_credit text COLLATE pg_catalog."default",
    id_transfer_type integer,
    created_at timestamp without time zone DEFAULT now(),
    state boolean DEFAULT true,
    transaction_status character varying(100) COLLATE pg_catalog."default",
    id uuid NOT NULL,
    valor numeric(18,0),
    CONSTRAINT transacciones_pkey PRIMARY KEY (id)
);

-- Conceder permisos
GRANT TEMPORARY, CONNECT ON DATABASE dbtransaction TO PUBLIC;
GRANT ALL ON DATABASE dbtransaction TO postgres;
