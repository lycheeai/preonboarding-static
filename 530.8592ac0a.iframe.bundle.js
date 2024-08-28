"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[530],{"./node_modules/keycloakify/login/lib/useGetClassName.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>useGetClassName});var clsx=__webpack_require__("./node_modules/keycloakify/tools/clsx.js"),useConstCallback=__webpack_require__("./node_modules/keycloakify/tools/useConstCallback.js");const{useGetClassName}=function createUseClassName(params){const{defaultClasses}=params;return{useGetClassName:function useGetClassName(params){const{classes}=params;return{getClassName:(0,useConstCallback.K)((classKey=>(0,clsx.$)(classKey,defaultClasses[classKey],null==classes?void 0:classes[classKey])))}}}}({defaultClasses:{kcBodyClass:void 0,kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsWrapperClass:void 0,kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}})},"./node_modules/keycloakify/login/pages/LoginOauthGrant.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>LoginOauthGrant});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_tools_clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/keycloakify/tools/clsx.js"),_login_lib_useGetClassName__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/keycloakify/login/lib/useGetClassName.js");function LoginOauthGrant(props){const{kcContext,i18n,doUseDefaultCss,classes,Template}=props,{url,oauth,client}=kcContext,{msg,msgStr,advancedMsg,advancedMsgStr}=i18n,{getClassName}=(0,_login_lib_useGetClassName__WEBPACK_IMPORTED_MODULE_2__.D)({doUseDefaultCss,classes});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Template,Object.assign({},{kcContext,i18n,doUseDefaultCss,classes},{headerNode:msg("oauthGrantTitle",client.name?advancedMsgStr(client.name):client.clientId)},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({id:"kc-oauth",className:"content-area"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{children:msg("oauthGrantRequest")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{children:oauth.clientScopesRequested.map((clientScope=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:advancedMsg(clientScope.consentScreenText)})},clientScope.consentScreenText)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",Object.assign({className:"form-actions",action:url.oauthAction,method:"POST"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"hidden",name:"code",value:oauth.code}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({className:getClassName("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form-options"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:getClassName("kcFormOptionsWrapperClass")})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form-buttons"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({className:getClassName("kcFormButtonsWrapperClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.$)(getClassName("kcButtonClass"),getClassName("kcButtonPrimaryClass"),getClassName("kcButtonLargeClass")),name:"accept",id:"kc-login",type:"submit",value:msgStr("doYes")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.$)(getClassName("kcButtonClass"),getClassName("kcButtonDefaultClass"),getClassName("kcButtonLargeClass")),name:"cancel",id:"kc-cancel",type:"submit",value:msgStr("doNo")})]}))}))]}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"clearfix"})]}))}))}},"./node_modules/keycloakify/tools/clsx.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>clsx});var tsafe_assert__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/keycloakify/node_modules/tsafe/assert.js"),tsafe_typeGuard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/keycloakify/node_modules/tsafe/typeGuard.js");const clsx=(...args)=>{const len=args.length;let i=0,cls="";for(;i<len;i++){const arg=args[i];if(null==arg)continue;let toAdd;switch(typeof arg){case"boolean":break;case"object":if(Array.isArray(arg))toAdd=clsx(...arg);else{(0,tsafe_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(!(0,tsafe_typeGuard__WEBPACK_IMPORTED_MODULE_1__.typeGuard)(arg,!1)),toAdd="";for(const k in arg)arg[k]&&k&&(toAdd&&(toAdd+=" "),toAdd+=k)}break;default:toAdd=arg}toAdd&&(cls&&(cls+=" "),cls+=toAdd)}return cls}}}]);