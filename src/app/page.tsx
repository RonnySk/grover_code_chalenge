"use client";

import { useEffect, useState } from "react";
import GroverLogo from "./components/GroverLogo/page";
import SubscriptionCard from "./components/SubscriptionCard/page";

export default function Home() {
  const [allSubscriptions, setallSubscriptions] = useState([]);

  console.log("all sub", allSubscriptions);

  useEffect(() => {
    try {
      const fetchAllSubscriptions = async () => {
        const response = await fetch("/pages/api/subscriptions", {
          method: "GET",
        });

        const data = await response.json();

        console.log("response from api", data);
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
          allSubscriptions.map((oneProduct) => (
            <>
              <SubscriptionCard key={2} product={oneProduct} />;
            </>
          ))
        )}
      </>
    </div>
  );
}
