import { Router } from "express";
import { registerUser, loginUser, logoutUser, refreshAccessToken, currentUserPasswordChange, getCurrentUser,updateAccountDetails,updateUserAvatar,updateUserCoverImage } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser
)


router.route("/login").post(loginUser);
 
// secure route
router.route("/logout").post(verifyJWT, logoutUser);

router.route("/refresh-token").post(refreshAccessToken);

router.route("/password-change").patch(verifyJWT,currentUserPasswordChange);
router.route("/user-details").get(verifyJWT,getCurrentUser);
router.route("/update-account-details").patch(verifyJWT,updateAccountDetails);
router.route("/update-user-avatar").patch(
    verifyJWT,
    upload.single('avatar'),
    updateUserAvatar
);
router.route("/update-user-cover-image").patch(
    upload.single('coverImage'),
    verifyJWT,
    updateUserCoverImage
);
export default router