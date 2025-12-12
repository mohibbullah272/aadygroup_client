// components/ManageBlog.tsx
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, Trash2, Edit, Eye, X, Upload, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useCloudinaryMultipleUpload } from '@/hooks/useMultipleUpload';
import { blogFormSchema, type IBlog } from '@/types/index.trypes';
import { useAuth } from '@/hooks/useAuth';

const ManageBlog = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [editingBlog, setEditingBlog] = useState<IBlog | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'form' | 'preview'>('list');
  const [previewBlog, setPreviewBlog] = useState<IBlog | null>(null);
  const { user } = useAuth();
  
  const { urls, loading: uploadLoading, error: uploadError, uploadImages, removeImage, clearAll } = useCloudinaryMultipleUpload();

  const form = useForm({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: '',
      content: '',
      images: null,
    },
  });

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      const response = await fetch('https://aadymart-backend.onrender.com/api/blogs');
      const data = await response.json();
      setBlogs(data.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle image upload
  const handleImageUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    
    const fileArray = Array.from(files);
    await uploadImages(fileArray);
  };

  // Reset form
  const resetForm = () => {
    form.reset();
    setEditingBlog(null);
    clearAll();
    setViewMode('list');
  };

  // Submit form
  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const blogData = {
        title: data.title,
        content: data.content,
        email: user?.email,
        image: editingBlog ? [...editingBlog.image, ...urls] : urls,
      };

      // Validate that we have at least one image
      if (blogData.image.length === 0) {
        alert('Please upload at least one image for the blog');
        setIsLoading(false);
        return;
      }

      const url = editingBlog 
        ? `https://aadymart-backend.onrender.com/api/blogs/${editingBlog._id}`
        : 'https://aadymart-backend.onrender.com/api/blogs';
      
      const method = editingBlog ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        resetForm();
        fetchBlogs();
      } else {
        throw new Error('Failed to save blog');
      }
    } catch (error) {
      console.error('Error saving blog:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Edit blog
  const handleEdit = (blog: IBlog) => {
    setEditingBlog(blog);
    form.setValue('title', blog.title);
    form.setValue('content', blog.content);
    setViewMode('form');
  };

  // Delete blog
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      const response = await fetch(`https://aadymart-backend.onrender.com/api/blogs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchBlogs();
      } else {
        throw new Error('Failed to delete blog');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  // Preview blog
  const handlePreview = (blog: IBlog) => {
    setPreviewBlog(blog);
    setViewMode('preview');
  };

  // Remove existing image (only for newly uploaded images during edit)


  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600">Create and manage your blog posts</p>
        </div>

        {viewMode === 'list' && (
          <div className="space-y-6">
            {/* Add New Blog Button */}
            <Card className="border-2 border-dashed border-gray-300 hover:border-red-600 transition-colors">
              <CardContent className="p-8 text-center">
                <Button
                  onClick={() => setViewMode('form')}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Create New Blog
                </Button>
              </CardContent>
            </Card>

            {blogs.length === 0 && (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-gray-500">No blogs found. Create your first blog post!</p>
                </CardContent>
              </Card>
            )}

            {/* Blogs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map((blog) => (
                <Card key={blog._id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    {blog.image.length > 0 && (
                      <img
                        src={blog.image[0]}
                        alt={blog.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {blog.content}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePreview(blog)}
                          className="border-gray-300 hover:bg-gray-50"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(blog)}
                          className="border-gray-300 hover:bg-gray-50"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(blog._id!)}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {viewMode === 'form' && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {editingBlog ? 'Edit Blog' : 'Create New Blog'}
              </CardTitle>
              {editingBlog && (
                <p className="text-sm text-gray-600 mt-2">
                  Note: You can add new images but cannot remove existing published images
                </p>
              )}
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Title Field */}
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900">Title</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Enter blog title" 
                            className="border-gray-300 focus:border-red-600"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Content Field */}
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900">Content</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            placeholder="Enter blog content" 
                            rows={8}
                            className="border-gray-300 focus:border-red-600 resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Image Upload Section */}
                  <FormField
                    control={form.control}
                    name="images"
                    render={({ field: { onChange, value, ...field } }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 block text-sm font-medium mb-3">
                          Blog Images {urls.length > 0 && `(${urls.length}/4 new images)`}
                        </FormLabel>
                        <FormControl>
                          <div className="space-y-4">
                            {/* Enhanced File Upload Area */}
                            <div className={`border-2 border-dashed border-gray-300 rounded-lg p-6 text-center transition-all duration-200 ${
                              urls.length >= 4 ? 'opacity-50 cursor-not-allowed' : 'hover:border-red-400 cursor-pointer'
                            }`}>
                              <input
                                {...field}
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={(e) => {
                                  onChange(e.target.files);
                                  handleImageUpload(e.target.files);
                                }}
                                disabled={urls.length >= 4 || uploadLoading}
                                className="hidden"
                                id="blog-images-upload"
                              />
                              <label 
                                htmlFor="blog-images-upload" 
                                className={`cursor-pointer block ${urls.length >= 4 ? 'cursor-not-allowed' : ''}`}
                              >
                                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                <p className="text-gray-600 font-medium mb-1">
                                  {uploadLoading ? 'Uploading...' : 'Click to upload images'}
                                </p>
                                <p className="text-gray-500 text-sm">
                                  Upload up to 4 images (Max 4MB each)
                                </p>
                                <p className="text-gray-400 text-xs mt-2">
                                  PNG, JPG, JPEG, WEBP supported
                                </p>
                              </label>
                            </div>

                            {/* Upload Status */}
                            {uploadLoading && (
                              <Alert className="bg-blue-50 border-blue-200">
                                <AlertDescription className="text-blue-800 flex items-center">
                                  <ImageIcon className="w-4 h-4 mr-2" />
                                  Uploading images... Please wait
                                </AlertDescription>
                              </Alert>
                            )}

                            {uploadError && (
                              <Alert className="bg-red-50 border-red-200">
                                <AlertDescription className="text-red-800">
                                  {uploadError}
                                </AlertDescription>
                              </Alert>
                            )}

                            {/* Existing Published Images (for edit mode) */}
                            {editingBlog && editingBlog.image.length > 0 && (
                              <div className="mt-6">
                                <div className="flex items-center justify-between mb-3">
                                  <p className="text-sm font-medium text-gray-900">Published Images</p>
                                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    Cannot be removed
                                  </span>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                  {editingBlog.image.map((img, index) => (
                                    <div key={`existing-${index}`} className="relative group">
                                      <img
                                        src={img}
                                        alt={`Published ${index + 1}`}
                                        className="w-full h-24 object-cover rounded-lg border-2 border-gray-200"
                                      />
                                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 rounded-lg flex items-center justify-center">
                                        <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                          Published
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                <p className="text-xs text-gray-500 mt-2">
                                  These images are already published and cannot be removed
                                </p>
                              </div>
                            )}

                            {/* New Uploaded Images (can be removed) */}
                            {urls.length > 0 && (
                              <div className="mt-6">
                                <p className="text-sm font-medium text-gray-900 mb-3">
                                  New Images ({urls.length}/4)
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                  {urls.map((url, index) => (
                                    <div key={`new-${index}`} className="relative group">
                                      <img
                                        src={url}
                                        alt={`New upload ${index + 1}`}
                                        className="w-full h-24 object-cover rounded-lg border-2 border-red-200"
                                      />
                                      <Button
                                        type="button"
                                        size="sm"
                                        variant="destructive"
                                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                        onClick={() => removeImage(index)}
                                        title="Remove this image"
                                      >
                                        <X className="w-3 h-3" />
                                      </Button>
                                      <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-xs py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        Click × to remove
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Image Count and Limits */}
                            <div className="flex justify-between items-center text-sm">
                              <span className={`${urls.length >= 4 ? 'text-red-600 font-medium' : 'text-gray-600'}`}>
                                {urls.length}/4 new images selected
                              </span>
                              {urls.length >= 4 && (
                                <span className="text-red-600 font-medium">
                                  Maximum limit reached
                                </span>
                              )}
                            </div>

                            {/* Validation Message */}
                            {(editingBlog ? editingBlog.image.length + urls.length : urls.length) === 0 && (
                              <p className="text-red-600 text-sm">
                                At least one image is required to publish the blog
                              </p>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                    <Button
                      type="submit"
                      disabled={isLoading || uploadLoading || (editingBlog ? editingBlog.image.length + urls.length : urls.length) === 0}
                      className="bg-red-600 hover:bg-red-700 text-white flex-1 py-3 text-lg font-semibold"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          {editingBlog ? 'Updating...' : 'Publishing...'}
                        </>
                      ) : (
                        editingBlog ? 'Update Blog' : 'Publish Blog'
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={resetForm}
                      disabled={isLoading}
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 flex-1 py-3 text-lg"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        )}

        {viewMode === 'preview' && previewBlog && (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Blog Preview
                </CardTitle>
                <Button
                  variant="outline"
                  onClick={() => setViewMode('list')}
                  className="border-gray-300"
                >
                  Back to List
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <article className="prose max-w-none">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{previewBlog.title}</h1>
                
                {previewBlog.image.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {previewBlog.image.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${previewBlog.title} ${index + 1}`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
                
                <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                  {previewBlog.content}
                </div>
                
                {previewBlog.createdAt && (
                  <p className="text-gray-500 text-sm mt-6">
                    Created on: {new Date(previewBlog.createdAt).toLocaleDateString()}
                  </p>
                )}
              </article>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ManageBlog;