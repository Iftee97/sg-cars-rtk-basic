import { useDispatch, useSelector } from "react-redux"
import { changeName, changeCost, addCar } from "../store"

export default function CarForm() {
  const dispatch = useDispatch()
  const { name, cost } = useSelector((state) => ({
    name: state.form.name,
    cost: state.form.cost,
  }))

  function handleNameChange(event) {
    dispatch(changeName(event.target.value))
  }

  function handleCostChange(event) {
    const carCost = parseInt(event.target.value) || 0
    dispatch(changeCost(carCost))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    dispatch(addCar({ name, cost }))

    // Reset the form
    dispatch(changeName(""))
    dispatch(changeCost(0))
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">
        Add Car
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">
              Name
            </label>
            <input
              type="text"
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
        </div>
        <div className="field-group">
          <div className="field">
            <label className="label">
              Cost
            </label>
            <input
              type="number"
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-link">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
