import './Banner.css'
import bannerImagem from '../../assets/imagens/banner.png'

export const Banner = () => {
    // JSX
    return (
        <header className="banner">
            <img src={bannerImagem} alt="O banner principal da página do Organo"/>
        </header>
    )
}