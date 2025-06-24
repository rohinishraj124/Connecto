// app/forums/page.js
import Link from "next/link";
import Image from "next/image";

const forums = [
  {
    name: "Python",
    slug: "python",
    description: "Discuss Python programming, libraries, AI, and more.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png",
  },
  {
    name: "JavaScript",
    slug: "javascript",
    description: "From Vanilla JS to React and Node.js, it's all here.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    name: "DevOps",
    slug: "devops",
    description: "Docker, Kubernetes, Jenkins, GitOps, CI/CD pipelines.",
    image: "https://marvel-b1-cdn.bc0a.com/f00000000236551/dt-cdn.net/wp-content/uploads/2021/07/13429_ILL_DevOpsLoop.png",
  },
  {
    name: "Data Structures",
    slug: "data-structures",
    description: "Master algorithms and problem solving.",
    image: "https://miro.medium.com/v2/resize:fit:350/0*xmecyKNlbZKinBDs.png",
  },
  {
    name: "Next.js",
    slug: "nextjs",
    description: "All things Next.js — App Router, SSR, API routes.",
    image: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
  },
  {
    name: "Machine Learning",
    slug: "ml",
    description: "Models, LLMs, and deep learning discussions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFICAV69goVogfFlXkEs6ICgxk7L0Tnu_tg&s",
  },
  {
    name: "React",
    slug: "react",
    description: "React hooks, context, state management and more.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s",
  },
  {
    name: "Open Source",
    slug: "opensource",
    description: "Contribute to OSS and grow in public.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvjL737YyztPT4Sf5ZxGJYFsczFYmx8l7lg&s",
  },
];

export default function ForumsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
        Explore Forums
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {forums.map((forum) => (
          <Link
            key={forum.slug}
            href={`/forum/${forum.slug}`}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <div className="flex flex-col items-center gap-4 mb-4">
              <Image
                src={forum.image}
                alt={forum.name}
                width={64}
                height={64}
                className="rounded-full"
              />
              <h2 className="text-xl font-semibold text-indigo-700">
                {forum.name}
              </h2>
            </div>
            <p className="text-gray-600 text-sm">{forum.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}