import { supabase } from "../supabaseClient";

export interface WorkItemData {
  folder: string;
  image_name: string;
  title: string;
  description: string;
}

export const fetchWorks = async (): Promise<WorkItemData[]> => {
  const { data, error } = await supabase
    .from('work')
    .select('folder, image_name, title, description')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('❌ Помилка при отриманні даних:', error.message);
    return [];
  }

  return data;
};

export const getImageUrl = (folder: string, imageName: string): string => {
  return supabase.storage
    .from('work-images')
    .getPublicUrl(`${folder}/${imageName}`).data.publicUrl;
};
