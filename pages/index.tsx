const Home = ({patients}) => {
  
  return <>
    {
      <div>
        <ol>
          {
            patients.map((patient)=>{
              return <li key={patient.id} style={{color: 'red'}}>{patient.name} </li>
            })
          }
        </ol>
      </div>
    }
  </>
}

export const getStaticProps = async ()=>{
  const res = await fetch("http://localhost:3000/api/patient");
  const patients = await res.json();
  return {
    props: {
      patients
    }
  }
}

export default Home;