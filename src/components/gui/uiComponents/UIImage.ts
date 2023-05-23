﻿import { Object3D } from '../../../core/entities/Object3D';
import { Color } from '../../../math/Color';
import { GUIQuad } from '../core/GUIQuad';
import { GUISprite } from '../core/GUISprite';
import { UIComponentBase } from './UIComponentBase';
import { ImageType } from '../GUIConfig';
import { Engine3D } from '../../../Engine3D';

// A UI component to display image/sprite/video
export class UIImage extends UIComponentBase {
    private _quad: GUIQuad;

    constructor() {
        super();
    }

    public init() {
        super.init();
        this._quad = new GUIQuad();
        this._uiTransform.quads.push(this._quad);
    }

    public cloneTo(obj: Object3D) {
        let component = obj.getOrAddComponent(UIImage);
        component.sprite = this.sprite;
        component.color = this.color;
        component.imageType = this.imageType;
    }

    public set sprite(value: GUISprite) {
        this._quad.sprite = value || Engine3D.res.defaultGUISprite;
    }

    public get sprite(): GUISprite {
        return this._quad.sprite;
    }

    public get color() {
        return this._quad.color;
    }

    public set color(value: Color) {
        this._quad.color.copyFrom(value);
        this._quad.onChange = true;
    }

    public get imageType() {
        return this._quad.imageType;
    }

    public set imageType(value: ImageType) {
        if (this._quad.imageType != value) {
            this._quad.imageType = value;
            this._quad.onChange = true;
        }
    }
}
