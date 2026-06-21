import { Router } from 'express';
import { validate } from '../middlewares/validator.middleware.js';
import {
  getProject,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  addMembersToProject,
  updateMemberRole,
  deleteMember,
  getProjectMembers,
} from '../controllers/project.controller.js';
import { addMemberTOProjectValidator, createProjectValidator } from '../validators/index.js';
import { verifyJWT, validateProjectPermission } from '../middlewares/auth.middleware.js';
import { AvailableUserRole, UserRolesEnum } from '../utils/constants.js';

const router = Router();

router.use(verifyJWT);

router.route('/').get(getProject).post(createProjectValidator(), validate, createProject);

route
  .route('/:projectId')
  .get(validateProjectPermission(AvailableUserRole), getProjectById)
  .put(
    validateProjectPermission([UserRolesEnum.ADMIN]),
    createProjectValidator(),
    validate,
    updateProject,
  )
  .delete(validateProjectPermission([UserRolesEnum.ADMIN]), deleteProject);

router
  .route('/:projectId/members')
  .get(getProjectMembers)
  .post(
    validateProjectPermission([UserRolesEnum.ADMIN]),
    addMemberTOProjectValidator(),
    validate,
    addMembersToProject,
  );

router
  .route('/:projectId/members/:userId')
  .put(validateProjectPermission([UserRolesEnum.ADMIN]), updateMemberRole)
  .delete(validateProjectPermission([UserRolesEnum.ADMIN]), deleteMember);

export default router;
