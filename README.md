# king-in-black-marvel
 Repositório dedicado ao desenvolvimento de uma API que contará com o desenvolvimento da saga King In Black da Marvel

## API da Marvel

Esta é uma API que permite acessar informações sobre personagens, quadrinhos e criadores do universo da Marvel.

### Rotas

#### Personagens

- **`POST /character`**
  - Cria um novo personagem.
- **`GET /characters`**
  - Retorna todos os personagens.
- **`GET /character/:id`**
  - Retorna um personagem pelo ID.
- **`PUT /character/:id`**
  - Atualiza um personagem pelo ID.
- **`DELETE /character/:id`**
  - Remove um personagem pelo ID.
- **`GET /allCharacters`**
  - Retorna todos os personagens da API da Marvel.
- **`GET /characterByName/:name`**
  - Busca um personagem pelo nome.

#### Quadrinhos

- **`POST /comic`**
  - Cria um novo quadrinho.
- **`GET /comics`**
  - Retorna todos os quadrinhos.
- **`GET /comic/:id`**
  - Retorna um quadrinho pelo ID.
- **`PUT /comic/:id`**
  - Atualiza um quadrinho pelo ID.
- **`DELETE /comic/:id`**
  - Remove um quadrinho pelo ID.
- **`GET /comicFeatures`**
  - Retorna características dos quadrinhos da API da Marvel.
- **`GET /comicStories`**
  - Retorna histórias dos quadrinhos da API da Marvel.

#### Criadores

- **`POST /creator`**
  - Cria um novo criador.
- **`GET /creators`**
  - Retorna todos os criadores.
- **`GET /creators/:id`**
  - Retorna um criador pelo ID.
- **`PUT /creators/:id`**
  - Atualiza um criador pelo ID.
- **`DELETE /creators/:id`**
  - Remove um criador pelo ID.
- **`GET /creatorsComic`**
  - Retorna informações dos criadores dos quadrinhos da API da Marvel.