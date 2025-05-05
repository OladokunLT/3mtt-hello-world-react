import "./ListComponent.css";

const ListComponent = ({ items, renderItem }) => {

    if (!items || items.length === 0) {
        return <p>No item to show.</p>
    }

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{renderItem(item)}</li>
            ))}
        </ul>
    )
};

export default ListComponent;