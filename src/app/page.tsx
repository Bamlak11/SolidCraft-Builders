import Alert from "./Components/Alerts";
import Announcement from "./Components/Announcement";
import Appointments from "./Components/Appointments";
import LatestProjects from "./Components/LatestProjects";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import ToDo from "./Components/ToDo";
import Updates from "./Components/Updates";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />

      <div className="flex space-x-4">
        <Sidebar />

        <div className="pt-4 flex max-h-screen overflow-y-auto flex-col">
          <Announcement />

          <h1 className="text-black pt-10 font-bold text-2xl">Today's Agenda</h1>

          <div className="flex space-x-3 my-2">
            <Appointments />
            <ToDo/>
          </div>
          <LatestProjects />
        </div>

        <div className="py-4 pr-3 space-y-4 flex flex-col">
          <Alert />
          <Updates />

        </div>

      </div>

    </main>
  );
}
