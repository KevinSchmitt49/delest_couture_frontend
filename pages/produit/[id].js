import FicheProduit from "@components/FicheProduit";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useRouter } from "next/router";

const products = [
  {
    id: 1,
    name: "Produit A",
    collection: "Color",
    price: "99 €",
    images: [
      "/products/robea_a.jpg",
      "/products/robe_a.jpg",
      "/products/robe_b.jpg",
    ],
    shortDescription:
      "Le confort et la beauté réunis dans un seul modèle. Zip invisible dans la couture coté. Sertie de Trois pierres précieuses Swarovski.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Dark blue", "pink", "golden"],
  },
  {
    id: 2,
    name: "Produit B",
    collection: "Dark night",
    price: "129 €",
    images: ["/products/robe2a_a.jpg", "/products/robe2_a.jpg"],
    shortDescription:
      "Le confort et la beauté réunis dans un seul modèle. Zip invisible dans la couture coté. Sertie de Trois pierres précieuses Swarovski.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Dark blue", "pink", "golden"],
  },
  {
    id: 3,
    name: "Produit C",
    collection: "Color",
    price: "189 €",
    images: ["/products/robe3a_a.jpg", "/products/robe3_a.jpg"],
    shortDescription:
      "Le confort et la beauté réunis dans un seul modèle. Zip invisible dans la couture coté. Sertie de Trois pierres précieuses Swarovski.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Dark blue", "pink", "golden"],
  },
  {
    id: 4,
    name: "Produit D",
    collection: "Choud",
    price: "119 €",
    images: [
      "/products/robe4a_a.jpg",
      "/products/robe4_a.jpg",
      "/products/robe4_b.jpg",
    ],
    shortDescription:
      "Le confort et la beauté réunis dans un seul modèle. Zip invisible dans la couture coté. Sertie de Trois pierres précieuses Swarovski.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Dark blue", "pink", "golden"],
  },
];

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === parseInt(id));

  // Si le produit n'est pas encore trouvé (ex: pendant SSR), ne rien afficher
  if (!product) return <p>Chargement...</p>;
  console.log(product);

  return (
    <div>
      <Header />
      <FicheProduit product={product} />
      <Footer />
    </div>
  );
}
