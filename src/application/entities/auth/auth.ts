interface AuthProps {
  accessToken: string;
  refreshToken: string;
}

export class Auth {
  private props: AuthProps;

  constructor(props: AuthProps) {
    this.props = props;
  }

  public get accessToken(): string {
    return this.props.accessToken;
  }

  public set accessToken(accessToken: string) {
    this.props.accessToken = accessToken;
  }

  public get refreshToken(): string {
    return this.props.refreshToken;
  }
  public set refreshToken(refreshToken: string) {
    this.props.refreshToken = refreshToken;
  }
}
