import React, { useState, useEffect } from 'react';
import { FileImage, Upload as UploadIcon, Save, X } from 'lucide-react';
 import { useCloudinaryUpload } from '../hooks/useUpload';
import { servicesConfig } from '@/page/ManageService/serviceConfig/Service.config';

interface ServiceFormProps {
  serviceId: string;
  initialData?: any;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => Promise<void>;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ 
  serviceId, 
  initialData, 
  isOpen, 
  onClose, 
  onSubmit 
}) => {
  const { url, loading: uploadLoading, error: uploadError, uploadImage } = useCloudinaryUpload();
  const serviceConfig = servicesConfig[serviceId];
  const [formData, setFormData] = useState<any>(serviceConfig.defaultValues);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData(serviceConfig.defaultValues);
    }
  }, [initialData, serviceConfig.defaultValues]);

  useEffect(() => {
    if (url) {
      setFormData((prev: any) => ({ ...prev, image: url }));
    }
  }, [url]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any)=> ({
      ...prev,
      [name]: name.includes('Price') ? Number(value) : value
    }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      await uploadImage(e.target.files[0]);
    }
  };

  const handleCheckboxToggle = (fieldName: string, value: string) => {
    setFormData((prev: any) => {
      const current = Array.isArray(prev[fieldName]) ? prev[fieldName] : [];
  
      return {
        ...prev,
        [fieldName]: current.includes(value)
          ? current.filter((item: string) => item !== value)
          : [...current, value],
      };
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await onSubmit(formData);
      setFormData('')
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-black">
            {initialData ? `Edit ${serviceConfig.name}` : `Create New ${serviceConfig.name}`}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {serviceConfig.fields.map((field:any) => (
            <div key={field.name}>
              {field.type === 'file' ? (
                <>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    {formData.image ? (
                      <img 
                        src={formData.image} 
                        alt="Preview" 
                        loading='lazy'
                        className="w-full h-32 object-cover rounded-lg mb-2"
                      />
                    ) : (
                      <FileImage className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    )}
                    <div className="flex items-center justify-center">
                      <UploadIcon className="w-4 h-4 mr-2 text-gray-500" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        disabled={uploadLoading}
                        className="text-sm text-gray-600 bg-transparent border-none outline-none"
                      />
                    </div>
                    {uploadLoading && <p className="text-sm text-gray-500 mt-2">Uploading image...</p>}
                    {uploadError && <p className="text-sm text-red-500 mt-2">{uploadError}</p>}
                  </div>
                </>
              ) : field.type === 'textarea' ? (
                <>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <textarea
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                </>
              ) : field.type === 'checkbox-group' ? (
                <>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.icon && <>{field.icon} </>}
                    {field.label}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-32 overflow-y-auto border border-gray-300 rounded-md p-3">
                    {field.options?.map((option:any) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData[field.name]?.includes(option)}
                          onChange={() => handleCheckboxToggle(field.name, option)}
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.icon && <>{field.icon} </>}
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder={field.placeholder}
                    required={field.required}
                    min={field.min}
                    max={field.max}
                  />
                </>
              )}
            </div>
          ))}

          {error && (
            <div className="p-3 bg-red-50 text-red-600 rounded-md">
              {error}
            </div>
          )}

          <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading || uploadLoading}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center disabled:opacity-50"
            >
              {isLoading ? (
                'Saving...'
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  {initialData ? 'Save Changes' : 'Create'}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm