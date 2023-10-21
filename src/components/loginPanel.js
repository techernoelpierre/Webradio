import './loginPanel.css'

export default function LoginPanel() {
    return (
        <form className="form" action="/votre-page-de-traitement" method="post">

            <h3>Connexion</h3>

            <input className="input" type="email" id="email" name="email" placeholder="Email" required />
            <input className="input" type="password" id="motdepasse" name="motdepasse" placeholder="Mot de passe" required />


            <input className="inputBtn" type="submit" value="Se connecter" />

            <p className="creatAcount">créer un compte</p>

        </form>
    )
}