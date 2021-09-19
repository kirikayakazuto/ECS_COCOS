import { Batcher } from "./Graphics/Batcher";
import { Input } from "./Input/Input";
import { KeyboardUtils } from "./Input/KeyboardUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    start () {
        es.Core.debugRenderEndabled = true;
        es.Core.create(true);

        es.Graphics.instance = new es.Graphics(new Batcher());

        KeyboardUtils.init();
        Input.initialize();

        // es.Core.scene = new BaseScene();
    }
}
