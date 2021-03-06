import log from "loglevel";
import Sessions from "./sessions";

const logDir = "background/getSessions";

export default async (id = null, needKeys = null) => {
  log.log(logDir, "getSessions()", id, needKeys);
  let sessions;
  if (id == null) {
    sessions = await Sessions.getAll(needKeys).catch(e => {
      log.error(logDir, "getSessions()", e);
    });
  } else {
    sessions = await Sessions.get(id).catch(e => {
      log.error(logDir, "getSessions()", e);
    });
  }

  //該当するセッションが存在しない時
  //idを指定:undefined, 非指定:[] を返す
  return sessions;
};
