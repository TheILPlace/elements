import {
  ChangeDetectorRef,
  ComponentFactoryResolver,
  Directive,
  EmbeddedViewRef,
  Inject,
  Input, Output, EventEmitter
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import {
  ElementConfig,
  LazyElementsLoaderService,
} from '../lazy-elements-loader.service';

const LOG_PREFIX = '@angular-extensions/elements';

/** @dynamic */
@Directive({
  selector: '[axLazyElementDynamic]',
})
export class LazyElementDynamicDirective implements OnInit {
  @Input('axLazyElementDynamic') tag: string;
  @Input('axLazyElementDynamicUrl') url: string; // tslint:disable-line:no-input-rename
  @Input('axLazyElementDynamicLoadingTemplate') loadingTemplateRef: TemplateRef<
    any
  >; // tslint:disable-line:no-input-rename
  @Input('axLazyElementDynamicErrorTemplate') errorTemplateRef: TemplateRef<
    any
  >; // tslint:disable-line:no-input-rename
  @Input('axLazyElementDynamicModule') isModule: boolean | undefined; // tslint:disable-line:no-input-rename
  @Input('axLazyElementDynamicImportMap') importMap: boolean | undefined; // tslint:disable-line:no-input-rename

  @Output('axElementLoaded') elementLoaded = new EventEmitter<any>();
  
  private viewRef: EmbeddedViewRef<any> = null;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef,
    private template: TemplateRef<any>,
    private elementsLoaderService: LazyElementsLoaderService
  ) {}

  ngOnInit() {
    if (!this.tag || this.tag.length === 0 || !this.tag.includes('-')) {
      throw new Error(
        `${LOG_PREFIX} - Valid tag has to be specified when using *axLazyElementDynamic directive (use *axLazyElementDynamic="'some-tag'"), got: "${this.tag}"`
      );
    }

    const elementConfig =
      this.elementsLoaderService.getElementConfig(this.tag) ||
      ({} as ElementConfig);
    const options = this.elementsLoaderService.options;
    const loadingComponent =
      elementConfig.loadingComponent || options.loadingComponent;

    if (this.loadingTemplateRef) {
      this.vcr.createEmbeddedView(this.loadingTemplateRef);
    } else if (loadingComponent) {
      const factory = this.cfr.resolveComponentFactory(loadingComponent);
      const newComponent = this.vcr.createComponent(factory);
      this.elementLoaded.emit(newComponent);
    }

    this.elementsLoaderService
      .loadElement(
        this.url,
        this.tag,
        this.isModule,
        this.importMap,
        elementConfig?.hooks
      )
      .then(() => customElements.whenDefined(this.tag))
      .then(() => {
        this.vcr.clear();
        const originalCreateElement = this.renderer.createElement;
        this.renderer.createElement = (name: string, namespace: string) => {
          if (name === 'ax-lazy-element') {
            name = this.tag;
          }
          return this.document.createElement(name);
        };
        this.viewRef = this.vcr.createEmbeddedView(this.template);
        this.renderer.createElement = originalCreateElement;
        this.cdr.markForCheck();
      })
      .catch((error) => {
        const errorComponent =
          elementConfig.errorComponent || options.errorComponent;
        this.vcr.clear();
        if (this.errorTemplateRef) {
          this.vcr.createEmbeddedView(this.errorTemplateRef);
          this.cdr.markForCheck();
        } else if (errorComponent) {
          const factory = this.cfr.resolveComponentFactory(errorComponent);
          this.vcr.createComponent(factory);
          this.cdr.markForCheck();
        } else {
          console.error(
            `${LOG_PREFIX} - Loading of element <${this.tag}> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElementDynamic="errorTemplate: error" to display customized error message in place of element\n\n`,
            error
          );
        }
      });
  }

  destroyEmbeddedView() {
    if (this.viewRef && !this.viewRef.destroyed) {
      this.viewRef.detach();
      this.viewRef.destroy();
      this.viewRef = null;
    }
  }
}
