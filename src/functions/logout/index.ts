import { MongoDBUserRepository } from "../../lib/infra/MongoDBUserRepository";
import { MongoDBUserTokenRepository } from "../../lib/infra/MongoDBUserTokenRepository";
import { LogoutSessionService } from "./LogoutSessionService";

export const logout = async (event: { pathParameters: { user: any; }; }) => {

  const { user } = event.pathParameters

  const userRepository = new MongoDBUserRepository()
  const userTokenRepository = new MongoDBUserTokenRepository()
  const logoutService = new LogoutSessionService(userRepository, userTokenRepository)

  await logoutService.execute(user)

  return {
    statusCode: 202,
  };
};
