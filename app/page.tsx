import { Community, Navbar, Stays } from "@/sections";
import Ammenities from "@/sections/ammenities";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Stays />
      <Ammenities/>
      <Community/>
    </main>
  );
}
