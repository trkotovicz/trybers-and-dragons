# Trybers & Dragons

O objetivo deste projeto, foi aplicar os princípios da arquitetura SOLID e os princípios de POO (Programação Orientada a Objetos) em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG (Role Playing Game).

As ferramentas utilizadas no desenvolvimento foram: Docker, Typescript, Node.Js e Express. 


### Inicialização via Docker 🐳

<details>
  <summary><strong>➕ Instruções</strong></summary><br />
  
  - Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `trybers_and_dragons`.
  - A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code.
  - Use o comando `docker exec -it trybers_and_dragons bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
  - Instale as dependências com `npm install`
  
  ⚠ Atenção: Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 
</details>


## 🐉 Contextualizando

  No universo de Trybers and Dragons - T&D, quase todos os seres que andam por essas terras pertencem a uma **raça** definida.

  As diversas raças (como, por exemplo, Élfica, Orc ou Anã) definem as características das personagens dentro do jogo desde a sua criação, como os seus pontos de vida e a sua destreza. No entanto, existem seres bestiais denominados **monstros** que não possuem uma raça específica, mas podem lutar.

  Alguns seres também possuem uma **energia** e, ao treinarem o uso da energia, passam a possuir um **arquétipo**. De modo geral, os arquétipos definem a vocação de uma personagem, suas habilidades e visão de mundo: como encaram as situações, exploram masmorras ou enfrentam monstros. Como exemplos de arquétipos presentes em T&D, podemos citar guerreiro, mago e necromante.

  Boa parte dos seres podem ser considerados lutadores, bastando para isso possuir alguns atributos específicos. Em muitas ocasiões podem acontecer lutas entre personagens diversas, bem como entre personagens e monstros.

  Agora, cabe a você, nobre ~~dev~~, explorar essas terras e cumprir as quests que surgirão ao longo da sua incrível jornada.

  **_Now, follow ~~the blind~~ the dungeon master!_**

---

### Classe abstrata `Race`

No universo de Trybers and Dragons - T&D, quase todos os seres racionais têm uma raça e, embora todas as raças de personagens sejam humanoides, cada uma tem as suas particularidades.

A raça influencia desde a aparência geral até fatores como longevidade média, talento em determinadas habilidades ou mesmo a presença de algum sentido mais aguçado nos habitantes desse universo.


### Classes que herdam de `Race`

Já foi dito anteriormente que há uma diversidade de raças neste universo e agora chegou a hora de você saber mais a respeito de algumas delas. Nesta segunda quest, você irá conhecer as quatro raças que existem no mundo de T&D.

- A raça `Dwarf` recebe 80 pontos de vida;
- A raça `Elf` recebe 99 pontos de vida;
- A raça `Halfling` recebe 60 pontos de vida;
- A raça `Orc` recebe 74 pontos de vida.


### Interface `Energy`

Energia é um atributo vital para a maioria dos seres. No contexto de `Trybers and Dragons`, a energia gasta ao se andar, nadar, escalar ou lutar é chamada de *"stamina"* .
Contudo, esse universo também abriga seres capazes de usar magia. Nesses casos, a energia gasta é chamada de *"mana"*.

Nessa quest é possível o uso destes dois tipos de energia:  *"stamina"* e *"mana"*.


### Classe `Archetype`

Dentro do nosso universo, os seres têm talentos especiais e cada um desses talentos tem o seu nome dentro de T&D.
Aqui vamos ter alguns atributos super legais e necessários, que representarão o nome, a potência do seu ataque especial e o custo energético para utilizá-lo. Por isso, sua próxima *quest* será **usar a classe abstrata `Archetype`**.


### Classes que herdam de `Archetype`

Como você pode imaginar, há diversos arquétipos diferentes no mundo de *Trybers and Dragons*, cada um com as suas peculiaridades e alinhamentos.
Agora, chegou a hora de você conhecer alguns desses arquétipos. E o que poderia ser melhor para isso do que criar classes para eles?

No momento, vamos nos ater a quatro arquétipos muito comuns aos seres deste universo:
  - `Mage` 🧙‍♀️
  - `Necromancer` ☠️
  - `Warrior` ⚔️
  - `Ranger` 🍃

Cada arquétipo possui a habilidade de causar danos em seus inimigos de forma diferente:
  - Os arquétipos `Mage`🧙‍♀️ e `Necromancer`☠️ causam dano por meio de magia, através do uso de `mana`.
  - Os arquétipos `Warrior` ⚔️ e `Ranger` 🍃 causam dano por meio de sua força, usando `stamina`.


### Interface `Fighter`

Um universo tão rico e cheio de diferentes seres, com diferentes alinhamentos, convicções e personalidades pode não ser um lugar sempre amigável. Por isso, seus habitantes têm que ser capazes de se defender ou de inventar artimanhas para se livrarem de brigas, confusões e armadilhas. Sendo assim, podemos dizer que todos os seres de T&D são, em essência, lutadores.

Preparamos para você a missão especial de criar a interface `Fighter`.


### Classe `Character`

Maravilha! Agora já temos tanto as nossas raças quanto os nossos arquétipos e interfaces definidos. Mas antes de sair por aí entrando em tavernas e calabouços, temos outra *quest*: **criar uma personagem**!

Cada personagem será composta tanto por uma raça quanto por um arquétipo. Essa classe reunirá um conjunto de características que terão o poder de fazer desse ser o mais único possível. Além disso, personagens devem possuir tudo o que se espera de alguém que luta.

- **`receiveDamage 😵`** este método recebe um valor (`attackPoints`) e as regras são:
    - Este valor deve ser decrescido de sua defesa (`defense`), assim causando um dano (`damage`);
    - Se o dano for maior que `0`, você perde pontos de vida (`lifePoints`);
    - Ao receber o ataque e perder pontos de vida (`lifePoints`);
    - Ao final retorna o valor atualizado de seus pontos de vida.
- **`attack 🪄`** este método recebe por parâmetro uma pessoa inimiga (`enemy`) e as regras são:
    - Toda vez que acontecer um ataque, o inimigo recebe um dano;
    - Este dano deve ser equivalente a força (`strength`) de quem ataca.
- **`levelUp 🆙`**:
    - Sempre que este método for chamado os atributos `maxLifePoints`, `strength`, `dexterity` e `defense` terão um incremento de no mínimo 1 e no máximo 10 pontos;
    - O atributo `maxLifePoints` do Character **nunca poderá ser maior** que o `maxLifePoints` de sua raça (`race`).
    - Ao final, o atributo `lifePoints` também deve ser atualizado, recebendo o novo valor de `maxLifePoints` (de acordo com as regras anteriores).
- **`special ⚡`** este método não recebe parâmetro e as regras é você quem decide:
    - Aqui você pode expandir sua mente e realizar a lógica que achar mais interessante para um ataque especial, use tudo que aprendeu no mundo de T&D! :dragon_face:


### Interface `SimpleFighter`

Uau, o nosso universo de T&D está ficando fabuloso! No entanto, nem todo mundo que luta possui capacidades avançadas, como ter uma defesa ou realizar ataques especiais. Dito isto, vamos para mais uma *quest*: **criar a interface lutador simples**


### Classe `Monster`

Se existem seres que implementam a `interface Fighter`, deve existir seres que implementam a `interface SimpleFighter` também, não é ? Estes são os `Monsters`, criaturas bestiais que apenas atacam outros seres. Então, sua próxima *quest* é: **criar a classe Monster**!


### Classe `PVP`

A ideia do mundo de T&D ser completamente pacífico provavelmente já deve ter desaparecido da sua mente depois das suas últimas *quests*. 
Nesse mundo, existem lutas, muitas delas inclusive épicas, denominadas `Battles` (batalhas). Sua representação geral/abstrata já foi fornecida anteriormente, entretanto, existem tipos específicos de batalhas. Uma dessas batalhas chamamos de `PVP`, batalhas entre personagens (ou *player versus player*), que só podem acontecer entre personagens lutadores (`Fighters`). 🧙‍♀️ ⚔️ 🧙‍♂️


### Classe `PVE`

Nem todas as batalhas são entre personagens lutadoras (`Character`), afinal, há perigos à solta que espreitam ao escurecer, em densas florestas ou em calabouços profundos.

Monstros representam alguns destes perigos, assim, temos as batalhas do tipo `PVE`(*player versus environment*), em que personagens (sempre do tipo `Fighter`) podem lutar contra um ou mais monstros assustadores (`SimpleFighter`). Parece interessante, não é? Essa é a sua próxima *quest*! 🧙‍♀️ ⚔️ 👾👹👻


### Classe `Dragon`

Seria muito estranho se esse mundo se chamasse Trybers and Dragons e não existissem `Dragons`, não é mesmo?
Estes seres magníficos são representados como monstros aqui, mas com a característica especial de possuírem elevados valores de pontos de vida.

Nesta *quest*, você deve **criar a classe `Dragon`**.


### Hora da `Batalha`

Você já modelou todo o mundo de T&D, maravilha!

Agora repare que, por mais que a gente saiba o que são `Monster`, `Character`, `Dragon`, `PVE`, etc, nenhum desses foi visto em ação. Então a sua última *quest* para completar essa aventura é dar vida às suas personagens e criar algumas instâncias das classes criadas anteriormente. 🪄

Para isso, abra o arquivo `src/index.ts` e crie seus personagens.

Agora é só iniciar as batalhas. ⚔️

---

Projeto desenvolvido por [Thais R Kotovicz](https://www.linkedin.com/in/thaiskotovicz/).
</br>












