import AppSidebar from "./global/AppSidebar";
import AppNavbar from "./global/AppNavbar";
import { useState } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";


function App() {
  return (
    <div className='container'>
      <ProSidebarProvider>
      <AppSidebar/>
      <main className='main'>
        <AppNavbar />
      </main>
      </ProSidebarProvider>
    </div>
  );
}

export default App;
