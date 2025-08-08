import Footer from "@layouts/footer.layout"
import Header from "@layouts/header.layout"
import HomePage from "./pages/home.page";
import ResponsiveProvider from "./contexts/responsive.provider";


function App() {
  return (<ResponsiveProvider>
    <Header />
    <main className="w-full h-full min-h-screen overflow-x-hidden">
      <HomePage/>
    </main >
    <Footer />
  </ResponsiveProvider>)
}

export default App

