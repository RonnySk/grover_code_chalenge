import GroverLogo from "./components/GroverLogo/page";
import SubscriptionCard from "./components/SubscriptionCard/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-24 p-24">
      <GroverLogo />
      <SubscriptionCard />
    </main>
  );
}
