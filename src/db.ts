import{createClient}from'@supabase/supabase-js';
const url=import.meta.env.VITE_SUPABASE_URL||'';const key=import.meta.env.VITE_SUPABASE_ANON_KEY||'';
export const ready=!!url&&!!key&&!url.includes('SEU_PROJETO');
export const db=ready?createClient(url,key):null;
export type Table='products'|'suppliers'|'invoices'|'invoice_items'|'tasks'|'events'|'price_history';
export async function list(table:Table){if(!db)throw Error('Configure o Supabase');const {data,error}=await db.from(table).select('*').order('created_at',{ascending:false}).limit(1000);if(error)throw error;return data||[]}
export async function insert(table:Table,row:Record<string,unknown>){if(!db)throw Error('Configure o Supabase');const{error}=await db.from(table).insert(row);if(error)throw error}
export async function update(table:Table,id:string,row:Record<string,unknown>){if(!db)throw Error('Configure o Supabase');const{error}=await db.from(table).update(row).eq('id',id);if(error)throw error}
export async function remove(table:Table,id:string){if(!db)throw Error('Configure o Supabase');const{error}=await db.from(table).delete().eq('id',id);if(error)throw error}
