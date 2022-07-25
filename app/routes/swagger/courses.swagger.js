/**
 * @swagger
 *  components:
 *      schemas:
 *          Type:
 *              type: array
 *              items: 
 *                  type: string
 *                  enum:
 *                      -   Free
 *                      -   Cash
 *                      -   Special
 */ 

/**
 * @swagger
 *  definitions:
 *      ListOfCourses:
 *          type: object
 *          properties:
 *              status:
 *                  type: integer
 *                  example: 200
 *              data:
 *                  type: object
 *                  properties:
 *                      courses:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  _id:
 *                                      type: string
 *                                      example: "62822e4ff68cdded54aa928d"
 *                                  title:
 *                                      type: string
 *                                      example: "title of course"
 *                                  short_text:
 *                                      type: string
 *                                      example: "summary text of course"
 *                                  text:
 *                                      type: string
 *                                      example: "text and describe of course"
 *                                  status:
 *                                      type: string
 *                                      example: "notStarted | Completed | Holding"
 *                                  time:
 *                                      type: string
 *                                      example: "01:22:34"
 *                                  price:
 *                                      type: integer
 *                                      example: 250,000
 *                                  discount:
 *                                      type: interger
 *                                      example: 20
 *                                  studendtCount:
 *                                      type: integer
 *                                      example: 340
 *                                  teacher:
 *                                      type: string
 *                                      example: "erfan yousefi"
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          AddChapter:
 *              type: object
 *              required: 
 *                  -   id
 *                  -   title
 *              properties:
 *                  id:
 *                      type: string
 *                      example: 6279e994c1e47a98d0f356d3
 *                  title:
 *                      type: string
 *                      example: Chapter 1 - zh Js
 *                  text:
 *                      type: string
 *                      example: description for this chapter
 *          Course:
 *              type: object
 *              required: 
 *                  -   title
 *                  -   short_text
 *                  -   text
 *                  -   tags
 *                  -   category
 *                  -   price
 *                  -   discount
 *                  -   image
 *                  -   type
 *              properties:
 *                  title:
 *                      type: string
 *                      description: Course's title
 *                      example: عنوان دوره
 *                  short_text:
 *                      type: string
 *                      description: Course's short description
 *                      example: متن توضیحات کامل تستی
 *                  text:
 *                      type: string
 *                      description: Courses's Ful text
 *                      example: متن توضیحات کامللل تستی
 *                  tags:
 *                      type: array
 *                      description: Course's related tags
 *                  category:
 *                      type: string
 *                      description: Course's Category
 *                      example: 6279e994c1e47a98d0f356d3
 *                  price:
 *                      type: string
 *                      description: Course's price
 *                      example: 2500000
 *                  discount:
 *                      type: string
 *                      description: Course's discount
 *                      example: 20
 *                  image:
 *                      type: string
 *                      format: binary
 *                  type:
 *                      type: string
 *                      description: Course's type
 *                      example: free, cashed, espesial
 *                  Types:
 *                      $ref: '#/components/schemas/Type'
 *                      
 */

/**
 * @swagger
 *  /admin/courses/list:
 *      get:
 *          tags: [Course(Admin-Panel)]
 *          summary: get all of courses
 *          parameters:
 *              -   in: query
 *                  name: search
 *                  type: string
 *                  description: search in course text, title, short_text
 *          responses :
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ListOfCourses'
 */

/**
 * @swagger
 *  /admin/courses/add:
 *      post:
 *          tags: [Course(Admin-Panel)]
 *          summary: Add a course
 *          requestBody:
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/Course'
 *          responses:
 *              201:
 *                  descrition: CREATED
 */

/**
 * @swagger
 *  /admin/courses/{id}:
 *      get:
 *          tags: [Course(Admin-Panel)]
 *          summary: Get a course with Id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  description: Course's Id
 *                  type: string
 *                  required: true
 *          responses:
 *              200:
 *                  description: GET OK
 *              400:
 *                  description: Bad Request (Maybe params are sent bad.)
 *              404:
 *                  description: Not Found
 *              500:
 *                  description: INTERNAL SERVER ERROR
 */

/**
 * @swagger
 *  /admin/courses/add-chapter:
 *      put:
 *          tags: [Course(Admin-Panel)]
 *          summary: Create new chapter four a course
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AddChapter'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/AddChapter'
 *          responses:
 *              201:
 *                  description: Success
 *              400:
 *                  description: Bad Request
 *              500:
 *                  description: INTERNAL SERVER ERROR 
 */