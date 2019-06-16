'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        var GenreFilms = [
            { id: 1, name: 'Hành động' },
            { id: 2, name: 'Hoạt hình' },
            { id: 3, name: 'Hài' },
            { id: 4, name: 'Phiêu lưu' },
            { id: 5, name: 'Tình cảm' },
            { id: 6, name: 'Kinh dị' },
            { id: 7, name: 'Khoa học viễn tưởng' },
            { id: 8, name: ' Siêu anh hùng' },
            { id: 9, name: 'Gia đình' },
        ]

        var Films = [
            { id: 1, name: "ĐẶC VỤ ÁO ĐEN: SỨ MỆNH TOÀN CẦU", poster: "", content: "Bấy lâu nay, Đặc vụ Áo Đen luôn là những người hùng thầm lặng “ngầu” nhất, bảo vệ Trái Đất khỏi những hiểm họa xấu xa ngoài hành tinh. Trong cuộc phiêu lưu mới này, họ phải đối mặt với mối đe dọa mang tính toàn cầu lớn nhất từ trước đến giờ: truy tìm điệp viên hai mang ẩn mình trong tổ chức Men In Black.", release: "14/06/2019", duration: 125, studio: "Sony Pictures", GenreFilmId },
            { id: 2, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 3, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 4, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 5, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 6, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 7, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 8, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 9, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 10, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 11, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 12, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 13, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 14, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 15, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 16, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 17, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 18, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 19, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 20, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 21, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 22, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 23, name: "", poster: "", content: "", release: "", duration: "", studio: "" },
            { id: 24, name: "", poster: "", content: "", release: "", duration: "", studio: "" },

        ]

        await queryInterface.bulkInsert('GenreFilm', [])
        return await queryInterface.bulkInsert('People', );

    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
    }
};