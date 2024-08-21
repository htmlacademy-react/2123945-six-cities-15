type Image = {
  id: number;
  src: string;
};

function GalleryImage({ image }: { image: Image }): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={image.src} alt="Photo studio" />
    </div>
  );
}

function Gallery({ images }: { images: Image[] }): JSX.Element {
  const galleryImages = images.map((image) => (
    <GalleryImage key={image.id} image={image} />
  ));

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">{galleryImages}</div>
    </div>
  );
}

export default Gallery;
