"use client";

import { useEffect, useState } from "react";
import GroverLogo from "./components/GroverLogo/page";
import SubscriptionCard from "./components/SubscriptionCard/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [allSubscriptions, setallSubscriptions] = useState<Subscription[]>([]);

  useEffect(() => {
    try {
      const fetchAllSubscriptions = async () => {
        setIsLoading(true);
        const response: Response = await fetch("/pages/api/subscriptions", {
          method: "GET",
        });

        const data = (await response.json()) as Subscription[];

        setallSubscriptions(data);
      };

      fetchAllSubscriptions();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center gap-16 p-24">
      <>
        <GroverLogo />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          allSubscriptions.map((oneSubscription) => (
            <>
              <SubscriptionCard
                key={oneSubscription._id}
                subscription={oneSubscription}
              />
            </>
          ))
        )}
      </>
    </div>
  );
}
