import Image from "next/image";
import Link from "next/link";

interface IappProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export function BlogPostCard({ data }: IappProps) {
  return (
    <div className="group relative rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
      <Link href={`/post/${data.id}`} className="block w-full h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={data.imageUrl}
            alt="image for blog"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            fill
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">{data.title}</h3>
          <p className="mb-4 text-sm text-gray-600 line-clamp-2">{data.content}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <div className="relative size-8 overflow-hidden rounded-full">
                    <Image src={data.authorImage} alt={data.authorName} fill className="object-cover" />
                </div>
                <p className="text-sm font-medium text-gray-700">{data.authorName}</p>
            </div>
            <time className="text-xs text-gray-500">{new Intl.DateTimeFormat("en-US",{
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(data.createdAt)
            }</time>
          </div>
        </div>
      </Link>
    </div>
  );
}
