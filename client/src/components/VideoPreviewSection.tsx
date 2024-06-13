import React from 'react';

const VideoPreviewSection: React.FC = () => {
  return (
    <div className="mt-16 flex w-full flex-col max-md:max-w-full">
      <div className="mb-16 self-stretch text-center text-4xl font-medium text-sky-950">
        תראו בעצמכם!
      </div>
      <div className="flex flex-col items-center">
        <div className="self-stretch max-md:w-full">
          <img
            loading="lazy"
            src="http://b.io/ext_40-"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPreviewSection;
