// _app.js
import { ItemContextProvider } from "@/Context/ItemContext";
import "tailwindcss/tailwind.css"; // Import the main Tailwind CSS file

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ItemContextProvider>
      <Component {...pageProps} />
    </ItemContextProvider>
  );
}
