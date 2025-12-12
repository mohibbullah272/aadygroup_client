import { useState } from "react";

interface UploadResult {
  url: string | null;
  loading: boolean;
  error: string | null;
  uploadImage: (file: File) => Promise<void>;
}

export const useCloudinaryUpload = (): UploadResult => {
    const cloudName = 'dovnztfxq'
    const uploadPreset = 'aadymart'
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File) => {
    setLoading(true);
    setError(null);
    setUrl(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Image upload failed");

      const data = await res.json();
      setUrl(data.secure_url);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { url, loading, error, uploadImage };
};
