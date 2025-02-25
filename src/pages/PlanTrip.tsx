
import TripPlanner from "@/components/TripPlanner";
import Nav from "@/components/Nav";

const PlanTrip = () => {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-gradient-to-b from-sand/50 to-white pt-24">
        <div className="container mx-auto px-4">
          <TripPlanner />
        </div>
      </main>
    </>
  );
};

export default PlanTrip;
