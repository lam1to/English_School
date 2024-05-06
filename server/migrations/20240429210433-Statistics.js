module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('attempts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      testId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tests',
          key: 'id',
        },
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('questionAttempts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      attemptId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'attempts',
          key: 'id',
        },
        allowNull: false,
      },
      questionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'questions',
          key: 'id',
        },
        allowNull: false,
      },
      answerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'answers',
          key: 'id',
        },
        allowNull: true,
      },
      isRight: { allowNull: false, type: Sequelize.BOOLEAN },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('attempts');
    await queryInterface.dropTable('questionAttempts');
  },
};
