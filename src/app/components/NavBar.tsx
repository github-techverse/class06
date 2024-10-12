export default function Navbar() {
    return (
        <nav style={{ display:"flex",justifyContent:"space-between", backgroundColor:"blue" }}>
            <div style={{ border:"1px solid red" }}>Logo</div>
            <ul style={{ border:"1px solid blue", display:"flex", gap:"30px", listStyleType:"none", height:"10px" }}>
                <li><a style={{ color:"red", textDecoration:"none", fontSize:"20px" }} href="/">Home</a></li>
                <li><a style={{ color:"red", textDecoration:"none", fontSize:"20px" }} href="/about">About</a></li>
                <li><a style={{ color:"red", textDecoration:"none", fontSize:"20px" }} href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}