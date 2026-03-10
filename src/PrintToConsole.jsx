export default function PrintToConsole() {
    // 1. Define the logic
    function handlePrint() {
        console.log("Project Running!");
    }

    // 2. Return the JSX
    return (
        <>
            <button type="button" onClick={handlePrint}>
                Click Me to Print
            </button>
        </>
    );
}