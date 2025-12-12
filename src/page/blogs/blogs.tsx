import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, ChevronDown, ChevronUp, ImageIcon } from 'lucide-react';
import type { IBlog } from '@/types/index.trypes';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';


const Blogs = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedBlogs, setExpandedBlogs] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('https://aadymart-backend.onrender.com/api/blogs');
      const data = await response.json();
      setBlogs(data.data || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleExpand = (blogId: string) => {
    const newExpanded = new Set(expandedBlogs);
    if (newExpanded.has(blogId)) {
      newExpanded.delete(blogId);
    } else {
      newExpanded.add(blogId);
    }
    setExpandedBlogs(newExpanded);
  };

  const truncateContent = (content: string, maxLength: number = 100) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  const renderImageGrid = (images: string[]) => {
    if (images.length === 0) {
      return (
        <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
          <ImageIcon className="w-12 h-12 text-gray-400" />
        </div>
      );
    }

    if (images.length === 1) {
      return (
        <div className="w-full h-80 rounded-lg overflow-hidden">
          <img
            src={images[0]}
            alt="Blog featured"
            loading='lazy'
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      );
    }

    if (images.length === 2) {
      return (
        <div className="grid grid-cols-2 gap-2 h-80">
          {images.map((img, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img
                src={img}
                loading='lazy'
                alt={`Blog image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      );
    }

    if (images.length === 3) {
      return (
        <div className="grid grid-cols-2 gap-2 h-80">
          <div className="row-span-2 rounded-l-lg overflow-hidden">
            <img
              src={images[0]}
              alt="Blog image 1"
              loading='lazy'
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-tr-lg overflow-hidden">
            <img
              src={images[1]}
              alt="Blog image 2"
              loading='lazy'
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-br-lg overflow-hidden">
            <img
              src={images[2]}
              alt="Blog image 3"
              loading='lazy'
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      );
    }

    // 4 or more images
    return (
      <div className="grid grid-cols-2 gap-2 h-80">
        {images.slice(0, 4).map((img, index) => (
          <div key={index} className="rounded-lg overflow-hidden relative">
            <img
              src={img}
              alt={`Blog image ${index + 1}`}
              loading='lazy'
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            {index === 3 && images.length > 4 && (
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                <span className="text-white font-bold text-lg">+{images.length - 4}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-24 h-2 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <div className="w-64 h-8 bg-gray-300 rounded-lg mx-auto mb-2"></div>
            <div className="w-96 h-4 bg-gray-200 rounded-lg mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-6 animate-pulse">
                <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center">
          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mb-6"></div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Our <span className="text-red-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover insights, stories, and expertise from our team. 
            Stay updated with the latest trends and innovations.
          </p>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="max-w-7xl mx-auto px-4">
        {blogs.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Blogs Yet</h3>
            <p className="text-gray-600">Check back later for new content!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            {blogs.map((blog) => (
              <article
                key={blog._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  {renderImageGrid(blog.image)}
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    {blog.createdAt && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                      </div>
                    )}
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                 
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                    {blog.title}
                  </h2>

                  {/* Content */}
                  <div className="text-gray-600 leading-relaxed mb-4">
                    <p className={expandedBlogs.has(blog._id!) ? '' : 'line-clamp-3'}>
                      {expandedBlogs.has(blog._id!) ? blog.content : truncateContent(blog.content, 120)}
                    </p>
                  </div>

                  {/* Read More Button */}
                  {blog.content.length > 120 && (
                    <button
                      onClick={() => toggleExpand(blog._id!)}
                      className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors group/btn"
                    >
                      {expandedBlogs.has(blog._id!) ? (
                        <>
                          Show Less
                          <ChevronUp className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </>
                      ) : (
                        <>
                          Read More
                          <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  )}

                  {/* View Full Post Button */}
        <div className="flex justify-end">
          <Link to={`/blog/${blog._id}`}>    
          <Button>View Post <ArrowRight/></Button>
          </Link>
          
          </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Load More Section */}
        {blogs.length > 0 && (
          <div className="text-center mt-16">
            <button className="bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105">
              Load More Posts
            </button>
          </div>
        )}
      </div>

   
    </div>
  );
};

export default Blogs;