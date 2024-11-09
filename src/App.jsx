import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import PlantingArea from "./pages/PlantingArea";
import AddPlant from "./pages/AddPlant";
import DailyTasks from "./pages/DailyTasks";
import Setting from "./pages/Setting";
import Notif from "./components/Notif";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/track-plant" element={<PlantingArea />} />
        <Route path="/add-plant" element={<AddPlant />} />
        <Route path="/daily-tasks" element={<DailyTasks />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/notifications" element={<Notif />} />
        {/* halaman 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
