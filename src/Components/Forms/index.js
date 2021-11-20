import { React, Component } from "react";
import api from "../../api";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { dataEnvio: "", emailDestinatario: "", mensagem: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const response = await api.post(this.state);

        this.setState({ filmes: response.data });
    }

    handleChange(event) {
        console.log(event.target.name);
        switch (event.target.name) {
            case "dataEnvio":
                this.setState({ dataEnvio: event.target.value });
                break;
            case "emailDestinatario":
                this.setState({ emailDestinatario: event.target.value });
                break;
            case "mensagem":
                this.setState({ mensagem: event.target.value });
                break;
            default:
                break;
        }
    }

    handleSubmit(event) {
        alert(
            "Um email será enviado para : " +
                this.state.emailDestinatario +
                " em " +
                this.state.dataEnvio +
                " com a mensagem: " +
                this.state.mensagem
        );
        event.preventDefault();
    }

    render() {
        return (
            <>
                <h1>Formulario</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Data</label>
                    <input
                        type="datetime-local"
                        name="dataEnvio"
                        value={this.state.dataEnvio}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>Email Destinatário</label>
                    <input
                        type="email"
                        name="emailDestinatario"
                        value={this.state.emailDestinatario}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>Mensagem</label>
                    <textarea name="mensagem" value={this.state.mensagem} onChange={this.handleChange} />
                    <br />
                    <input type="submit" value="Enviar para o futuro" />
                </form>
            </>
        );
    }
}

export default Form;
