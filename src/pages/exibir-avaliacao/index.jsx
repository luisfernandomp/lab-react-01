import ButtonComponent from "../../components/button-component";
import ButtonRadiusComponent from "../../components/button-radius-component";
import CardComponent from "../../components/card-component";
import ContainerComponent from "../../components/container-component";
import { Link } from "react-router-dom";
import "./styles.css";

export default function ExibirAvaliacao() {
  return (
    <ContainerComponent centralizar="true">
      <CardComponent>
        <aside>
          <ButtonRadiusComponent
            foregroundColor="#656c77"
            image="../../assets/images/star.png"
            backgroundColor="#272f38"
          />
        </aside>
        <section className="avaliation">
          <h1>Avalie nossos serviços</h1>
          <p>
            Por favor conte um pouco sobre como foi sua experiência ao usar
            nosso serviço. Todo retorno é importante para nós melhormos!
          </p>
        </section>
        <section className="container-steps">
          <ButtonRadiusComponent
            foregroundColor="#656c77"
            name="1"
            backgroundColor="#272f38"
          />
          <ButtonRadiusComponent
            foregroundColor="#656c77"
            name="2"
            backgroundColor="#272f38"
          />
          <ButtonRadiusComponent
            foregroundColor="#656c77"
            name="3"
            backgroundColor="#272f38"
          />
          <ButtonRadiusComponent
            foregroundColor="#313943"
            name="4"
            backgroundColor="#8e94a0"
          />
          <ButtonRadiusComponent
            foregroundColor="#FFFFFF"
            name="5"
            backgroundColor="#FC7612"
          />
        </section>
        <Link to="/avaliar">
          <ButtonComponent
            foregroundColor="#FFFFFF"
            name="Avaliar"
            backgroundColor="#FC7612"
          />
        </Link>
      </CardComponent>
    </ContainerComponent>
  );
}
