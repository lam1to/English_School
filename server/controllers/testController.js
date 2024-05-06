const { Test, Question, Answer } = require("../models/models");
const ApiError = require("../error/ApiError");
class TestController {
  async create(req, res) {
    const { topic, difficulte, level, sTopic } = req.body;
    const test = await Test.create({ topic, difficulte, level, sTopic });
    return res.json({ test });
  }
  async getAll(req, res) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    const tests = await Test.findAndCountAll({ limit, offset });
    return res.json(tests);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const testOne = await Test.findOne({ where: { id } });
    return res.json(testOne);
  }
  async getTestWithData(req, res, next) {
    const { id } = req.params;
    const testOne = await Test.findOne({ where: { id } });
    if (testOne) {
      const listQuestion = await Question.findAll({
        where: {
          testId: id,
        },
        include: [
          {
            model: Answer,
            as: "answers",
          },
        ],
      });
      return res.json({
        ...testOne.dataValues,
        questions: listQuestion.map((oneQ) => oneQ.dataValues),
      });
    }
    next(ApiError.badRequest(`user by id ${id} not found`));
  }
}

module.exports = new TestController();
