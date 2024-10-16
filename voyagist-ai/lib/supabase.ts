import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mbaenxdflywmrmoqlnur.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iYWVueGRmbHl3bXJtb3FsbnVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwNjQ3MTYsImV4cCI6MjA0NDY0MDcxNn0.WFTJhpIlVBNJgEJw9onOMNJ_y5AG-dS0Zmg6_LtU2po';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
