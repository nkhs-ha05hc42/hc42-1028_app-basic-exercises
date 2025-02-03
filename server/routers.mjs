import express from "express"
import path from "path"
import { sample1Controller } from "./api/controllers.mjs"
import { q8_1Controller } from "./api/q8_1Controllers.mjs"
import { sample2Controller } from "./api/sample2/controller.mjs"

const routers = express.Router()


routers.post("/api/sample1", sample1Controller.postSample1)
routers.get("/api/sample1", sample1Controller.getSample1)
routers.put("/api/sample1", sample1Controller.putSample1)
routers.delete("/api/sample1", sample1Controller.deleteSample1)
routers.get("/api/sample1/:id", sample1Controller.getPathParamSample1)
routers.get("/api/8-1", q8_1Controller.get8_1)
routers.post("/api/sample2", sample2Controller.postSample2)
routers.get("/api/sample2/:id", sample2Controller.getOneSample2)
routers.get("/api/sample2", sample2Controller.getAllSample2)


// client配下は、ブラウザサイドで実行されるファイル（HTML/JS/CSS/画像など）を配置する
routers.use(express.static(`${path.resolve()}/client`))

export default routers
