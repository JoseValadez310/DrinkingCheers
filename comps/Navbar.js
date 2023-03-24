import Link from 'next/link'
import styles from '../src/styles/NavBar.module.css'


const Navbar = () => {
    return (  
        <div className = {styles.navBar}> 

            <div >
                <Link href="/"> <h1 className = {styles.logo}>DrinkingCheers</h1></Link>
            </div>

            <div className = {styles.linkContainer}>

                <button className = {styles.navListItem1}> <Link href="/Rules" > Rules     </Link></button>
                <button className = {styles.navListItem2}> <Link href="/Game"  > <strong> Lets Drink </strong> </Link></button>
                <button className = {styles.navListItem3}> <Link href="/About" > About     </Link></button>

            </div>

        </div>
    );
}

export default Navbar;   