import PropTypes from "prop-types"
import {currency} from "src/util/currency"

export default function ListItemPrice({price}) {
  return (
    <div className="border-2 border-green text-sm text-green font-mono rounded py-1 px-2 inline">
      {currency(price)} FUSD
    </div>
  )
}

ListItemPrice.propTypes = {
  price: PropTypes.number.isRequired,
}