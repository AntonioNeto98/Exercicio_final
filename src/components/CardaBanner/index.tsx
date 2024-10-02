import macarrao from '../../assets/images/macarrao.png'
import { Banner } from './styles'



const CardaBanner = () => (
    <Banner style={{backgroundImage: `url(${macarrao})`}}>
        <div className="container">
            <p>Italiana</p>
            <h2>La Dolce Vita Trattoria</h2>
        </div>
    </Banner>
)

    export default CardaBanner