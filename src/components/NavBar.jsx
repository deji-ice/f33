
const NavBar = () => {
    return (
        <div className="bg-[#1B2F33] px-20 flex  py-5 text-white justify-between" >
            <div>
                Logo
            </div>
            <div>
                <ul className=" flex  gap-5 ">
                    <li>Resume</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Tech Stack</li>
                    <li>Projects</li>
                    <li>Contact Me</li>
                </ul>
            </div>
        </div> 
    )
}

export default NavBar