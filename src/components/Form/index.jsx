import './styles.css'

function Form(){
    return(
        <section class="last">
            <h2>Formulário Simples</h2>
            <form>
                <div>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required></input>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>
                </div>
                <div>
                    <label for="mensagem">Mensagem:</label><br></br>
                    <textarea id="mensagem" name="mensagem" rows="4" cols="50"></textarea>
                </div>
                <div>
                    <label for="idade">Idade:</label>
                    <input type="number" id="idade" name="idade" min="18" max="100"></input>
                </div>
                <div>
                    <label for="cor">Cor favorita:</label>
                    <input type="color" id="cor" name="cor"></input>
                </div>
                <div>
                    <label for="anexo">Anexo:</label>
                    <input type="file" id="anexo" name="anexo"></input>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default Form