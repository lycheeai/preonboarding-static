"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[978],{"./node_modules/keycloakify/login/lib/useGetClassName.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>useGetClassName});var clsx=__webpack_require__("./node_modules/keycloakify/tools/clsx.js"),useConstCallback=__webpack_require__("./node_modules/keycloakify/tools/useConstCallback.js");const{useGetClassName}=function createUseClassName(params){const{defaultClasses}=params;return{useGetClassName:function useGetClassName(params){const{classes}=params;return{getClassName:(0,useConstCallback.K)((classKey=>(0,clsx.$)(classKey,defaultClasses[classKey],null==classes?void 0:classes[classKey])))}}}}({defaultClasses:{kcBodyClass:void 0,kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsWrapperClass:void 0,kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}})},"./node_modules/keycloakify/login/pages/shared/UserProfileFormFields.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>UserProfileFormFields});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/keycloakify/tools/clsx.js"),id=(__webpack_require__("./node_modules/keycloakify/tools/Array.prototype.every.js"),__webpack_require__("./node_modules/keycloakify/node_modules/tsafe/id.js")),useConstCallback=__webpack_require__("./node_modules/keycloakify/tools/useConstCallback.js");const emailRegexp=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;function useFormValidation(params){const{kcContext,passwordValidators={},i18n}=params,attributesWithPassword=(0,react.useMemo)((()=>kcContext.passwordRequired?(()=>{const name=kcContext.realm.registrationEmailAsUsername?"email":"username";return kcContext.profile.attributes.reduce(((prev,curr)=>[...prev,...curr.name!==name?[curr]:[curr,(0,id.id)({name:"password",displayName:(0,id.id)("${password}"),required:!0,readOnly:!1,validators:passwordValidators,annotations:{},groupAnnotations:{},autocomplete:"new-password"}),(0,id.id)({name:"password-confirm",displayName:(0,id.id)("${passwordConfirm}"),required:!0,readOnly:!1,validators:{_compareToOther:{name:"password","ignore.empty.value":!0,shouldBe:"equal","error-message":(0,id.id)("${invalidPasswordConfirmMessage}")}},annotations:{},groupAnnotations:{},autocomplete:"new-password"})]]),[])})():kcContext.profile.attributes),[kcContext,passwordValidators]),{getErrors}=function useGetErrors(params){const{kcContext,i18n}=params,{messagesPerField,profile:{attributes}}=kcContext,{msg,msgStr,advancedMsg,advancedMsgStr}=i18n,getErrors=(0,useConstCallback.K)((params=>{var _a;const{name,fieldValueByAttributeName}=params,{value}=fieldValueByAttributeName[name],{value:defaultValue,validators}=attributes.find((attribute=>attribute.name===name));block:{if((null!=defaultValue?defaultValue:"")!==value)break block;let doesErrorExist;try{doesErrorExist=messagesPerField.existsError(name)}catch(_b){break block}if(!doesErrorExist)break block;const errorMessageStr=messagesPerField.get(name);return[{validatorName:void 0,errorMessageStr,errorMessage:(0,jsx_runtime.jsx)("span",{children:errorMessageStr},0)}]}const errors=[];scope:{const validatorName="length",validator=validators[validatorName];if(void 0===validator)break scope;const{"ignore.empty.value":ignoreEmptyValue=!1,max,min}=validator;if(!ignoreEmptyValue||""!==value){if(void 0!==max&&value.length>parseInt(max)){const msgArgs=["error-invalid-length-too-long",max];errors.push({errorMessage:(0,jsx_runtime.jsx)(react.Fragment,{children:msg(...msgArgs)},errors.length),errorMessageStr:msgStr(...msgArgs),validatorName})}if(void 0!==min&&value.length<parseInt(min)){const msgArgs=["error-invalid-length-too-short",min];errors.push({errorMessage:(0,jsx_runtime.jsx)(react.Fragment,{children:msg(...msgArgs)},errors.length),errorMessageStr:msgStr(...msgArgs),validatorName})}}}scope:{const validatorName="_compareToOther",validator=validators[validatorName];if(void 0===validator)break scope;const{"ignore.empty.value":ignoreEmptyValue=!1,name:otherName,shouldBe,"error-message":errorMessageKey}=validator;if(ignoreEmptyValue&&""===value)break scope;const{value:otherValue}=fieldValueByAttributeName[otherName];if((()=>{switch(shouldBe){case"different":return otherValue!==value;case"equal":return otherValue===value}})())break scope;const msgArg=[null!=errorMessageKey?errorMessageKey:(0,id.id)((()=>{switch(shouldBe){case"equal":return"shouldBeEqual";case"different":return"shouldBeDifferent"}})()),otherName,name,shouldBe];errors.push({validatorName,errorMessage:(0,jsx_runtime.jsx)(react.Fragment,{children:advancedMsg(...msgArg)},errors.length),errorMessageStr:advancedMsgStr(...msgArg)})}scope:{const validatorName="pattern",validator=validators[validatorName];if(void 0===validator)break scope;const{"ignore.empty.value":ignoreEmptyValue=!1,pattern,"error-message":errorMessageKey}=validator;if(ignoreEmptyValue&&""===value)break scope;if(new RegExp(pattern).test(value))break scope;const msgArgs=[null!=errorMessageKey?errorMessageKey:(0,id.id)("shouldMatchPattern"),pattern];errors.push({validatorName,errorMessage:(0,jsx_runtime.jsx)(react.Fragment,{children:advancedMsg(...msgArgs)},errors.length),errorMessageStr:advancedMsgStr(...msgArgs)})}scope:{if("pattern"===(null===(_a=[...errors].reverse()[0])||void 0===_a?void 0:_a.validatorName))break scope;const validatorName="email",validator=validators[validatorName];if(void 0===validator)break scope;const{"ignore.empty.value":ignoreEmptyValue=!1}=validator;if(ignoreEmptyValue&&""===value)break scope;if(emailRegexp.test(value))break scope;const msgArgs=[(0,id.id)("invalidEmailMessage")];errors.push({validatorName,errorMessage:(0,jsx_runtime.jsx)(react.Fragment,{children:msg(...msgArgs)},errors.length),errorMessageStr:msgStr(...msgArgs)})}scope:{const validatorName="integer",validator=validators[validatorName];if(void 0===validator)break scope;const{"ignore.empty.value":ignoreEmptyValue=!1,max,min}=validator;if(ignoreEmptyValue&&""===value)break scope;const intValue=parseInt(value);if(isNaN(intValue)){const msgArgs=["mustBeAnInteger"];errors.push({validatorName,errorMessage:(0,jsx_runtime.jsx)(react.Fragment,{children:msg(...msgArgs)},errors.length),errorMessageStr:msgStr(...msgArgs)})}else if(void 0!==max&&intValue>parseInt(max)){const msgArgs=["error-number-out-of-range-too-big",max];errors.push({validatorName,errorMessage:(0,jsx_runtime.jsx)(react.Fragment,{children:msg(...msgArgs)},errors.length),errorMessageStr:msgStr(...msgArgs)})}else if(void 0!==min&&intValue<parseInt(min)){const msgArgs=["error-number-out-of-range-too-small",min];errors.push({validatorName,errorMessage:(0,jsx_runtime.jsx)(react.Fragment,{children:msg(...msgArgs)},errors.length),errorMessageStr:msgStr(...msgArgs)})}else;}scope:{const validatorName="options",validator=validators[validatorName];if(void 0===validator)break scope;if(""===value)break scope;if(validator.options.indexOf(value)>=0)break scope;const msgArgs=[(0,id.id)("notAValidOption")];errors.push({validatorName,errorMessage:(0,jsx_runtime.jsx)(react.Fragment,{children:advancedMsg(...msgArgs)},errors.length),errorMessageStr:advancedMsgStr(...msgArgs)})}return errors}));return{getErrors}}({kcContext:{messagesPerField:kcContext.messagesPerField,profile:{attributes:attributesWithPassword}},i18n}),initialInternalState=(0,react.useMemo)((()=>Object.fromEntries(attributesWithPassword.map((attribute=>({attribute,errors:getErrors({name:attribute.name,fieldValueByAttributeName:Object.fromEntries(attributesWithPassword.map((({name,value})=>[name,{value:null!=value?value:""}])))})}))).map((({attribute,errors})=>{var _a;return[attribute.name,{value:null!==(_a=attribute.value)&&void 0!==_a?_a:"",errors,doDisplayPotentialErrorMessages:0!==errors.length}]})))),[attributesWithPassword]),[formValidationInternalState,formValidationDispatch]=(0,react.useReducer)(((state,params)=>Object.assign(Object.assign({},state),{[params.name]:Object.assign(Object.assign({},state[params.name]),(()=>{switch(params.action){case"focus lost":return{doDisplayPotentialErrorMessages:!0};case"update value":return{value:params.newValue,errors:getErrors({name:params.name,fieldValueByAttributeName:Object.assign(Object.assign({},state),{[params.name]:{value:params.newValue}})})}}})())})),initialInternalState);return{formValidationState:(0,react.useMemo)((()=>({fieldStateByAttributeName:Object.fromEntries(Object.entries(formValidationInternalState).map((([name,{value,errors,doDisplayPotentialErrorMessages}])=>[name,{value,displayableErrors:doDisplayPotentialErrorMessages?errors:[]}]))),isFormSubmittable:Object.entries(formValidationInternalState).every((([name,{value,errors}])=>0===errors.length&&(""!==value||!attributesWithPassword.find((attribute=>attribute.name===name)).required)))})),[formValidationInternalState,attributesWithPassword]),formValidationDispatch,attributesWithPassword}}function UserProfileFormFields(props){const{kcContext,onIsFormSubmittableValueChange,i18n,getClassName,BeforeField,AfterField}=props,{advancedMsg,msg}=i18n,{formValidationState:{fieldStateByAttributeName,isFormSubmittable},formValidationDispatch,attributesWithPassword}=useFormValidation({kcContext,i18n});(0,react.useEffect)((()=>{onIsFormSubmittableValueChange(isFormSubmittable)}),[isFormSubmittable]);let currentGroup="";return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:attributesWithPassword.map(((attribute,i)=>{var _a;const{group="",groupDisplayHeader="",groupDisplayDescription=""}=attribute,{value,displayableErrors}=fieldStateByAttributeName[attribute.name],formGroupClassName=(0,clsx.$)(getClassName("kcFormGroupClass"),0!==displayableErrors.length&&getClassName("kcFormGroupErrorClass"));return(0,jsx_runtime.jsxs)(react.Fragment,{children:[group!==currentGroup&&""!==(currentGroup=group)&&(0,jsx_runtime.jsxs)("div",Object.assign({className:formGroupClassName},{children:[(0,jsx_runtime.jsx)("div",Object.assign({className:getClassName("kcContentWrapperClass")},{children:(0,jsx_runtime.jsx)("label",Object.assign({id:`header-${group}`,className:getClassName("kcFormGroupHeader")},{children:advancedMsg(groupDisplayHeader)||currentGroup}))})),""!==groupDisplayDescription&&(0,jsx_runtime.jsx)("div",Object.assign({className:getClassName("kcLabelWrapperClass")},{children:(0,jsx_runtime.jsx)("label",Object.assign({id:`description-${group}`,className:getClassName("kcLabelClass")},{children:advancedMsg(groupDisplayDescription)}))}))]})),BeforeField&&(0,jsx_runtime.jsx)(BeforeField,{attribute}),(0,jsx_runtime.jsxs)("div",Object.assign({className:formGroupClassName},{children:[(0,jsx_runtime.jsxs)("div",Object.assign({className:getClassName("kcLabelWrapperClass")},{children:[(0,jsx_runtime.jsx)("label",Object.assign({htmlFor:attribute.name,className:getClassName("kcLabelClass")},{children:advancedMsg(null!==(_a=attribute.displayName)&&void 0!==_a?_a:"")})),attribute.required&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"*"})]})),(0,jsx_runtime.jsxs)("div",Object.assign({className:getClassName("kcInputWrapperClass")},{children:[(()=>{const{options}=attribute.validators;return void 0!==options?(0,jsx_runtime.jsx)("select",Object.assign({id:attribute.name,name:attribute.name,onChange:event=>formValidationDispatch({action:"update value",name:attribute.name,newValue:event.target.value}),onBlur:()=>formValidationDispatch({action:"focus lost",name:attribute.name}),value},{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("option",Object.assign({value:"",selected:!0,disabled:!0,hidden:!0},{children:msg("selectAnOption")})),options.options.map((option=>(0,jsx_runtime.jsx)("option",Object.assign({value:option},{children:option}),option)))]})})):(0,jsx_runtime.jsx)("input",{type:(()=>{switch(attribute.name){case"password-confirm":case"password":return"password";default:return"text"}})(),id:attribute.name,name:attribute.name,value,onChange:event=>formValidationDispatch({action:"update value",name:attribute.name,newValue:event.target.value}),onBlur:()=>formValidationDispatch({action:"focus lost",name:attribute.name}),className:getClassName("kcInputClass"),"aria-invalid":0!==displayableErrors.length,disabled:attribute.readOnly,autoComplete:attribute.autocomplete})})(),0!==displayableErrors.length&&(()=>{const divId=`input-error-${attribute.name}`;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("style",{children:`#${divId} > span: { display: block; }`}),(0,jsx_runtime.jsx)("span",Object.assign({id:divId,className:getClassName("kcInputErrorMessageClass"),style:{position:1===displayableErrors.length?"absolute":void 0},"aria-live":"polite"},{children:displayableErrors.map((({errorMessage})=>errorMessage))}))]})})()]}))]})),AfterField&&(0,jsx_runtime.jsx)(AfterField,{attribute})]},i)}))})}},"./node_modules/keycloakify/tools/Array.prototype.every.js":()=>{Array.prototype.every||(Array.prototype.every=function(callbackfn,thisArg){var T,k;if(null==this)throw new TypeError("this is null or not defined");var O=Object(this),len=O.length>>>0;if("function"!=typeof callbackfn&&"[object Function]"!==Object.prototype.toString.call(callbackfn))throw new TypeError;for(arguments.length>1&&(T=thisArg),k=0;k<len;){var kValue;if(k in O)if(kValue=O[k],!(T?callbackfn.call(T,kValue,k,O):callbackfn(kValue,k,O)))return!1;k++}return!0})},"./node_modules/keycloakify/tools/clsx.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>clsx});var tsafe_assert__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/keycloakify/node_modules/tsafe/assert.js"),tsafe_typeGuard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/keycloakify/node_modules/tsafe/typeGuard.js");const clsx=(...args)=>{const len=args.length;let i=0,cls="";for(;i<len;i++){const arg=args[i];if(null==arg)continue;let toAdd;switch(typeof arg){case"boolean":break;case"object":if(Array.isArray(arg))toAdd=clsx(...arg);else{(0,tsafe_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(!(0,tsafe_typeGuard__WEBPACK_IMPORTED_MODULE_1__.typeGuard)(arg,!1)),toAdd="";for(const k in arg)arg[k]&&k&&(toAdd&&(toAdd+=" "),toAdd+=k)}break;default:toAdd=arg}toAdd&&(cls&&(cls+=" "),cls+=toAdd)}return cls}}}]);