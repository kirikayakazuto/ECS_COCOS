import { CameraComponent } from "../Components/CameraComponent";
import { MoveSystem } from "../System/MoveSystem";
import { sampleScene } from "./RenderScene";

@sampleScene("BaseScene")
export default class BaseScene extends es.Scene {
    public initialize() {
        this.addEntityProcessor(new MoveSystem());
    }

    onStart() {
        let entity = this.createEntity('ViewMain');
    }

    restart() {
        es.Core.scene = new BaseScene();
    }
}