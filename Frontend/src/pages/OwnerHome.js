import React, { useState, useEffect } from 'react';



const TotalIncome = () => {
  const [totalIncomeData, setTotalIncomeData] = useState({});

  useEffect(() => {
    console.log('payment run')

    // Make an API request to fetch the payment data from the backend

    fetch('http://localhost:4000/api/payment')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)

        // Calculate total income for each bus based on bus_id and date
        const totalIncomeByBus = {};

        data.forEach((payment) => {
          if (!totalIncomeByBus[payment.bus_id]) {
            totalIncomeByBus[payment.bus_id] = 0;
          }

          // You may need to add a condition to filter data by date here
          totalIncomeByBus[payment.bus_id] += payment.total;

          

        });

        console.log(totalIncomeByBus)

        setTotalIncomeData(totalIncomeByBus);
      })

      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='table1'>
    <h1>Total Income </h1>
    <br/>
    <br/>
    <table class="table">
  <thead>
    <tr>
      <th></th>
      <th scope="col">Bus ID</th>
      <th></th>
      <th></th>
      <th></th>
      <th scope="col">Total Income</th>
     
    </tr>
  </thead>
  <tbody>
    {Object.entries(totalIncomeData).map(([bus_id, totalAmount]) => (
            <tr key={bus_id}>
              <td></td>
              <td>{bus_id}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>Rs.  {totalAmount.toFixed(2)}</td>
            </tr>
          ))}
  </tbody>
</table>
  </div>
  );


  
};

export default TotalIncome;