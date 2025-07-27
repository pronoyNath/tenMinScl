// type.ts


// media item 
export interface MediaItem {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}


// Background Info
export interface Background {
  image: string;
  primary_color?: string;
  secondary_color?: string;
}

// CTA Button Info
export interface CTA {
  clicked_url: string;
  color?: string;
  text: string;
}

// Engagement Section Item
export interface EngagementValue {
  id: string;
  title: string;
  title_color?: string;
  description: string;
  description_color?: string;
  thumbnail: string;
  top_left_icon_img: string;
  background: Background;
  cta: CTA;
}

// Features Section Item
export interface FeatureValue {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

// Instructor Section Item
export interface Instructor {
  name: string;
  short_description: string;
  description: string;
  image: string;
  slug: string;
  has_instructor_page: boolean;
}

// Checklist item
export interface ChecklistItem {
  id: string;
  text: string;
  icon: string;
  color: string;
  list_page_visibility: boolean;
}

// Media (like video preview)
export interface Media {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url: string;
}

// Section — Generalized to handle various types like "features", "instructors", etc.
export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color?: string;
  order_idx: number;
  values: any[]; 
}

// Old info (legacy structure)
export interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

// SEO Tag
export interface SeoMeta {
  type: string;
  value: string;
  content: string;
}

// CTA Text Block
export interface CTA_Text {
  name: string;
  value: string;
}

// Root Course Data Type
export interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: Media[];
  checklist: ChecklistItem[];
  seo: {
    defaultMeta: SeoMeta[];
  };
  cta_text: CTA_Text;
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: any[];
  delivery_method: string;
}
