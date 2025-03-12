import HeroSlider from "../components/ui/HeroSlider"; // Importamos el slider
import ProductCard from "../components/ProductCard";
import MainLayout from "../components/layouts/MainLayout";
import { Grid, Typography } from "@mui/material";

const products = [
  { id: 1, name: "Pizza Margarita", price: 10, category: "Pizzas" },
  { id: 2, name: "Empanada de Carne", price: 5, category: "Empanadas" },
  { id: 3, name: "Coca Cola 500ml", price: 3, category: "Bebidas" },
  { id: 4, name: "Flan con Dulce de Leche", price: 8, category: "Postres" },
];

const categorias = ["Pizzas", "Empanadas", "Bebidas", "Postres"];

export default function Home() {
  const { cart, loadCart } = useCartStore();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    loadCart();
    console.log("Carrito en Home:", cart);
  }, []);

  // Filtrar productos por categoría
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <MainLayout>
      {/* 🔹 Aquí agregamos el HeroSlider antes del contenido */}
      <HeroSlider />

      {categorias.map((categoria) => (
        <div key={categoria}>
          <Typography variant="h4" sx={{ marginTop: 3, marginBottom: 2 }}>
            {categoria}
          </Typography>
          <Grid container spacing={2}>
            {products
              .filter((product) => product.category === categoria)
              .map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4}>
                  <ProductCard product={product} />
                </Grid>
              ))}
          </Grid>
        </div>
      ))}
    </MainLayout>
  );
}
 