const CLOUD_NAME = 'deaevfmvm';
const UPLOAD_PRESET = '582f2d8b-44e8-4cca-8442-fc912e428b51';

export function openUploadWidget({
  resourceType = 'auto',
  folder = '',
  multiple = false,
  onSuccess,
  onError
} = {}) {
  if (!window.cloudinary) {
    console.error('Cloudinary widget script not loaded');
    return;
  }
  const widget = window.cloudinary.createUploadWidget({
    cloudName: CLOUD_NAME,
    uploadPreset: UPLOAD_PRESET,
    folder,
    multiple,
    resourceType,
    clientAllowedFormats: resourceType === 'video'
      ? ['mp4', 'mov']
      : ['png', 'jpg', 'jpeg', 'gif', 'pdf']
  }, (error, result) => {
    if (!error && result && result.event === 'success') {
      onSuccess && onSuccess(result.info);
    }
    if (error) {
      console.error('Upload error:', error);
      onError && onError(error);
    }
  });
  widget.open();
}