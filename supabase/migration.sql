-- ============================================================
-- DALT Importaciones - Migration inicial
-- Correr en: Supabase Dashboard > SQL Editor > New Query
-- ============================================================

-- Marcas
CREATE TABLE IF NOT EXISTS brands (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  logo_url TEXT
);

-- Productos
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sku TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  brand_id INTEGER REFERENCES brands(id),
  category TEXT,
  price_ars INTEGER NOT NULL DEFAULT 0, -- en centavos (ej: $8500 = 850000)
  stock INTEGER NOT NULL DEFAULT 0,
  active BOOLEAN NOT NULL DEFAULT true,
  weight_grams INTEGER NOT NULL DEFAULT 500,
  dimensions_cm JSONB, -- { "largo": 30, "ancho": 20, "alto": 15 }
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Imágenes de productos
CREATE TABLE IF NOT EXISTS product_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  url TEXT NOT NULL, -- ruta relativa: /productos/senye/mochila.jpeg
  position INTEGER NOT NULL DEFAULT 0,
  is_primary BOOLEAN NOT NULL DEFAULT false
);

-- Variantes (talles, colores, etc.)
CREATE TABLE IF NOT EXISTS product_variants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  label TEXT NOT NULL, -- "Talle S", "Talle M", etc.
  sku_suffix TEXT NOT NULL, -- "-S", "-M", etc.
  stock INTEGER NOT NULL DEFAULT 0,
  price_modifier_ars INTEGER NOT NULL DEFAULT 0 -- suma o resta al precio base
);

-- Órdenes (sin cuenta de usuario)
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mp_preference_id TEXT,
  mp_payment_id TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'cancelled')),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  shipping_address JSONB NOT NULL,
  -- { "calle": "Av. Colón", "numero": "123", "piso_dpto": "2B",
  --   "ciudad": "Bahía Blanca", "provincia": "Buenos Aires", "codigo_postal": "8000" }
  shipping_method TEXT NOT NULL DEFAULT 'andreani_domicilio',
  shipping_cost_ars INTEGER NOT NULL DEFAULT 0,
  items JSONB NOT NULL, -- snapshot del carrito
  subtotal_ars INTEGER NOT NULL DEFAULT 0,
  total_ars INTEGER NOT NULL DEFAULT 0,
  andreani_tracking_number TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Índices útiles
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_active ON products(active);
CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand_id);
CREATE INDEX IF NOT EXISTS idx_product_images_product ON product_images(product_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_mp_preference ON orders(mp_preference_id);
CREATE INDEX IF NOT EXISTS idx_orders_mp_payment ON orders(mp_payment_id);

-- Row Level Security
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Políticas: productos e imágenes son públicos (cualquiera puede leer)
CREATE POLICY "Brands son públicas" ON brands FOR SELECT USING (true);
CREATE POLICY "Productos activos son públicos" ON products FOR SELECT USING (active = true);
CREATE POLICY "Imágenes de productos son públicas" ON product_images FOR SELECT USING (true);
CREATE POLICY "Variantes son públicas" ON product_variants FOR SELECT USING (true);

-- Órdenes: solo se pueden insertar (el service_role key maneja el resto)
CREATE POLICY "Insertar órdenes libremente" ON orders FOR INSERT WITH CHECK (true);

-- ============================================================
-- DATOS INICIALES - Marcas
-- ============================================================
INSERT INTO brands (id, name, slug, description) VALUES
  (1, 'Senye', 'senye', 'Accesorios para mascotas: mochilas, bolsos, pretales, comederos y más'),
  (2, 'Amaru', 'amaru', 'Cestos de basura para reciclado del hogar'),
  (3, 'Baylor', 'baylor', 'Muebles premium para mascotas: camas, sillones y escaleras')
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- NOTA: Cargar productos manualmente desde el Supabase Dashboard
-- o ejecutar el script de seed por separado.
-- Ver archivo: supabase/seed.sql
-- ============================================================
