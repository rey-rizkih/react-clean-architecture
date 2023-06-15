import { di } from "@di";

export const getUsers = async () => await di.user.getUsers();

export const getUserLocal = () => di.user.getUserLocal();
