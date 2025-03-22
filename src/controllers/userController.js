import User from '../models/User.js';

export const createUser = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ error: 'Por favor, preencha todos os campos.' });
    }

    const user = await User.create({
      name: nome,
      email: email,
      password: senha
    });

    res.status(201).json({
      message: 'Usuário cadastrado com sucesso!',
      usuario: user
    });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro interno no servidor. Tente novamente mais tarde.' });
  }
};

export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await User.findAll({
      attributes: ['id', 'name', 'email']
    });

    res.json(usuarios);
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    res.status(500).json({ error: 'Erro interno no servidor.' });
  }
};

export const deletarUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await User.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    await usuario.destroy();

    res.json({ message: `Usuário com id ${id} deletado.` });
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    res.status(500).json({ error: 'Erro interno no servidor.' });
  }
};

export const atualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    if (!nome && !email && !senha) {
      return res.status(400).json({ error: 'Nenhum campo para atualizar.' });
    }

    const usuario = await User.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    usuario.name = nome || usuario.name;
    usuario.email = email || usuario.email;
    usuario.password = senha || usuario.password;

    await usuario.save();

    res.json({
      message: 'Usuário atualizado com sucesso!',
      usuario
    });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ error: 'Erro interno no servidor.' });
  }
};
