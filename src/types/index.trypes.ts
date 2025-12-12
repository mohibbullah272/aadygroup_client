export interface IService  {
    _id:string
    image: string;
    title: string;
    description: string;
    features: string[];
    minPrice: number;
    maxPrice: number;
  }

 export interface IWeb {
    title:string,
    description:string,
    image:string,
    basePrice:number,
    technologies:string[]
}


export interface IUser {
  displayName?:string | null;
  email:string
}

// types/blog.ts
export interface IBlog {
  _id?: string;
  title: string;
  content: string;
  image: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface BlogFormData {
  title: string;
  content: string;
  images: FileList | null;
}

// schemas/blog-schema.ts

import {z} from "zod"
export const blogFormSchema = z.object({
  title: z.string().min(1, "Title is required").min(3, "Title must be at least 3 characters"),
  content: z.string().min(1, "Content is required").min(10, "Content must be at least 10 characters"),
  images: z.any().optional()
}).refine((data) => {
  // Custom validation for images - either existing images or new uploads
  console.log(data)
  return true; // We'll handle image validation in the component
});