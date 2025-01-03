import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  techStack?: readonly string[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  techStack = [],
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative flex flex-col w-full max-w-[400px] h-[550px] overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0F0F0F] hover:bg-[#1A1A1A] hover:shadow-2xl hover:scale-105 transition-transform duration-300"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-[200px] object-cover"
      />

      <div className="relative flex flex-col flex-grow p-6">
        <h1 className="text-2xl font-semibold text-white mb-4">{title}</h1>
        <p className="text-gray-300 text-sm mb-6">{description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#2A0E61] text-white text-xs rounded-full hover:bg-[#3B1A76] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
