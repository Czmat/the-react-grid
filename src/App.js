import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const state = [
    { backGround: false, id: 1 },
    { backGround: false, id: 2 },
    { backGround: false, id: 3 },
    { backGround: false, id: 4 },
    { backGround: false, id: 5 },
    { backGround: false, id: 6 },
    { backGround: false, id: 7 },
    { backGround: false, id: 8 },
    { backGround: false, id: 9 },
  ];
  const [boxes, setBoxes] = useState(state);

  const storage = window.localStorage;

  useEffect(() => {
    componentDidMount();
  }, []);
  const componentDidMount = () => {
    const local = JSON.parse(localStorage.getItem('local'));

    setBoxes(local);
  };

  const handleFormSubmit = (_backGround, id) => {
    storage.setItem('local', JSON.stringify(boxes));
  };

  const backgroundChange = id => {
    const updated = boxes.map((box, i) => {
      if (box.id === id) {
        box.backGround = !box.backGround;

        handleFormSubmit(box.backGround, id);
      }

      return box;
    });
    setBoxes(updated);
  };

  return (
    <div className="container">
      <h2 className="App-h1">
        Grid([
        {boxes
          .map(box => {
            return box.backGround;
          })
          .join(', ')}
        ])
      </h2>
      <div className="row row-cols-3">
        {boxes.map((box, i) => {
          return (
            <div
              key={i}
              onClick={() => backgroundChange(box.id)}
              style={{ backgroundColor: `${box.backGround ? 'pink' : ''}` }}
              className="col App"
            >
              Column
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

// class Profile extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       message: localStorage.getItem("message") || ""
//     };
//   }

//   onChange = event => {
//     const message = event.target.value;

//     localStorage.setItem("message", message);
//     this.setState({ message });
//   };

//   render() {
//     return <input value={this.state.message} onChange={this.onChange} />;
//   }
// }
