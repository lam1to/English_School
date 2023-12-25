const { UserInformation, User } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');
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
    if (userInfo === null) {
      const creatUserInfo = await UserInformation.create(req.body);
      return res.json(creatUserInfo);
    }

    await userInfo.update(req.body);
    return res.json(userInfo);
  }

  async updateImg(req, res) {
    try {
      const { img } = req.files;
      const { userId } = req.body;
      console.log('img = ', img, 'userId = ', userId);
      const userInfo = await UserInformation.findOne({
        where: {
          userId: userId,
        },
      });
      if (userInfo !== null) {
        let fileName = uuid.v4() + '.jpg';
        img.mv(path.resolve(__dirname, '..', 'static', fileName));
        await userInfo.update({
          img: fileName,
        });
        return res.json(userInfo);
      }
    } catch (e) {
      next(ApiError.badRequest('произошла ошибка'));
    }
  }

  async getInformation(req, res) {
    const { id } = req.params;
    console.log('id= ', id);
    if (id !== 'undefined') {
      const userMain = await User.findOne({
        where: {
          id: +id,
        },
      });
      console.log('userMain = ', userMain);
      console.log('req = ', typeof +id);
      if (userMain !== null) {
        const userInfros = await UserInformation.findOne({
          where: {
            userId: +id,
          },
        });
        if (userInfros !== null) {
          const retData = {
            ...userInfros.dataValues,
            name: userMain.userName,
            lastName: userMain.lastName,
          };
          console.log('retData = ', retData);
          return res.json(retData);
        } else {
          return res.json({
            name: userMain.userName,
            lastName: userMain.lastName,
          });
        }
      } else {
        return res.json({ error: 'User Doesnt exist' });
      }
    }
  }
}

module.exports = new userInformationController();
