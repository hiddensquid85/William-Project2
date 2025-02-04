import React from "react";


export interface Modeller {
  Name: String
  Model: string
  Manufacturer: string

}

export interface tableProp {
  modeller: Modeller[];

}



const ModelTable: React.FC<tableProp> = ({ modeller }) => {
  return (
    <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Model</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Manufacturer</th>
        </tr>
      </thead>
      <tbody>
      
      {modeller.map((item) => (
          <tr key={1}>
            
            <td  style={{
                border: "1px solid black",
                padding: "8px",
                backgroundColor: "#ffcccc", // Highlight for Name column
              }}>{item.Name}</td>

            <td               style={{
                border: "1px solid black",
                padding: "8px",
                backgroundColor: "#ccffcc", // Highlight for Model column
              }}>{item.Model}</td>

            <td style={{
                border: "1px solid black",
                padding: "8px",
                backgroundColor: "#ccccff", // Highlight for Manufacturer column
              }}>{item.Manufacturer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default ModelTable



