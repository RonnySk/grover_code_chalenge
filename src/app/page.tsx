"use client";

import { useEffect, useState } from "react";
import GroverLogo from "./components/GroverLogo/page";
import SubscriptionCard from "./components/SubscriptionCard/page";

export default function Home() {
  const [allSubscriptions, setallSubscriptions] = useState<Subscription[]>([]);

  useEffect(() => {
    try {
      const fetchAllSubscriptions = async () => {
        const response = await fetch("/pages/api/subscriptions", {
          method: "GET",
        });

        const data: Subscription[] = await response.json();

        setallSubscriptions(data);
      };

      fetchAllSubscriptions();
    } catch (error) {}
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center gap-16 p-24">
      <>
        <GroverLogo />
        {allSubscriptions.length === 0 ? (
          <div>Loading...</div>
        ) : (
          allSubscriptions.map((oneSubscription: Subscription) => (
            <>
              <SubscriptionCard
                key={oneSubscription._id}
                subscription={oneSubscription}
              />
            </>
          ))
        )}

        {/* another option 
        {allSubscriptions.length !== 0
          ? allSubscriptions.map((oneProduct) => (
              <>
                <SubscriptionCard key={2} product={oneProduct} />;
              </>
            ))
          : null} */}
      </>
    </div>
  );
}
