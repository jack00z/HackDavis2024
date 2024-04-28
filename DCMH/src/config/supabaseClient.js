import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://zradvwvufhhhwtpeenhv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyYWR2d3Z1ZmhoaHd0cGVlbmh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyNTIwNzksImV4cCI6MjAyOTgyODA3OX0.XPhuWlfsggO2vVvmhFNnZOZQ5KgYWBWGUpU9GdWQrUA")

export default supabase