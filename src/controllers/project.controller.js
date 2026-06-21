import { ApiResponse } from '../utils/apiResponse.js';
import { ApiError } from '../utils/apiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { Project } from '../models/project.model.js';
import { ProjectMember } from '../models/projectmember.model.js';
import mongoose from 'mongoose';
import { AvailableUserRole, UserRolesEnum } from '../utils/constants.js';
import { User } from '../models/user.model.js';

const getProject = asyncHandler(async (req, res) => {
  /*
   suppose: req.user._id = U1 is logged in
   Goal: Give me all projects in which U1 participates, along with his role and the number of members in each project.
   */
});

const getProjectById = asyncHandler(async (req, res) => {
});

const createProject = asyncHandler(async (req, res) => {
  
});

const updateProject = asyncHandler(async (req, res) => {
  
});

const deleteProject = asyncHandler(async (req, res) => {
  
});

const addMembersToProject = asyncHandler(async (req, res) => {
  
});

const getProjectMembers = asyncHandler(async (req, res) => {
  
});

const updateMemberRole = asyncHandler(async (req, res) => {
  
});

const deleteMember = asyncHandler(async (req, res) => {
  
});

export {
  getProject,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  addMembersToProject,
  updateMemberRole,
  deleteMember,
};
