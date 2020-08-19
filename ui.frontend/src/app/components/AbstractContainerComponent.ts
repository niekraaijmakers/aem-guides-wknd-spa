import {ComponentMapping, AEMAllowedComponentsContainerComponent, Utils} from "@adobe/cq-angular-editable-components";
import {Component, HostBinding, Injectable, Input} from "@angular/core";
import {ContainerModel, ContainerProperties, Model} from "./common";

export function ContainerIsEmptyFn(props:ContainerProperties){
    return props.cqItemsOrder == null || props.cqItemsOrder.length === 0;
}

@Component({
    selector: 'aem-core-abstract-container',
    template: ''
})
export class AbstractContainerComponent extends AEMAllowedComponentsContainerComponent implements ContainerProperties{
    @Input() componentMapping: typeof ComponentMapping = ComponentMapping;
    @Input() cqForceReload: boolean = false;
    @Input() cqItems: {[key: string]: Model} = {};
    @Input() cqItemsOrder: string[] = [];
    @Input() cqPath;

    @HostBinding('class') class;

    public get isInEditor(){
        return Utils.isInEditor();
    }
}