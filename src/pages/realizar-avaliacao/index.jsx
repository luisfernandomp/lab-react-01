import CardComponent from "../../components/card-component";
import ContainerComponent from "../../components/container-component";
import { Link } from "react-router-dom";
import "./styles.css";

export default function RealizarAvaliacao() {
  return (
    <ContainerComponent centralizar="true">
      <CardComponent>
        <aside className="aside-thanks">
          <img src="../../assets/images/thanks.png" alt="" />
        </aside>
        <div className="button-nota">
          <button>Você deu a nota 4 de 5</button>
        </div>
        <section className="text-thanks">
          <h1>Obrigado!</h1>
          <p>
            Estamos felizes e agradecidos por usar parte do seu tempo para dar
            sua opinião. Se precisar de ajuda futuramente pode nos procurar!
          </p>
          <Link to="/">
            <button>Avaliar Novamente</button>
          </Link>
        </section>
      </CardComponent>
    </ContainerComponent>
  );
}
