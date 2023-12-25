const { Answer } = require('../models/models');
const ApiError = require('../error/ApiError');
class AnswerController {
  async create(req, res) {
    let { content, questionId, isRight } = req.body;
    const answer = await Answer.create({ content, questionId, isRight });
    return res.json({ answer });
  }
  async getAll(req, res) {
    const answer = await Answer.findAll();
    return res.json(answer);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const answer = await Answer.findOne({ where: { id } });
    return res.json(answer);
  }
}

module.exports = new AnswerController();
