import {
  Directive,
  HostBinding,
  Input,
  HostListener,
  AfterViewInit,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({ selector: '[appSidebarToggle]' })
export class SidebarToggleDirective implements AfterViewInit {
  @HostBinding('attr.data-toggle')
  @Input()
  get dataToggle(): string {
    return this._dataToggle;
  }
  set dataToggle(value: string) {
    this._dataToggle = value;
  }

  protected _dataToggle = 'expanded';
  protected $wrapper: Element;
  protected compact_menu_checkbox;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.$wrapper = document.getElementsByClassName('wrapper')[0];
  }

  @HostListener('click', ['$event'])
  onClick(e: any) {
    if (this.dataToggle === 'expanded') {
      this.dataToggle = 'collapsed';
      this.renderer.addClass(this.$wrapper, 'nav-collapsed');
    } else {
      this.dataToggle = 'expanded';
      this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
      this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
      if (this.compact_menu_checkbox) {
        this.compact_menu_checkbox.checked = false;
      }
    }
    setTimeout(() => {
      this.fireRefreshEventOnWindow();
    }, 300);
  }

  fireRefreshEventOnWindow = function() {
    const evt = document.createEvent('HTMLEvents');
    evt.initEvent('resize', true, false);
    window.dispatchEvent(evt);
  };
}
