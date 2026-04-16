-- ============================================================
-- DALT Importaciones - Funciones SQL para decrementar stock
-- Correr en: Supabase Dashboard > SQL Editor > New Query
-- Correr DESPUÉS de migration.sql
-- ============================================================

-- Decrementa stock de un producto (sin variantes)
CREATE OR REPLACE FUNCTION decrement_product_stock(product_id UUID, qty INTEGER)
RETURNS void AS $$
BEGIN
  UPDATE products
  SET stock = GREATEST(stock - qty, 0)
  WHERE id = product_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Decrementa stock de una variante
CREATE OR REPLACE FUNCTION decrement_variant_stock(variant_id UUID, qty INTEGER)
RETURNS void AS $$
BEGIN
  UPDATE product_variants
  SET stock = GREATEST(stock - qty, 0)
  WHERE id = variant_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
