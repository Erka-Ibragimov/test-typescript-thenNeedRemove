class Userrr {
  gitHubToken: string;
  jwtToken: string;
}

interface AuthStrategy {
  auth(user: Userrr): boolean;
}

class Auth {
  constructor(private strategy: AuthStrategy) {}

  setStrategy(strategy: AuthStrategy) {
    this.strategy = strategy;
  }

  public authUser(user: Userrr): boolean {
    return this.strategy.auth(user);
  }
}

class JWTStrategy implements AuthStrategy {
  auth(user: Userrr): boolean {
    if (user.jwtToken) {
      return true;
    }
    return false;
  }
}

class GitHubStrategy implements AuthStrategy {
  auth(user: Userrr): boolean {
    if (user.gitHubToken) {
      // Идем в API
      return true;
    }
    return false;
  }
}

const userrr = new Userrr();
userrr.jwtToken = "token";
const authh = new Auth(new JWTStrategy());
console.log(authh.authUser(userrr));
authh.setStrategy(new GitHubStrategy());
console.log(authh.authUser(userrr));
