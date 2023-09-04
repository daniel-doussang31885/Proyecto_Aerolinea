import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { CgMenuBoxed } from "react-icons/cg";
import { useScrollPosition } from "../Hooks/scrollPosition";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

    const [navBarOpen, setNavBarOpen] = useState(false);
    const scrollPosition = useScrollPosition();
    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const detectDimension = () => {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        })

    };

    useEffect(() => {
        window.addEventListener('resize', detectDimension)
        windowDimension.width > 800 && setNavBarOpen(false)
        return () => {
            window.removeEventListener('resize', detectDimension)
        }

    }, [windowDimension]);

    const link = [
        {
            id: 1,
            link: "Inicio",
        },
        {
            id: 2,
            link: "Destinos",
        },
        {
            id: 3,
            link: "Hoteles",
        },
        {
            id: 4,
            link: "CentroAyuda",
        },
        {
            id:5,
            link:"Contacto",
        },
    ];

    return (
        <div className={
            navBarOpen
                ? styles.navOpen
                : scrollPosition > 0
                    ? styles.navOnScroll
                    : styles.navBar
        }
        >
            {!navBarOpen && <p className={styles.logo}>AEROLÍNEA | Vuela Lejos</p>}
            {!navBarOpen && windowDimension.width < 800 ? (
                <CgMenuBoxed color= "#ffff" onClick={() => setNavBarOpen(!navBarOpen)} size={25} />
            ) : windowDimension.width < 800 && (
                <AiOutlineClose
                    color="#f1f1f1"
                    onClick={() => setNavBarOpen(!navBarOpen)}
                    size={25}
                />
            )}
            {
                navBarOpen && (
                    <ul className={styles.linksContainer}>
                        {link.map((x) => (
                            <div>
                                <Link
                                    onClick={() => setNavBarOpen(false)}
                                    to={x.link}
                                    smooth
                                    duration={500}
                                    className={styles.navLink}
                                >{x.link === "CentroAyuda" ? "Centro de ayuda" : x.link}
                                </Link>
                                <div className={styles.border}></div>
                            </div>
                        ))}
                    </ul>
                )}
            {
                windowDimension.width > 800 &&
                <ul className={styles.linksContainer}>
                    {link.map((x) => (
                        <div>
                            <Link
                                onClick={() => setNavBarOpen(false)}
                                to={x.link}
                                smooth
                                duration={500}
                                className={styles.navLink}
                            >{x.link === "CentroAyuda" ? "Centro de ayuda" : x.link}
                            </Link>
                            <div className={styles.border}></div>
                        </div>
                    ))}
                    <Link onClick={() => setNavBarOpen(false)}
                        to="Contacto"
                        smooth
                        duration={500}
                        className={styles.contactLink}>
                        
                    </Link>
                </ul>
            }
        </div>
    )
}

export default Navbar