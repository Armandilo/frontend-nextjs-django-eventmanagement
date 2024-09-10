import Image from "next/image";
import Hero from "./components/hero/Hero";
import Feature from "./components/feature/Feature";
import Getstarted from "./components/getstarted/Getstarted";
import Hottest from "./components/hottest/Hottest";
import LineChart from "./components/charts/line/LineChart";
import Chartstats from "./components/chartstats/Chartstats";
import Footer from "./components/footer/Footer";


export default function Home() {
  return (
    <main className="">
     <Hero />
     <Hottest />
     <Chartstats />

    </main>
  );
}
