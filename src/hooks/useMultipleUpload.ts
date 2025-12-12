// hooks/useCloudinaryMultipleUpload.ts
import { useState } from "react";

interface MultipleUploadResult {
  urls: string[];
  loading: boolean;
  error: string | null;
  uploadImages: (files: File[]) => Promise<void>;
  removeImage: (index: number) => void;
  clearAll: () => void;
}

export const useCloudinaryMultipleUpload = (): MultipleUploadResult => {
  const cloudName = 'dovnztfxq';
  const uploadPreset = 'aadymart';
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImages = async (files: File[]) => {
    if (files.length > 4) {
      setError("Maximum 4 images allowed");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const uploadPromises = files.map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset);

        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
          method: "POST",
          body: formData,
        });

        if (!res.ok) throw new Error("Image upload failed");
        const data = await res.json();
        return data.secure_url;
      });

      const newUrls = await Promise.all(uploadPromises);
      setUrls(prev => [...prev, ...newUrls]);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const removeImage = (index: number) => {
    setUrls(prev => prev.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    setUrls([]);
  };

  return { urls, loading, error, uploadImages, removeImage, clearAll };
};