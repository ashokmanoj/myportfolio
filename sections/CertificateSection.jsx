import React, { useEffect, useState } from "react";
import Image from "next/image";

import { CERTIFICATES } from "../constants/CertificateSection";

const CertificateSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Avoid hydration error: render only on client
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className="p-8" id="certificates">
      <h2 className="text-3xl font-bold mb-6">Certificates</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {CERTIFICATES.map((cert, index) => (
          <div
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            key={index}
          >
            <div className="relative w-full h-48">
              <Image
                alt={cert.title}
                className="rounded-t-lg"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                // ✅ replaces layout="fill"src={cert.imageUrl} // preload first image
                style={{ objectFit: "cover" }} // ✅ replaces objectFit="cover"
                // eslint-disable-next-line react/jsx-sort-props
                fill
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <a
                className="text-blue-600 hover:underline"
                href={cert.pdfUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;
