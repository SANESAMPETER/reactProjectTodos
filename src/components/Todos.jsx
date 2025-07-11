import { useState } from "react";

function Todos() {
    const Title = <h1>Todos App</h1>;

    const tableStyle = {
        border: "1px solid #e0e0e0",
        borderCollapse: "collapse",
        width: "50%",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        margin: "0 auto"
    };

    const thStyle = {
        backgroundColor: "#f5f5f5",
        padding: "12px",
        textAlign: "center",
        borderBottom: "2px solid #e0e0e0"
    };

    const tdStyle = {
        padding: "12px",
        borderBottom: "1px solid #e0e0e0",
        textAlign: "center"
    };

    const trHoverStyle = {
        backgroundColor: "#f9f9f9"
    };

    const [inputValue, setInputValue] = useState('');
    const [textList, setTextList] = useState([]);
    const [error, setError] = useState(false);


    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function addTodos() {

        if (inputValue.trim()) {
            setTextList([...textList, {
                id: Date.now(),
                text: inputValue,
                isChecked: false
            }]);
            setInputValue('');
            setError(false);
        } else {
            setError(true);
        }
    }

    function toggleCheck(id) {
        setTextList(textList.map(item =>
            item.id === id ? { ...item, isChecked: !item.isChecked } : item
        ));
    }

    return (
        <>
            {Title}
            <div style={{ textAlign: "center", margin: "20px 0" }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Add new todo"
                    style={{
                        padding: "8px",
                        marginRight: "10px",
                        width: "200px"
                    }}
                />

                {error && (
                    <p style={{ color: 'red' }}>Field should not be empty when submitting</p>
                )}

                <button
                    onClick={addTodos}
                    style={{
                        padding: "8px 16px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer"
                    }}
                >
                    +
                </button>
            </div>

            <div id="displayDatas" style={{ textAlign: "center" }}>
                <h3>List Of Todos</h3>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>All</th>
                            <th style={thStyle}>Complete</th>
                            <th style={thStyle}>Incomplete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ ':hover': trHoverStyle }}>
                            <td style={tdStyle}>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    {textList.filter(item => !item.isChecked).map(item => (
                                        <li key={item.id} style={{ margin: "5px 0" }}>
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td style={tdStyle}>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    {textList.filter(item => item.isChecked).map(item => (
                                        <li key={item.id} style={{ margin: "5px 0" }}>
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td style={tdStyle}>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    {textList.map(item => (
                                        <li key={item.id} style={{ margin: "5px 0" }}>
                                            <input
                                                type="checkbox"
                                                checked={item.isChecked}
                                                onChange={() => toggleCheck(item.id)}
                                                style={{ marginRight: "8px" }}
                                            />
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Todos;