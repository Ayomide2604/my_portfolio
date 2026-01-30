import "./App.css";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Resume from "./sections/Resume";
import About from "./sections/About";
function App() {
	return (
		<div>
			<Header />
			<div className="">
				<Hero />
				<Resume />
				<About />
				<Contact />
			</div>
			<Footer />
		</div>
	);
}

export default App;
