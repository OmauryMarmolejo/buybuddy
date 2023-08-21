import { useFilters } from "../hooks/useFilters";
import "./Footer.css";
export function Footer() {
  const { filters } = useFilters();

  return (
    <footer className="footer">
      <h4>Victor Marmolejo</h4>
      <h5>Shopping Cart</h5>
      <p>{JSON.stringify(filters, null, 2)}</p>
    </footer>
  );
}
