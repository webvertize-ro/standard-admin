// a function that retrieves submissions
import supabase from './supabase';
import { WEBSITE_ID } from '../../config';

export async function getSubmissions() {
  const { data: submissions, error } = await supabase
    .from('submissions')
    .select('*')
    .eq('website_id', WEBSITE_ID);

  if (error) throw new Error(error.message);

  return submissions;
}

// a function that deletes submissions based on submission id
export async function deleteSubmission(id) {
  const { error } = await supabase.from('submissions').delete().eq('id', id);

  if (error) throw new Error(error.message);
}

// a function that subscribes to live-changes to submissions
export function subscribeToMessages(callback) {
  return supabase
    .channel('submissions-channel')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'submissions',
      },
      callback,
    )
    .subscribe();
}
