import { createClient as createSupabaseClient } from '@supabase/supabase-js'

// Cliente server-side con service_role key — solo usar en API routes y Server Components
export function createServiceClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

// Cliente server-side con anon key — para Server Components que leen datos públicos
export function createServerClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
