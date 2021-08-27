import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "")
      alert("all fields are madentory");
    else {
      this.props.addContactHandler(this.state);
      this.setState({ name: "", email: "" });
    }
  };
  render() {
    return (
      <>
        <div className="ui main">
          <h2>Add Contact</h2>
          <form className="ui form" onSubmit={this.add}>
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <button className="ui button blue">Add</button>
          </form>
        </div>
      </>
    );
  }
}

export default AddContact;

// import React from "react";

// const AddContact = () => {
//   const state = {
//     name: "",
//     email: "",
//   };
//   return (
//     <div>
//       <div className="ui main">
//         <h2>Add Contact</h2>
//         <form className="ui form">
//           <div className="field">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={this.state.name}
//               onChange={(e) => this.setState({ name: e.target.value })}
//             />
//           </div>
//           <div className="field">
//             <label>Email</label>
//             <input type="text" name="email" placeholder="Email" />
//           </div>
//           <button className="ui button blue" style={{ margin: "0  0 30px " }}>
//             Add Contact
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddContact;
