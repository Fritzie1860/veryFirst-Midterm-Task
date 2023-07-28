# veryFirst-Midterm-Task

**[Project Readme]**

**Database Structure**

The database structure for this project is designed to store information about videos, comments, products, and users. The project uses MongoDB as the database management system (DBMS). The schema for each collection in the database is as follows:

- Video Collection (Model: Video):
  link_thumbnail: String (required) - URL of the video thumbnail image.
  link_video: String (required) - URL of the video content.
  title: String (required) - Title of the video.
  upload_date: Date (default: Date.now) - Date of video upload.

- Comment Collection (Model: Comment):
  video_id: ObjectId (required, ref: 'Video') - Reference to the Video collection to which the comment belongs.
  username: String (required) - Username of the commenter.
  comment: String (required) - The comment text.
  timestamp: Date (default: Date.now) - Date of comment submission.

- Product Collection (Model: Product):
  video_id: ObjectId (required, ref: 'Video') - Reference to the Video collection for which the product is related.
  link_product: String (required) - URL of the related product.
  price: Number (required) - Price of the product.
  title: String (required) - Title of the product.
  link_imageProduct: String (required) - URL of the product image.

- User Collection (Model: User):
  username: String (required, unique) - Username of the user.
  email: String (required, unique) - Email address of the user.
  password: String (required) - Encrypted password of the user.
  profile_picture: String - URL of the user's profile picture.


**API Structure**

The API structure follows the RESTful API design principles. The API endpoints and their corresponding functionalities are as follows:

/api/auth/register - Register a new user.
/api/auth/login - Login an existing user and generate a JWT token for authentication.
/api/video - Retrieve a list of videos with thumbnails from YouTube.
/api/comment/:video_id - Retrieve a list of comments for a specific video.
/api/comment/submit - Submit a comment for a video.
/api/product/:video_id - Retrieve a list of products related to a video.


**API Requests and Responses**

1. Register User
Endpoint: /api/auth/register
Method: POST

2. Login User
Endpoint: /api/auth/login
Method: POST

3. Get Videos
Endpoint: /api/video
Method: GET

4. Get Comments for a Video
Endpoint: /api/comment/:video_id
Method: GET

5. Submit a Comment
Endpoint: /api/comment/submit
Method: POST

6. Get Products for a Video
Endpoint: /api/product/:video_id
Method: GET

**Future Development**

I apologize for not being able to fulfill all the requirements for the midterm project. I understand the importance of completing the project thoroughly and will work diligently to implement the missing features and complete the project for the final assessment. Thank you for your understanding and guidance throughout this course. I look forward to showcasing the completed project in the final assessment.
