import axios from "axios";

const supabaseUrl = "";
const supabaseKey =
  "";

export const supabase = axios.create({
  baseURL: `${supabaseUrl}/auth/v1`,
  headers: {
    apiKey: supabaseKey,
  },
});
