import Link from "next/link";
import styles from "./page.module.css"

export default function Rules() {
    return(
        <div>
            <div>
                <Title title='Regulamento'/>
            </div>
            <h2>
                Leia o Regulamento abaixo:
            </h2>
            <section>
                <h3>Sobre a leitura bíblica</h3>
                    <ol>
                        <li>As leituras devem ser diárias, durante toda a duração do desafio.</li>
                        <li>Ao realizar a leitura, você deverá enviar uma foto do seu momento de leitura e um pequeno comentário de algo que chamou a sua atenção.</li>
                        <li>Com o envio da leitura você acumula 1 ponto no dia. Caso não envie, você perderá 1 ponto.</li>
                    </ol>
                <h3>Sobre os treinos</h3>
                    <p>Os treinos serão divididos em semanas, em cada semana você terá que:</p>
                    <ul>
                        <li>5 dias de treino (musculação, crossfit ou funcional)</li>
                        <li>1 dia de exercício livre (futebol, vôlei, surf, pedal)</li>
                        <li>1 dia de descanso</li>
                        <li>OBS: A ordem pode ser aleatória. Faça a gestão da sua semana.</li>
                    </ul>
                    <p>Os treinos deverão ter no mínimo 30 minutos de duração, independente se será exercício livre ou não.</p>
                    <p>Ao realizar o treino, você deverá enviar uma foto do treino. </p>
                    <p>Com o envio do treino, você acumula 1 ponto no dia. Caso de não envio, não será debitado nenhum ponto.</p>
                <h3>Sobre o Investimento</h3>
                  <p>Cada participante deverá investir <strong>R$ 25,00</strong> para participar do desafio.</p>
                  <p>Caso inicie o desafio e o participante não tenha realizado o pagamento, será automaticamente desclassificado do desafio.</p>
                  <p>O pagamento poderá ser realizado via pix ou cartão de crédito.</p>
                  <p>O valor ficará guardado e será investido rendendo 100% do CDI durante o período do desafio.</p>  
                <h3>Sobre a Premiação</h3>
                <p>A premiação será dividida em 50% para o vencedor e 50% para a instituição da igreja do participante.</p>
                <p>Em caso de empate, 50% do valor será distribuído entre os vencedores.</p>
                <p>Em caso de empate, 50% do valor será doado para o Instituto Ceú no Sertão, projeto que acontece no interior do estado do Ceará.</p>
                <p><em><strong>Exemplo:</strong></em></p>
                <p>Se o vencedor faz parte da CCVideira, 50% do prêmio será enviado para o Instituto Vida Videira</p>
                <p>É estritamente importante que o participante informe a instituição da sua igreja no ato do cadastro</p>
            </section>
            <div>
                <Button text= "Voltar para página inicial" link="/"/>
            </div>
        </div>
    )
}