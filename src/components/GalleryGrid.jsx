const GalleryGrid = ({ images }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {images.map((img, idx) => (
      <img key={idx} src={img} alt="Gallery" className="w-full h-32 object-cover rounded" />
    ))}
  </div>
);

export default GalleryGrid; 