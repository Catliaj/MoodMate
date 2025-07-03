
function Header()
{
    return(
        <header>
            
            <img src = "logo.png" className="logo"></img>
            <br></br>
            <h1> &nbsp; MoodMate: A Personal Mood Tracker & Journal</h1>
            <nav>
                <ul className="Navigation">
                    <li> <a href="#"> Home </a>  </li>
                    <li> <a href="#">  About </a>  </li>
                    <li> <a href="#">  Contacts </a>  </li>
                    <button className="login-btn" >   Login   </button>  &nbsp;  &nbsp;  &nbsp;
                    <button className="signup-btn">   SignUp </button>
                    
                </ul>
            </nav>
            <br></br>
            <hr></hr>
        </header>
    );
}

export default Header