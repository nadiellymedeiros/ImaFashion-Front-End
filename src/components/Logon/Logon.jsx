import { WhatsappLogo, User } from 'phosphor-react'
import styles from './Logon.module.css'

export function Logon() {
  return (
    <div className={styles.container}>
      <span className={styles.nav}>
        <img src="../assets/logo-dark.png" alt="" />
        <h1>Criar uma conta</h1>
        <p>Compre mais rápido e acompanhe seus pedidos em um só lugar!</p>
      </span>

      <main>
        <div className={styles.parte1}>
          <fieldset class="title">
            <div class="title">
              <legend className={styles.title}>
                <User size={32} color="#fff55" />
                Tipo de cadastro
              </legend>
            </div>

            <div class="body">
              <div class="form-group">
                <div class="opcao">
                  <label class="radio-inline">
                    <input
                      type="radio"
                      name="tipo"
                      id="pessoa fisica"
                      value="PESSOA FISICA"
                    />
                    Pessoa Física
                  </label>

                  <label class="radio-inline">
                    <input
                      type="radio"
                      name="tipo"
                      id="pessoa juridica"
                      value="PESSOA JURÍDICA"
                    />
                    Pessoa Jurídica
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          <form action="#" class="form">
            <fieldset>
              <legend>
                <i class="fa-solid fa-list"></i>Dados Pessoais
              </legend>
              <div class="form-group">
                <label for="nome" class="col-sm-2 control-label">
                  Nome
                  <input type="text" class="form-control" id="nome" />
                </label>
                <br />
              </div>

              <div class="form-group">
                <label for="nome" class="col-sm-2 control-label">
                  Sobrenome
                  <input type="text" class="form-control" id="nome" />
                </label>
                <br />
              </div>

              <div class="form-group">
                <label for="CPF" class="col-sm-2 control-label">
                  CPF/CNPJ
                  <input type="text" class="form-control" id="CPF" />
                </label>
                <br />
              </div>

              <div class="form-group">
                <label for="email" class="col-sm-2 control-label">
                  Email <input type="email" class="form-control" id="email" />
                </label>
              </div>

              <div class="form-group">
                <label for="celular" class="col-sm-2 control-label">
                  Celular <input type="tel" class="form-control" id="celular" />
                </label>
              </div>

              <div class="form-group">
                <label for="telefone" class="col-sm-2 control-label">
                  Telefone
                  <input type="tel" class="form-control" id="telefone" />
                </label>
              </div>
            </fieldset>
          </form>
        </div>

        <div class="parte2">
          <fieldset class="formulario">
            <legend>
              <i class="fa-solid fa-location-dot"></i>Endereço
            </legend>

            <div class="form-group">
              <label for="CEP" class="col-sm-2 control-label">
                CEP <input type="text" class="form-control" id="CEP" />
              </label>
            </div>

            <div class="form-group">
              <label for="endereço" class="col-sm-2 control-label">
                Endereço{' '}
                <input type="text" class="form-control" id="endereço" />
              </label>
            </div>

            <div class="form-group">
              <label for="numero" class="col-sm-2 control-label">
                Número <input type="text" class="form-control" id="numero" />
              </label>
            </div>

            <div class="form-group">
              <label for="complemento" class="col-sm-2 control-label">
                Complemento
                <input type="text" class="form-control" id="complemento" />
              </label>
            </div>

            <div class="form-group">
              <label for="referencia" class="col-sm-2 control-label">
                Referência
                <input type="text" class="form-control" id="referencia" />
              </label>
            </div>

            <div class="form-group">
              <label for="bairro" class="col-sm-2 control-label">
                Bairro <input type="text" class="form-control" id="bairro" />
              </label>
            </div>

            <div class="form-group">
              <label for="cidade" class="col-sm-2 control-label">
                Cidade <input type="text" class="form-control" id="cidade" />
              </label>
            </div>

            <div class="form-group-estado">
              <label for="estado" class="col-sm-2 control-label">
                UF
              </label>
              <div class="option">
                <select class="option" name="estado" id="estado">
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AM">AM</option>
                  <option value="AP">AP</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MG">MG</option>
                  <option value="MS">MS</option>
                  <option value="MT">MT</option>
                  <option value="PA">PA</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="PR">PR</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="RS">RS</option>
                  <option value="SC">SC</option>
                  <option value="SE">SE</option>
                  <option value="SP">SP</option>
                  <option value="TO">TO</option>
                </select>
              </div>
            </div>
          </fieldset>
        </div>
      </main>

      <div>
        <a href="../index.html" target="_parent">
          <button type="submit" class="botao1">
            Cancelar
          </button>
        </a>
        <button type="submit" class="botao2">
          Enviar
        </button>
      </div>
    </div>
  )
}
