function About({ImgSrc = "https://via.placeholder.com/215", about}){
    return(
        <aside>
            <img src = {ImgSrc} alt = "blog logo"></img>
            <p>{about}</p>
        </aside>
    )
}

export default About;