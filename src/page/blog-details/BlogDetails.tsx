import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Helmet } from "react-helmet";

interface BlogData {
  _id: string;
  title: string;
  content: string;
  image: string[];
}

interface ApiResponse {
  success: boolean;
  data: BlogData;
  message: string;
}

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://aadymart-backend.onrender.com/api/blogs/${id}`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        
        const data: ApiResponse = await response.json();
        
        if (data.success) {
          setBlog(data.data);
        } else {
          throw new Error(data.message);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (loading) {
    return <BlogDetailsSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Card className="w-full max-w-md mx-4 border-red-200">
          <CardContent className="p-6 text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Error</h2>
            <p className="text-gray-600">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Card className="w-full max-w-md mx-4 border-red-200">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Blog Not Found</h2>
            <p className="text-gray-600">The blog you're looking for doesn't exist.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
  <>
<Helmet>
    <title>{blog.title} | Aady Group  Blog</title>
    <meta name="description" content={blog.content.substring(0, 160) + '...'} />
    
    {/* Open Graph / Facebook */}
    <meta property="og:type" content="article" />
    <meta property="og:title" content={blog.title} />
    <meta property="og:description" content={blog.content.substring(0, 160) + '...'} />
    {blog.image && blog.image.length > 0 && (
      <meta property="og:image" content={blog.image[0]} />
    )}
    <meta property="og:url" content={`https://www.aadymart.xyz/blog/${blog._id}`} />
    <meta property="og:site_name" content="Aadymart" />
    
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={blog.title} />
    <meta name="twitter:description" content={blog.content.substring(0, 160) + '...'} />
    {blog.image && blog.image.length > 0 && (
      <meta name="twitter:image" content={blog.image[0]} />
    )}
    
    {/* Additional SEO Meta Tags */}
    <meta name="keywords" content="blog, article, aadymart" />
    <meta name="author" content="Aadymart" />
    
    {/* Structured Data / JSON-LD */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.content.substring(0, 160),
        "image": blog.image && blog.image.length > 0 ? blog.image : [],
        "datePublished": new Date().toISOString(),
        "author": {
          "@type": "Organization",
          "name": "Aadymart"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Aadymart",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.aadymart.xyz/favicon.svg"
          }
        }
      })}
    </script>
  </Helmet>
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Blog Details
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Card className="border-red-100 shadow-lg overflow-hidden">
          {/* Blog Images */}
          {blog.image && blog.image.length > 0 && (
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={blog.image[selectedImage]}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Thumbnails */}
              {blog.image.length > 1 && (
                <div className="p-4 bg-white border-t border-gray-100">
                  <div className="flex gap-2 overflow-x-auto">
                    {blog.image.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === index
                            ? "border-red-500 ring-2 ring-red-200"
                            : "border-gray-200 hover:border-red-300"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${blog.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Blog Content */}
          <CardContent className="p-6 md:p-8">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                {blog.content}
              </p>
            </div>

          </CardContent>
        </Card>
      </main>
    </div>
  
  </>
  );
};

// Skeleton Loader Component
const BlogDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-6">
          <Skeleton className="h-8 w-48" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="border-red-100 shadow-lg overflow-hidden">
          {/* Image Skeleton */}
          <Skeleton className="aspect-video w-full" />
          
          <CardContent className="p-6 md:p-8">
            {/* Title Skeleton */}
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-2/3 mb-6" />
            
            {/* Content Skeleton */}
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/6" />
            </div>

            {/* Metadata Skeleton */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default BlogDetails;