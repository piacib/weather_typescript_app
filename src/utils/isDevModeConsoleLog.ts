const isDevModeConsoleLog = (message: any) => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    // dev code
    console.log(message);
  } else {
    // production code
    return;
  }
};

export default isDevModeConsoleLog;
