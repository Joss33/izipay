"use strict";(self.webpackChunkizipay_frontend=self.webpackChunkizipay_frontend||[]).push([[50],{2050:(Q,p,c)=>{c.r(p),c.d(p,{ConfirmaTusDatosDeContactoModule:()=>Y});var f=c(6895),l=c(9030),r=c(4006),e=c(4650),x=c(7009),I=c(9972),g=c(4859),h=c(9549),C=c(4144),_=c(7392),Z=c(7725),d=c(1281),m=c(3238),v=c(9643);const R=["input"],E=["label"],q=function(i){return{enterDuration:i}},U=["*"],F=new e.OlP("mat-checkbox-default-options",{providedIn:"root",factory:y});function y(){return{color:"accent",clickAction:"check-indeterminate"}}let w=0;const T=y(),B={provide:r.JU,useExisting:(0,e.Gpc)(()=>A),multi:!0};class O{}const z=(0,m.sb)((0,m.pj)((0,m.Kr)((0,m.Id)(class{constructor(i){this._elementRef=i}}))));let V=(()=>{class i extends z{constructor(t,n,a,s,u,k,b){super(n),this._changeDetectorRef=a,this._ngZone=s,this._animationMode=k,this._options=b,this.ariaLabel="",this.ariaLabelledby=null,this.labelPosition="after",this.name=null,this.change=new e.vpe,this.indeterminateChange=new e.vpe,this._onTouched=()=>{},this._currentAnimationClass="",this._currentCheckState=0,this._controlValueAccessorChangeFn=()=>{},this._checked=!1,this._disabled=!1,this._indeterminate=!1,this._options=this._options||T,this.color=this.defaultColor=this._options.color||T.color,this.tabIndex=parseInt(u)||0,this.id=this._uniqueId=`${t}${++w}`}get inputId(){return`${this.id||this._uniqueId}-input`}get required(){return this._required}set required(t){this._required=(0,d.Ig)(t)}ngAfterViewInit(){this._syncIndeterminate(this._indeterminate)}get checked(){return this._checked}set checked(t){const n=(0,d.Ig)(t);n!=this.checked&&(this._checked=n,this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(t){const n=(0,d.Ig)(t);n!==this.disabled&&(this._disabled=n,this._changeDetectorRef.markForCheck())}get indeterminate(){return this._indeterminate}set indeterminate(t){const n=t!=this._indeterminate;this._indeterminate=(0,d.Ig)(t),n&&(this._transitionCheckState(this._indeterminate?3:this.checked?1:2),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(t){this.checked=!!t}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_getAriaChecked(){return this.checked?"true":this.indeterminate?"mixed":"false"}_transitionCheckState(t){let n=this._currentCheckState,a=this._getAnimationTargetElement();if(n!==t&&a&&(this._currentAnimationClass&&a.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(n,t),this._currentCheckState=t,this._currentAnimationClass.length>0)){a.classList.add(this._currentAnimationClass);const s=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{a.classList.remove(s)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){const t=this._options?.clickAction;this.disabled||"noop"===t?!this.disabled&&"noop"===t&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate):(this.indeterminate&&"check"!==t&&Promise.resolve().then(()=>{this._indeterminate=!1,this.indeterminateChange.emit(this._indeterminate)}),this._checked=!this._checked,this._transitionCheckState(this._checked?1:2),this._emitChangeEvent())}_onInteractionEvent(t){t.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(t,n){if("NoopAnimations"===this._animationMode)return"";switch(t){case 0:if(1===n)return this._animationClasses.uncheckedToChecked;if(3==n)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case 2:return 1===n?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case 1:return 2===n?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case 3:return 1===n?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(t){const n=this._inputElement;n&&(n.nativeElement.indeterminate=t)}}return i.\u0275fac=function(t){e.$Z()},i.\u0275dir=e.lG2({type:i,viewQuery:function(t,n){if(1&t&&(e.Gf(R,5),e.Gf(E,5),e.Gf(m.wG,5)),2&t){let a;e.iGM(a=e.CRH())&&(n._inputElement=a.first),e.iGM(a=e.CRH())&&(n._labelElement=a.first),e.iGM(a=e.CRH())&&(n.ripple=a.first)}},inputs:{ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],id:"id",required:"required",labelPosition:"labelPosition",name:"name",value:"value",checked:"checked",disabled:"disabled",indeterminate:"indeterminate"},outputs:{change:"change",indeterminateChange:"indeterminateChange"},features:[e.qOj]}),i})(),A=(()=>{class i extends V{constructor(t,n,a,s,u,k,b){super("mat-checkbox-",t,n,s,u,k,b),this._focusMonitor=a,this._animationClasses={uncheckedToChecked:"mat-checkbox-anim-unchecked-checked",uncheckedToIndeterminate:"mat-checkbox-anim-unchecked-indeterminate",checkedToUnchecked:"mat-checkbox-anim-checked-unchecked",checkedToIndeterminate:"mat-checkbox-anim-checked-indeterminate",indeterminateToChecked:"mat-checkbox-anim-indeterminate-checked",indeterminateToUnchecked:"mat-checkbox-anim-indeterminate-unchecked"}}_createChangeEvent(t){const n=new O;return n.source=this,n.checked=t,n}_getAnimationTargetElement(){return this._elementRef.nativeElement}ngAfterViewInit(){super.ngAfterViewInit(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{t||this._onBlur()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}_onInputClick(t){t.stopPropagation(),super._handleInputClick()}focus(t,n){t?this._focusMonitor.focusVia(this._inputElement,t,n):this._inputElement.nativeElement.focus(n)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(Z.tE),e.Y36(e.R0b),e.$8M("tabindex"),e.Y36(e.QbO,8),e.Y36(F,8))},i.\u0275cmp=e.Xpm({type:i,selectors:[["mat-checkbox"]],hostAttrs:[1,"mat-checkbox"],hostVars:14,hostBindings:function(t,n){2&t&&(e.Ikx("id",n.id),e.uIk("tabindex",null)("aria-label",null)("aria-labelledby",null),e.ekj("mat-checkbox-indeterminate",n.indeterminate)("mat-checkbox-checked",n.checked)("mat-checkbox-disabled",n.disabled)("mat-checkbox-label-before","before"==n.labelPosition)("_mat-animation-noopable","NoopAnimations"===n._animationMode))},inputs:{disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex"},exportAs:["matCheckbox"],features:[e._Bn([B]),e.qOj],ngContentSelectors:U,decls:17,vars:21,consts:[[1,"mat-checkbox-layout"],["label",""],[1,"mat-checkbox-inner-container"],["type","checkbox",1,"mat-checkbox-input","cdk-visually-hidden",3,"id","required","checked","disabled","tabIndex","change","click"],["input",""],["matRipple","",1,"mat-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleRadius","matRippleCentered","matRippleAnimation"],[1,"mat-ripple-element","mat-checkbox-persistent-ripple"],[1,"mat-checkbox-frame"],[1,"mat-checkbox-background"],["version","1.1","focusable","false","viewBox","0 0 24 24","aria-hidden","true",1,"mat-checkbox-checkmark"],["fill","none","stroke","white","d","M4.1,12.7 9,17.6 20.3,6.3",1,"mat-checkbox-checkmark-path"],[1,"mat-checkbox-mixedmark"],[1,"mat-checkbox-label",3,"cdkObserveContent"],["checkboxLabel",""],[2,"display","none"]],template:function(t,n){if(1&t&&(e.F$t(),e.TgZ(0,"label",0,1)(2,"span",2)(3,"input",3,4),e.NdJ("change",function(s){return n._onInteractionEvent(s)})("click",function(s){return n._onInputClick(s)}),e.qZA(),e.TgZ(5,"span",5),e._UZ(6,"span",6),e.qZA(),e._UZ(7,"span",7),e.TgZ(8,"span",8),e.O4$(),e.TgZ(9,"svg",9),e._UZ(10,"path",10),e.qZA(),e.kcU(),e._UZ(11,"span",11),e.qZA()(),e.TgZ(12,"span",12,13),e.NdJ("cdkObserveContent",function(){return n._onLabelTextChange()}),e.TgZ(14,"span",14),e._uU(15,"\xa0"),e.qZA(),e.Hsn(16),e.qZA()()),2&t){const a=e.MAs(1),s=e.MAs(13);e.uIk("for",n.inputId),e.xp6(2),e.ekj("mat-checkbox-inner-container-no-side-margin",!s.textContent||!s.textContent.trim()),e.xp6(1),e.Q6J("id",n.inputId)("required",n.required)("checked",n.checked)("disabled",n.disabled)("tabIndex",n.tabIndex),e.uIk("value",n.value)("name",n.name)("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-checked",n._getAriaChecked())("aria-describedby",n.ariaDescribedby),e.xp6(2),e.Q6J("matRippleTrigger",a)("matRippleDisabled",n._isRippleDisabled())("matRippleRadius",20)("matRippleCentered",!0)("matRippleAnimation",e.VKq(19,q,"NoopAnimations"===n._animationMode?0:150))}},dependencies:[m.wG,v.wD],styles:['@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.mat-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-checkbox-layout{-webkit-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:rgba(0,0,0,0);transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:rgba(0,0,0,0)}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox-input:focus~.mat-focus-indicator::before{content:""}'],encapsulation:2,changeDetection:0}),i})(),M=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({}),i})(),N=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.si,m.BQ,v.Q8,M,m.BQ,M]}),i})();var D=c(7533);function J(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.resetField("number"))}),e.TgZ(1,"mat-icon"),e._uU(2,"close"),e.qZA()()}}function X(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.resetField("email"))}),e.TgZ(1,"mat-icon"),e._uU(2,"close"),e.qZA()()}}const G=[{path:"",component:(()=>{class i{constructor(t,n,a){this.formBuilder=t,this._snackBar=n,this.globalService=a,this.form=this.formBuilder.group({number:[null,r.kI.required],email:[null,[r.kI.required,r.kI.email]],terminos:[null,r.kI.required]})}get number(){return this.form.get("number")}get email(){return this.form.get("email")}get terminos(){return this.form.get("terminos")}ngOnInit(){}next(){this.globalService.cleanForm(this.form),this.globalService.formTouched(this.form),this._snackBar.open(this.form.valid?"Hemos enviado tu solicitud":"Todos los campos son obligatorios, intente de nuevo","Cerrar")}resetField(t){this.form.get(t)?.reset()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.qu),e.Y36(x.ux),e.Y36(I.U))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-confirma-tus-datos-de-contacto"]],decls:39,vars:4,consts:[[1,"container"],[1,"row"],[1,"col-md-8","mt-5","mx-auto"],[1,"row","mx-auto"],[1,"col-md-12","mb-2"],["src","assets/img/Logo-Izipay-solo.png","alt","logo izipay","height","80",1,"d-block","mx-auto"],[1,"col-12"],[1,"mb-4"],[1,"row","mb-2",3,"formGroup"],[1,"col-md-12"],[1,"w-100"],["matInput","","type","text","formControlName","number","mask","(000) 000-0000","placeholder","(000) 000-0000","maxlength","15","inputmode","numeric",3,"mask"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["matInput","","type","email","formControlName","email","placeholder","example@gmail.com"],[1,"col-md-12","mb-2","d-flex"],["formControlName","terminos",1,"me-2"],["for",""],["href","https://www.youtube.com/watch?v=gp2VYMY8_X0",1,"underline","text-sky-500"],[1,"col-md-12","col-lg-6","mx-auto"],["mat-raised-button","","color","primary",1,"w-100","rounded-pill","mb-2"],["mat-button","","color","primary","routerLink","/verifica-tus-datos",1,"w-100","rounded-pill"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"img",5),e.qZA(),e.TgZ(6,"div",6)(7,"h1",7)(8,"strong"),e._uU(9,"Confirma tus datos de contacto"),e.qZA()()(),e.TgZ(10,"div",6)(11,"div",8)(12,"div",9)(13,"mat-form-field",10)(14,"mat-label"),e._uU(15,"N\xfamero de WhatAapp"),e.qZA(),e._UZ(16,"input",11),e.YNc(17,J,3,0,"button",12),e.qZA()(),e.TgZ(18,"div",4)(19,"mat-form-field",10)(20,"mat-label"),e._uU(21,"Correo electr\xf3nico"),e.qZA(),e._UZ(22,"input",13),e.YNc(23,X,3,0,"button",12),e.qZA()(),e.TgZ(24,"div",14),e._UZ(25,"mat-checkbox",15),e.TgZ(26,"label",16),e._uU(27," Al hacer clic en continuar, "),e.TgZ(28,"a",17),e._uU(29," autorizas el tratamiento de tus datos personales "),e.qZA(),e._uU(30," seg\xfan nuestra "),e.TgZ(31,"a",17),e._uU(32," pol\xedtica de privacidad "),e.qZA(),e._uU(33," . Consultar tu historial de cr\xe9dito es un paso indispensable en tu proceso de aprobaci\xf3n. "),e.qZA()()()(),e.TgZ(34,"div",18)(35,"button",19),e._uU(36,"Continuar"),e.qZA(),e.TgZ(37,"button",20),e._uU(38,"Volver"),e.qZA()()()()()()),2&t&&(e.xp6(11),e.Q6J("formGroup",n.form),e.xp6(5),e.Q6J("mask","^[0-9]+$"),e.xp6(1),e.Q6J("ngIf",null==n.number?null:n.number.value),e.xp6(6),e.Q6J("ngIf",null==n.email?null:n.email.value))},dependencies:[f.O5,l.rH,g.lW,h.KE,h.hX,h.R9,C.Nt,_.Hw,r.Fj,r.JJ,r.JL,r.nD,r.sg,r.u,A,D.hx],encapsulation:2}),i})()}];let j=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[l.Bz.forChild(G),l.Bz]}),i})();const H={validation:!1};let Y=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[f.ez,j,g.ot,h.lN,C.c,_.Ps,r.UX,r.u5,N,x.ZX,D.yI.forRoot(H)]}),i})()}}]);