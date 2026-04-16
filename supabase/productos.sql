-- ============================================================
-- PRODUCTOS DALT IMPORTACIONES
-- Ejecutar en Supabase SQL Editor
-- Precios en centavos (x100)
-- ============================================================

-- Limpiar datos existentes
DELETE FROM product_images;
DELETE FROM product_variants;
DELETE FROM orders;
DELETE FROM products;

-- ============================================================
-- BAYLOR
-- ============================================================

INSERT INTO products (brand_id, name, slug, sku, description, price_ars, stock, active, category)
VALUES
  ((SELECT id FROM brands WHERE name ILIKE '%baylor%'), 'Cama/Sillón ortopédica para perro desmontable', 'cama-ortopedica-baylor', 'BAY-CAMA-001', 'Altura 16 cm, largo 74 cm, ancho 48 cm. Tapa desmontable para fácil lavado. Talles y colores disponibles, consultá por WhatsApp.', 4500000, 10, true, 'mascotas'),
  ((SELECT id FROM brands WHERE name ILIKE '%baylor%'), 'Escalera/rampa ortopédica soft de espuma viscoelástica para perros', 'escalera-rampa-ortopedica-baylor', 'BAY-ESC-001', 'Altura 35 cm, largo 54 cm, ancho 39 cm. Espuma viscoelástica de alta densidad. Talles y colores disponibles, consultá por WhatsApp.', 4500000, 10, true, 'mascotas'),
  ((SELECT id FROM brands WHERE name ILIKE '%baylor%'), 'Sillón redondo ortopédico para mascotas', 'sillon-redondo-ortopedico-baylor', 'BAY-SIL-001', 'Altura 28 cm, largo 60 cm, ancho 60 cm. Diseño redondo con bordes acolchados. Talles y colores disponibles, consultá por WhatsApp.', 4500000, 10, true, 'mascotas'),
  ((SELECT id FROM brands WHERE name ILIKE '%baylor%'), 'Sofá tipo sillón premium para mascotas', 'sofa-premium-baylor', 'BAY-SIL-002', 'Altura 38 cm, largo 60 cm, ancho 80 cm. Modelo premium con respaldo alto. Talles y colores disponibles, consultá por WhatsApp.', 18500000, 10, true, 'mascotas');

INSERT INTO product_images (product_id, url, is_primary, position)
VALUES
  ((SELECT id FROM products WHERE slug = 'cama-ortopedica-baylor'), '/productos/baylor/cama.jpeg', true, 1),
  ((SELECT id FROM products WHERE slug = 'escalera-rampa-ortopedica-baylor'), '/productos/baylor/escalera.jpeg', true, 1),
  ((SELECT id FROM products WHERE slug = 'sillon-redondo-ortopedico-baylor'), '/productos/baylor/sillon-2.jpeg', true, 1),
  ((SELECT id FROM products WHERE slug = 'sofa-premium-baylor'), '/productos/baylor/sillon-premium.jpeg', true, 1);

-- ============================================================
-- LVXING
-- ============================================================

INSERT INTO products (brand_id, name, slug, sku, description, price_ars, stock, active, category)
VALUES
  ((SELECT id FROM brands WHERE name ILIKE '%lvxing%'), 'Tacho/cesto de basura doble reciclaje/basura 30 Lts', 'tacho-doble-30lts-lvxing', 'LVX-T30-001', 'Capacidad 30 litros. Compartimiento doble para separar reciclables de basura general.', 4500000, 10, true, 'hogar'),
  ((SELECT id FROM brands WHERE name ILIKE '%lvxing%'), 'Tacho/cesto de basura doble reciclaje/basura 40 Lts', 'tacho-doble-40lts-lvxing', 'LVX-T40-001', 'Capacidad 40 litros. Compartimiento doble para separar reciclables de basura general.', 5000000, 10, true, 'hogar'),
  ((SELECT id FROM brands WHERE name ILIKE '%lvxing%'), 'Tacho reciclaje con tapa y pedal automático 240 Lts', 'tacho-pedal-240lts-lvxing', 'LVX-T240-001', 'Capacidad 240 litros. Tapa con apertura automática por pedal. Ideal para uso comercial o institucional.', 13000000, 5, true, 'hogar'),
  ((SELECT id FROM brands WHERE name ILIKE '%lvxing%'), 'Tacho de reciclaje 660 Lts', 'tacho-reciclaje-660lts-lvxing', 'LVX-T660-001', 'Capacidad 660 litros. Para uso institucional o industrial.', 42000000, 3, true, 'hogar'),
  ((SELECT id FROM brands WHERE name ILIKE '%lvxing%'), 'Tacho reciclaje 1100 Lts', 'tacho-reciclaje-1100lts-lvxing', 'LVX-T1100-001', 'Capacidad 1100 litros. Para uso industrial o municipal.', 65000000, 3, true, 'hogar');

INSERT INTO product_images (product_id, url, is_primary, position)
VALUES
  ((SELECT id FROM products WHERE slug = 'tacho-doble-30lts-lvxing'), '/productos/lvxing/tacho-30lts.jpeg', true, 1),
  ((SELECT id FROM products WHERE slug = 'tacho-doble-30lts-lvxing'), '/productos/lvxing/tacho-30lts-2.jpeg', false, 2),
  ((SELECT id FROM products WHERE slug = 'tacho-doble-40lts-lvxing'), '/productos/lvxing/tacho-40lts.jpeg', true, 1),
  ((SELECT id FROM products WHERE slug = 'tacho-doble-40lts-lvxing'), '/productos/lvxing/tacho-40lts-2.jpeg', false, 2),
  ((SELECT id FROM products WHERE slug = 'tacho-pedal-240lts-lvxing'), '/productos/lvxing/240lts.jpg', true, 1),
  ((SELECT id FROM products WHERE slug = 'tacho-reciclaje-660lts-lvxing'), '/productos/lvxing/tacho-1100lts.jpg', true, 1),
  ((SELECT id FROM products WHERE slug = 'tacho-reciclaje-1100lts-lvxing'), '/productos/lvxing/tacho-1100lts.jpg', true, 1);

-- ============================================================
-- SENYE
-- ============================================================

INSERT INTO products (brand_id, name, slug, sku, description, price_ars, stock, active, category)
VALUES
  ((SELECT id FROM brands WHERE name ILIKE '%senye%'), 'Arnés de paseo anti-tirón regulable de doble gancho', 'arnes-paseo-senye', 'SEN-PRE-001', 'Talles S, M, L y XL disponibles. Colores: consultá por WhatsApp. Anti-tirón con doble punto de enganche para mayor control.', 1000000, 20, true, 'mascotas'),
  ((SELECT id FROM brands WHERE name ILIKE '%senye%'), 'Bebedero/comedero automático para mascota', 'bebedero-comedero-automatico-senye', 'SEN-BEB-001', 'Capacidad 3.5 kg. Dispensador automático de agua y comida. Ideal para ausencias prolongadas.', 2350000, 15, true, 'mascotas'),
  ((SELECT id FROM brands WHERE name ILIKE '%senye%'), 'Bolso de tela y cuero de alta calidad para mascotas', 'bolso-mascota-senye', 'SEN-BOL-001', 'Alto 28 cm, largo 44 cm, ancho 25 cm. Tela y cuero de alta calidad. Colores disponibles, consultá por WhatsApp.', 5000000, 10, true, 'mascotas'),
  ((SELECT id FROM brands WHERE name ILIKE '%senye%'), 'Mochila para mascotas', 'mochila-mascota-senye', 'SEN-MOC-001', 'Alto 38 cm, largo 24 cm, ancho 30 cm. Diseño ergonómico con ventilación. Colores disponibles, consultá por WhatsApp.', 5500000, 10, true, 'mascotas'),
  ((SELECT id FROM brands WHERE name ILIKE '%senye%'), 'Bolso de lados extensibles para mascotas', 'bolso-extensible-senye', 'SEN-BOL-002', 'Alto 26 cm, largo 40 cm (extendido 60 cm), ancho 24 cm. Lados extensibles para mayor comodidad. Colores disponibles, consultá por WhatsApp.', 4000000, 10, true, 'mascotas'),
  ((SELECT id FROM brands WHERE name ILIKE '%senye%'), 'Gimnasio/rascador para gatos', 'rascador-gimnasio-gatos-senye', 'SEN-RAS-001', 'Alto 87 cm, largo 60 cm, ancho 40 cm. Múltiples plataformas, postes de sisal y juguetes colgantes.', 7500000, 8, true, 'mascotas'),
  ((SELECT id FROM brands WHERE name ILIKE '%senye%'), 'Caja de piedritas para gato con tapa anti-olor', 'caja-piedritas-gato-senye', 'SEN-PIE-001', 'Alto 38 cm, largo 51 cm, ancho 36 cm. Tapa con filtro anti-olor. Fácil limpieza.', 4000000, 10, true, 'mascotas');

INSERT INTO product_images (product_id, url, is_primary, position)
VALUES
  ((SELECT id FROM products WHERE slug = 'arnes-paseo-senye'), '/productos/senye/Pretal talle S.jpeg', true, 1),
  ((SELECT id FROM products WHERE slug = 'arnes-paseo-senye'), '/productos/senye/Pretal talle M.jpeg', false, 2),
  ((SELECT id FROM products WHERE slug = 'arnes-paseo-senye'), '/productos/senye/Pretal talle L.jpeg', false, 3),
  ((SELECT id FROM products WHERE slug = 'arnes-paseo-senye'), '/productos/senye/Pretal talle XL.jpeg', false, 4),
  ((SELECT id FROM products WHERE slug = 'bebedero-comedero-automatico-senye'), '/productos/senye/agua.jpeg', true, 1),
  ((SELECT id FROM products WHERE slug = 'bebedero-comedero-automatico-senye'), '/productos/senye/comida.jpeg', false, 2),
  ((SELECT id FROM products WHERE slug = 'bolso-mascota-senye'), '/productos/senye/bolso1.jpeg', true, 1),
  ((SELECT id FROM products WHERE slug = 'bolso-mascota-senye'), '/productos/senye/bolso2.jpeg', false, 2),
  ((SELECT id FROM products WHERE slug = 'mochila-mascota-senye'), '/productos/senye/mochila.jpeg', true, 1),
  ((SELECT id FROM products WHERE slug = 'mochila-mascota-senye'), '/productos/senye/mochila2.jpeg', false, 2),
  ((SELECT id FROM products WHERE slug = 'mochila-mascota-senye'), '/productos/senye/mochila3.jpeg', false, 3),
  ((SELECT id FROM products WHERE slug = 'bolso-extensible-senye'), '/productos/senye/bolso3.jpeg', true, 1),
  ((SELECT id FROM products WHERE slug = 'bolso-extensible-senye'), '/productos/senye/bolso-ext.jpeg', false, 2),
  ((SELECT id FROM products WHERE slug = 'rascador-gimnasio-gatos-senye'), '/productos/senye/rascador.jpeg', true, 1),
  ((SELECT id FROM products WHERE slug = 'caja-piedritas-gato-senye'), '/productos/senye/piedras.jpeg', true, 1),
  ((SELECT id FROM products WHERE slug = 'caja-piedritas-gato-senye'), '/productos/senye/piedras2.jpeg', false, 2),
  ((SELECT id FROM products WHERE slug = 'caja-piedritas-gato-senye'), '/productos/senye/piedras3.jpeg', false, 3);
