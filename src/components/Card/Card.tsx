import Image, { StaticImageData } from 'next/image';
function Card({title,description,image}:{title:string,description:string,image:StaticImageData}) {
    return (
       <div className="relative group cursor-pointer overflow-hidden duration-500 w-80 h-90 bg-main text-gray-50 p-5">
      
        <Image className="group-hover:scale-115 w-70 h-70 duration-500  object-cover object-top" src={image} alt={title} />
        <div className="absolute w-56 min-h-36 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12 ">
          <div className="absolute -z-10 left-0 w-80 h-28 opacity-0 duration-500 group-hover:opacity-50
           group-hover:bg-blue-900" />
          <span className="text-xl font-bold text-nowrap">{title}</span>
          <p className="group-hover:opacity-100 w-75 duration-500 opacity-0  tracking-wider">
            {description}
          </p>
        </div>
      </div>
   
    );
}

export default Card;