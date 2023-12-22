const { UserInformation } = require('../models/models');
const ApiError = require('../error/ApiError');
class userInformationController {
  async create(req, res, next) {
    try {
      const userInfo = await UserInformation.create({
        userId: req.body.userId,
      });
      return res.json(userInfo);
    } catch (e) {
      next(ApiError.badRequest('произошла ошибка = ', e));
    }
  }
  async update(req, res) {
    console.log('req in update = ', req.body);
    const userInfo = await UserInformation.findOne({
      where: {
        userId: req.body.userId,
      },
    });
    const date = new Date(req.body.birhday);
    const payload = {
      ...req.body,
      birhday: req.body.birhday
        ? `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`
        : null,
    };
    console.log(
      'aanew Date(req.body.birhday).getMilliseconds() = ',
      `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`
    );
    if (userInfo === null) {
      const creatUserInfo = await UserInformation.create(payload);
      return res.json(creatUserInfo);
    }

    await userInfo.update(payload);
    return res.json(userInfo);
  }

  async getInformation(req, res) {
    const userInfros = await UserInformation.findOne(req.body.userId);
    return res.json(userInfros);
  }
}

module.exports = new userInformationController();
