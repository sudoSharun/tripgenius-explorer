
import TripPlanner from "@/components/TripPlanner";
import Nav from "@/components/Nav";

const PlanTrip = () => {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-sand pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-teal mb-8">Plan Your Trip</h1>
          <TripPlanner />
        </div>
      </main>
    </>
  );
};

export default PlanTrip;
