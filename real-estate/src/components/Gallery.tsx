import { galleryImages } from "../data/data"

const Gallery = () => {
  return (
    // <div>
    //     <div className="px-6 py-16">
    //         <h1 className="text-4xl md:text-6xl underline text-center pb-16">Our Gallery</h1>
    //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           
    //         {Array.from({ length: 6 }).map((_, index) => (
    //             <div
    //             key={index}
    //             className="mb-4 overflow-hidden"
    //             >
    //             <img
    //                 src={`https://picsum.photos/400/300?random=${index}`}
    //                 alt={`Gallery Image ${index + 1}`}
    //                 className="h-64 object-cover transition-transform duration-500 hover:scale-105"
    //             />
    //             </div>
    //         ))}
    //         </div>
    //     </div>
    // </div>
    <div className="px-6 py-16">
        <h1  data-aos="zoom-in" className="text-4xl md:text-6xl underline text-center pb-16">Our Gallery</h1>
        <div  data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((gallery, index) => (
            <div
            key={index}
            className="  mb-4 overflow-hidden 6"
          >
            <img
              src={gallery.image}
              alt={`Gallery Image ${index + 1}`}
              className=" h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          
        ))}</div>
    </div>
  )
}

export default Gallery