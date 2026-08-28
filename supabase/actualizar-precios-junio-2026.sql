-- ============================================================
-- ACTUALIZACIÓN DE PRECIOS Y STOCK — JUNIO 2026
-- Ejecutar en: Supabase Dashboard → SQL Editor
-- ============================================================

-- SIN STOCK (stock = 0): Cama ortopédica desmontable + Escalera
UPDATE products SET stock = 0 WHERE slug = 'cama-ortopedica-baylor';
UPDATE products SET stock = 0 WHERE slug = 'escalera-rampa-ortopedica-baylor';

-- Sillón premium → últimos 2 en stock + precio $200.000
UPDATE products SET price_ars = 20000000, stock = 2 WHERE slug = 'sofa-premium-baylor';

-- Sillón redondo ortopédico → $55.000
UPDATE products SET price_ars = 5500000 WHERE slug = 'sillon-redondo-ortopedico-baylor';

-- Arnés de paseo → $12.000
UPDATE products SET price_ars = 1200000 WHERE slug = 'arnes-paseo-senye';

-- Bebedero automático → $28.000
UPDATE products SET price_ars = 2800000 WHERE slug = 'bebedero-comedero-automatico-senye';

-- Bolso de tela y cuero → $60.000
UPDATE products SET price_ars = 6000000 WHERE slug = 'bolso-mascota-senye';

-- Mochila para mascotas → $63.000
UPDATE products SET price_ars = 6300000 WHERE slug = 'mochila-mascota-senye';

-- Bolso de lado extensible → $50.000
UPDATE products SET price_ars = 5000000 WHERE slug = 'bolso-extensible-senye';

-- Caja de piedritas para gato → $45.000
UPDATE products SET price_ars = 4500000 WHERE slug = 'caja-piedritas-gato-senye';

-- Tacho reciclaje 240 litros → $180.000
UPDATE products SET price_ars = 18000000 WHERE slug = 'tacho-pedal-240lts-lvxing';

-- ============================================================
-- VERIFICACIÓN: correr esto después para confirmar los cambios
-- ============================================================
SELECT slug, name, price_ars / 100 AS precio_ars, stock
FROM products
WHERE slug IN (
  'cama-ortopedica-baylor',
  'escalera-rampa-ortopedica-baylor',
  'sofa-premium-baylor',
  'sillon-redondo-ortopedico-baylor',
  'arnes-paseo-senye',
  'bebedero-comedero-automatico-senye',
  'bolso-mascota-senye',
  'mochila-mascota-senye',
  'bolso-extensible-senye',
  'caja-piedritas-gato-senye',
  'tacho-pedal-240lts-lvxing'
)
ORDER BY slug;
