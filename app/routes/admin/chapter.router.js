const ChapterRouter = require("express").Router();
const { ChapterController } = require("../../http/controllers/admin/chapter.controller");

ChapterRouter.put("/add", ChapterController.AddChapter)
ChapterRouter.get("/list/:courseID", ChapterController.ChaptersOfCourse)
ChapterRouter.patch("/remove/:chapterID", ChapterController.RemoveChapterById)

module.exports = {
    AdminChapterRouter: ChapterRouter
}
