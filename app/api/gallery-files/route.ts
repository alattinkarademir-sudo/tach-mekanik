import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const galleryPath = path.join(process.cwd(), "public", "galeri");

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
const videoExtensions = [".mp4", ".webm", ".mov"];

export async function GET() {
  try {
    const categories = fs.readdirSync(galleryPath, {
      withFileTypes: true,
    });

    const gallery: {
      title: string;
      category: string;
      image: string;
      type: "image" | "video";
    }[] = [];

    for (const category of categories) {
      if (!category.isDirectory()) continue;

      const categoryPath = path.join(galleryPath, category.name);
      const files = fs.readdirSync(categoryPath);

      for (const file of files) {
        const extension = path.extname(file).toLowerCase();

        let type: "image" | "video" | null = null;

        if (imageExtensions.includes(extension)) {
          type = "image";
        } else if (videoExtensions.includes(extension)) {
          type = "video";
        }

        if (!type) continue;

        gallery.push({
          title: file,
          category: category.name,
          image: `/galeri/${category.name}/${file}`,
          type,
        });
      }
    }

    return NextResponse.json(gallery);
  } catch (error) {
    console.error("Galeri okunamadı:", error);

    return NextResponse.json(
      {
        error: "Galeri okunamadı",
      },
      {
        status: 500,
      }
    );
  }
}