
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  console.log("Main.tsx: Starting app initialization");
  
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Root element not found!");
    document.body.innerHTML = '<div style="padding: 20px; text-align: center;"><h1>Error: Root element not found</h1></div>';
    throw new Error("Root element not found");
  }

  console.log("Root element found, creating root...");

  try {
    const root = createRoot(rootElement);
    console.log("Root created, rendering App...");
    root.render(<App />);
    console.log("App rendered successfully");
  } catch (error) {
    console.error("Error rendering app:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
        <h1>Error loading application</h1>
        <p style="color: red;">${error instanceof Error ? error.message : 'Unknown error'}</p>
        <p style="margin-top: 20px; font-size: 12px; color: #666;">Check the browser console for more details.</p>
      </div>
    `;
  }
  