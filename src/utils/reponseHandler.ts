export const responseHandler = (
    payload: { [key: string]: any } | any[],
    message: string = "success"
  ): { status: boolean; message: string; data: any } => {
    return {
      status: true,
      message,
      data: payload || {},
    };
  };
  