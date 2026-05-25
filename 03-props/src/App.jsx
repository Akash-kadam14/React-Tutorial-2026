import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <div>
        <Card
          user="Akash"
          age={27}
          img="https://images.unsplash.com/photo-1777026059641-53bcbd04f194?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          user="Jysotna"
          age={46}
          img="https://images.unsplash.com/photo-1779681755263-8292902e1ef3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default App;
