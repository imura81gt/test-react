var FilterableProductTable = React.createClass({
    render: function() {
        return (
            <SearchBar />
        );
    }
});


var SearchBar = React.createClass({
    render: function() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    Only show products in stock
                </p>
            </form>        
        );
    }
});

ReactDOM.render(
    <FilterableProductTable />,
    document.getElementById('container')
);