import Read from "./actions/Read";
import Create from "./actions/Create";
import Update from "./actions/Update";
import Delete from "./actions/Delete";

import "./App.css";

const App = () => {
    return (
        <div className="main">
            <Read /> <span />
            <Create /> <span />
            <Update /> <span />
            <Delete />
        </div>
    );
}

export default App;