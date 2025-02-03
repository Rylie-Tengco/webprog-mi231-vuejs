import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://kwciacgpqptrfigjxxtm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3Y2lhY2dwcXB0cmZpZ2p4eHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1NjMyMjcsImV4cCI6MjA1NDEzOTIyN30.Ij-9iXLo-mbXfM49fqNGRt6PUJWxGVu0rJJlvxSdiQU')