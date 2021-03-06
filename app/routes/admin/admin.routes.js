const { AdminBlogsRouter } = require('./blog.router');
const { AdminCategoryRouter } = require('./category.router');
const { AdminChapterRouter } = require('./chapter.router');
const { AdminCourseRouter } = require('./course.router');
const { AdminProductsRouter } = require('./product.router');
const adminRouter = require('express').Router();

adminRouter.use('/category', AdminCategoryRouter)
adminRouter.use('/blogs', AdminBlogsRouter)
adminRouter.use('/products', AdminProductsRouter)
adminRouter.use('/courses', AdminCourseRouter)
adminRouter.use('/chapter', AdminChapterRouter)

module.exports = {
    adminRouter
}
