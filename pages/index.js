import styles from "../styles/App.module.sass";
import App from "../src/components/App";
import { ProSidebarProvider } from "react-pro-sidebar";
export default function Home() {
  return (
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
  );
}
