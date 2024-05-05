import request from 'supertest';
import app from '../src/app';
import mongoose from 'mongoose';

describe('Testes da API Marvel Saga', () => {
  let agent;

  beforeAll(async () => {
    agent = request(app);
    await Promise.all(
      Object.values(mongoose.connection.collections).map(async (collection) => {
        await collection.deleteMany({});
      })
    );
  });
  
  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('Deve retornar todos os personagens da saga', async () => {
    const response = await agent.get('/characters');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('Deve criar um novo personagem', async () => {
    const newCharacter = {
      name: 'Novo Personagem',
      description: 'Descrição do novo personagem',
      image_url: 'https://example.com/novo_personagem.jpg',
      main_character: false
    };

    const response = await request(app)
      .post('/character')
      .send(newCharacter);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newCharacter);
  });

  it('Deve retornar um personagem específico pelo ID', async () => {
    const characterId = 1;
    const response = await request(app).get(`/character/${characterId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(characterId);
  });

  it('Deve atualizar um personagem existente', async () => {
    const characterId = 1;
    const updatedCharacter = {
      name: 'Personagem Atualizado',
      description: 'Nova descrição do personagem atualizado'
    };

    const response = await request(app)
      .put(`/character/${characterId}`)
      .send(updatedCharacter);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(updatedCharacter);
  });

  it('Deve excluir um personagem existente', async () => {
    const characterId = 1;
    const response = await request(app).delete(`/character/${characterId}`);
    expect(response.status).toBe(204);
  });

  it('Deve retornar todos os quadrinhos', async () => {
    const response = await request(app).get('/comics');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('Deve criar um novo quadrinho', async () => {
    const newComic = {
      title: 'Novo Quadrinho',
      description: 'Descrição do novo quadrinho',
      image_url: 'https://example.com/novo_quadrinho.jpg',
      main_character: 'Personagem Principal'
    };

    const response = await request(app)
      .post('/comic')
      .send(newComic);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newComic);
  });

  it('Deve retornar um quadrinho específico pelo ID', async () => {
    const comicId = 1;
    const response = await request(app).get(`/comic/${comicId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(comicId);
  });

  it('Deve atualizar um quadrinho existente', async () => {
    const comicId = 1;
    const updatedComic = {
      title: 'Quadrinho Atualizado',
      description: 'Nova descrição do quadrinho atualizado'
    };

    const response = await request(app)
      .put(`/comic/${comicId}`)
      .send(updatedComic);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(updatedComic);
  });

  it('Deve excluir um quadrinho existente', async () => {
    const comicId = 1;
    const response = await request(app).delete(`/comic/${comicId}`);
    expect(response.status).toBe(204);
  });

  it('Deve retornar todos os criadores', async () => {
    const response = await request(app).get('/creators');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('Deve criar um novo criador', async () => {
    const newCreator = {
      name: 'Novo Criador',
      biography: 'Biografia do novo criador',
      image_url: 'https://example.com/novo_criador.jpg'
    };

    const response = await request(app)
      .post('/creator')
      .send(newCreator);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newCreator);
  });

  it('Deve retornar um criador específico pelo ID', async () => {
    const creatorId = 1;
    const response = await request(app).get(`/creator/${creatorId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(creatorId);
  });

  it('Deve atualizar um criador existente', async () => {
    const creatorId = 1;
    const updatedCreator = {
      name: 'Criador Atualizado',
      biography: 'Nova biografia do criador atualizado'
    };

    const response = await request(app)
      .put(`/creator/${creatorId}`)
      .send(updatedCreator);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(updatedCreator);
  });

  it('Deve excluir um criador existente', async () => {
    const creatorId = 1;
    const response = await request(app).delete(`/creator/${creatorId}`);
    expect(response.status).toBe(204);
  });
});
