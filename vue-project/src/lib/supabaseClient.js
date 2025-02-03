import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://rrmpjdsfsivhkjlczcim.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJybXBqZHNmc2l2aGtqbGN6Y2ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1NjI1OTAsImV4cCI6MjA1NDEzODU5MH0.zFamuyisj6-5TZVUR4ybIcZAVk91_Pp6CSuD1zWPC6s')