import { di } from "@di";

export const signIn = async () => await di.auth.signIn();

export const signOut = () => di.auth.signOut();
