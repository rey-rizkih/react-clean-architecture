export interface AuthUseCase {
  signIn(): Promise<void>;
  signOut(): void;
}
