import Layout from "@/shared/views/components/layout"
import TitleHeader from "@/shared/views/components/titleHeader"

interface CartTableProps {
}

export default function CartTable() {
  return (
    <div className="w-full">
    <table className="table-fixed">
    <thead>
      <tr>
        <th>Id</th>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
        <td>Malcolm Lockyer</td>
        <td>1961</td>
      </tr>
      <tr>
        <td>Witchy Woman</td>
        <td>The Eagles</td>
        <td>1972</td>
      </tr>
      <tr>
        <td>Shining Star</td>
        <td>Earth, Wind, and Fire</td>
        <td>1975</td>
      </tr>
    </tbody>
  </table>
  </div>
  )
}
