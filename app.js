import { createClient } from '@supabase/supabase-js'

// URL do seu projeto no Supabase e a chave anônima
const supabaseUrl = 'https://jmgnfszrutyomlfhklkc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZ25mc3pydXR5b21sZmhrbGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3MzU0NzksImV4cCI6MjA0NDMxMTQ3OX0.cFtmTJ2Wy10RVYpwNZps6j6opg4Z_xFcpwVXdDqPzFo'
const supabase = createClient(supabaseUrl, supabaseKey)

async function insertUser() {
    const { data, error } = await supabase
      .from('teste')
      .insert([
        { nome: 'john_doe', senha: 'john@example.com' },
      ])
  
    if (error) {
      console.log('Erro ao inserir:', error)
    } else {
      console.log('Usuário inserido:', data)
    }
  }
  insertUser()
  