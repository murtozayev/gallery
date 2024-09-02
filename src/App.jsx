import { useEffect, useState } from "react"

const App = () => {
  const [data, setData] = useState([])
  const api = "http://localhost:2990/"

  async function getData() {
    try {
      const req = await fetch(api)
      const res = await req.json()
      setData(res)
    } catch (err) {
      throw new Error(err.message)
    }
  }

  useEffect(() => {
    getData()
  }, [api])

  console.log(data);

  return (
    <div>
      <h1>Gallery</h1>
      <div id="container">
        {data && data.map((item) => {
          return (
            <div id="card" key={item.id}>
              <img src={item.image} alt="Image" />
              <h1>{item.name}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
