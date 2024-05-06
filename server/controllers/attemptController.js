const { Attempt, QuesstionAttempt, Question, Answer } = require('../models/models');
const ApiError = require('../error/ApiError');
class AttemptController {
  async create(req, res, next) {
    try {
      const { testId, questionAttempts } = req.body;
      const { id: userId } = req.user;
      const { id: attemptId } = (
        await Attempt.create({
          testId,
          userId,
        })
      ).dataValues;
      const allQuestionsWithRightAnswearForTest = await Question.findAll({
        where: {
          testId,
        },
        include: [
          {
            model: Answer,
            where: { isRight: true },
          },
        ],
      });
      let currentValueForCreate = [];
      let countRightAnswers = 0;
      if (Array.isArray(questionAttempts)) {
        currentValueForCreate = allQuestionsWithRightAnswearForTest.map((oneItem) => {
          // console.log('oneItem = ', oneItem);
          const rightAnswearId = oneItem.answers[0]?.id || null;
          const findQuestionAttempt = questionAttempts.find((item) => {
            if (+item.questionId === oneItem.id) return item;
          });
          if (findQuestionAttempt) {
            const currentAnswerId = +findQuestionAttempt?.answerId || null;
            const currentIsRight =
              currentAnswerId && rightAnswearId ? currentAnswerId === rightAnswearId : false;
            if (currentIsRight) countRightAnswers = countRightAnswers + 1;
            return {
              questionId: oneItem.id,
              attemptId,
              answerId: currentAnswerId,
              isRight: currentIsRight,
            };
          } else {
            return {
              questionId: oneItem.id,
              attemptId,
              isRight: false,
            };
          }
        });
      } else {
        currentValueForCreate = allQuestionsWithRightAnswearForTest.map((oneItem) => {
          return {
            questionId: oneItem.id,
            attemptId,
            isRight: false,
          };
        });
      }
      const createAllQuestionAttempt = await QuesstionAttempt.bulkCreate(currentValueForCreate);
      const totalQuestions = allQuestionsWithRightAnswearForTest.length;
      return res.json({
        testId: +testId,
        userId,
        attemptId,
        totalQuestions: totalQuestions,
        totalRightQuestions: countRightAnswers,
        percentageCorrect:
          countRightAnswers !== 0 && totalQuestions !== 0
            ? (countRightAnswers / totalQuestions) * 100
            : 0,
      });
    } catch (e) {
      next(e.message);
    }
  }
  async getAll(req, res, next) {
    try {
      const { userId } = req.query;
      if (!userId) return next(ApiError.internal('Не указан UserId'));
      const allItems = await Attempt.findAll({
        where: {
          userId,
        },
      });
      return res.json(allItems);
    } catch (e) {
      next(e.message);
    }
  }
  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      if (!id) return next(ApiError.internal('Не указан id попытки'));
      const attemptWithQuestions = await Attempt.findAll({
        where: {
          id,
        },
        include: [
          {
            model: QuesstionAttempt,
          },
        ],
      });
      return res.json(attemptWithQuestions);
    } catch (e) {
      next(e.message);
    }
  }
}

module.exports = new AttemptController();
