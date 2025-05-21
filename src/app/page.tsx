import OurProject from "@/components/home-component/OurProject";
import Service from "@/components/home-component/Service";
import WhoAreWe from "@/components/home-component/WhoAreWe";

export default function Home() {
  return (
<div className="w-full py-40 bg-home " >
  <OurProject/>
  
  <Service/>
  <WhoAreWe/>
</div>
  );
}
