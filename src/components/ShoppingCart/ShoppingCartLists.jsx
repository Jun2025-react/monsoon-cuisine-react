import ShoppingCartItem from './ShoppingCartItem'; // Assuming you have a ShoppingCartItem component

const ShoppingCartLists = ({ items = [] , handleFetch=()=>{}}) => {
    return (
        <>
            {
                items.length > 0 ? (
                    items.map((item, index) => (
                        <ShoppingCartItem key={index} item={item} handleFetchCartItems={handleFetch} />
                    ))
                ) : (
                    <div className="text-center text-muted">Your cart is empty.</div>
                )
            }
        </>
    )
}
export default ShoppingCartLists;