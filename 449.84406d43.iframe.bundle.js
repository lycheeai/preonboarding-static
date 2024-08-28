"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[449],{"./src/components/BackButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>BackButton});var _path,react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function SvgArrowShort(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",_extends({width:13,height:13,viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{d:"M7.75 12.125L1.75 6.5L7.75 0.875",stroke:"#6F6F69",strokeWidth:1.5})))}const ForwardRef=react.forwardRef(SvgArrowShort);__webpack_require__.p;var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./src/utils/colors.ts"),ButtonClean=__webpack_require__("./src/components/ButtonClean/index.ts");const Container=(0,styled_components_browser_esm.Ay)(ButtonClean.I)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${colors.J.GS600};
  text-decoration: none;
  align-self: flex-start;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BackButton=_ref=>{let{label="Back",href,disabled,onClick}=_ref;return(0,jsx_runtime.jsxs)(Container,{href,onClick:(()=>{if(!href)return onClick||(()=>history.back())})(),disabled,children:[(0,jsx_runtime.jsx)(ForwardRef,{})," ",label]})};try{BackButton.displayName="BackButton",BackButton.__docgenInfo={description:"",displayName:"BackButton",props:{label:{defaultValue:{value:"Back"},description:"",name:"label",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BackButton/BackButton.tsx#BackButton"]={docgenInfo:BackButton.__docgenInfo,name:"BackButton",path:"src/components/BackButton/BackButton.tsx#BackButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/BaseContent/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>BaseContent});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
  font-size: 16px;
  line-height: 150%;
  margin: 0;
  padding: 0;

  color: ${_ref=>{let{appearance}=_ref;return{base:"#10110D",secondary:"#6F6F69"}[appearance]}};
  font-size: ${_ref2=>{let{size}=_ref2;return`${{base:16,small:14}[size]}px`}};

  a {
    text-decoration: underline;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BaseContent=_ref=>{let{children,appearance="base",size="base"}=_ref;return(0,jsx_runtime.jsx)(Container,{appearance,size,children})};try{BaseContent.displayName="BaseContent",BaseContent.__docgenInfo={description:"",displayName:"BaseContent",props:{appearance:{defaultValue:{value:"base"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"secondary"'}]}},size:{defaultValue:{value:"base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"small"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BaseContent/BaseContent.tsx#BaseContent"]={docgenInfo:BaseContent.__docgenInfo,name:"BaseContent",path:"src/components/BaseContent/BaseContent.tsx#BaseContent"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FormLayout/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>FormLayout});var Button=__webpack_require__("./src/components/Button/index.ts"),Input=__webpack_require__("./src/components/Input/index.ts"),Loader=__webpack_require__("./src/components/Loader/index.ts"),BackButton=__webpack_require__("./src/components/BackButton/index.ts"),Heading=__webpack_require__("./src/components/Heading/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./src/utils/colors.ts");const Form=styled_components_browser_esm.Ay.form`
  display: flex;
  flex-flow: column nowrap;
  max-width: calc(100vw - 48px);
  width: 384px;
  position: relative;
  gap: 24px;

  h1 {
    margin: 0;
  }
`,HeadingContainer=styled_components_browser_esm.Ay.div`
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Content=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,LoadingWrapper=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.J.GS100}80;
  z-index: 1;
`;var BaseContent=__webpack_require__("./src/components/BaseContent/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FormLayout=_ref=>{let{id,analytics,isLoading,isSubmitting,title,children,description,submitButtonLabel="Continue",noSubmit,withBackButton,error,backHref,onBack,onSubmit,onSubmitClick}=_ref;return(0,jsx_runtime.jsxs)(Form,{id,"data-analytics":analytics,onSubmit:noSubmit?void 0:onSubmit,noValidate:!0,children:[(0,jsx_runtime.jsxs)(HeadingContainer,{children:[withBackButton&&(0,jsx_runtime.jsx)(BackButton.o,{href:backHref,disabled:isLoading||isSubmitting,onClick:onBack}),(0,jsx_runtime.jsx)(Heading.D,{children:title}),description&&(0,jsx_runtime.jsx)(BaseContent.J,{children:description})]}),(0,jsx_runtime.jsx)(Content,{children}),!noSubmit&&(0,jsx_runtime.jsx)(Button.$,{type:"submit",isLoading:isSubmitting,disabled:isLoading,size:"large",fullwidth:!0,onClick:onSubmitClick||void 0,children:submitButtonLabel}),!!error&&(0,jsx_runtime.jsx)(Input.p.Error,{children:error}),isLoading&&(0,jsx_runtime.jsx)(LoadingWrapper,{id:"form-loader",children:(0,jsx_runtime.jsx)(Loader.a,{})})]})};try{FormLayout.displayName="FormLayout",FormLayout.__docgenInfo={description:"",displayName:"FormLayout",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isSubmitting:{defaultValue:null,description:"",name:"isSubmitting",required:!1,type:{name:"boolean"}},analytics:{defaultValue:null,description:"",name:"analytics",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},noSubmit:{defaultValue:null,description:"",name:"noSubmit",required:!1,type:{name:"boolean"}},submitButtonLabel:{defaultValue:{value:"Continue"},description:"",name:"submitButtonLabel",required:!1,type:{name:"string"}},withBackButton:{defaultValue:null,description:"",name:"withBackButton",required:!1,type:{name:"boolean"}},backHref:{defaultValue:null,description:"",name:"backHref",required:!1,type:{name:"string"}},onBack:{defaultValue:null,description:"",name:"onBack",required:!1,type:{name:"(() => void)"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"(() => void)"}},onSubmitClick:{defaultValue:null,description:"",name:"onSubmitClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormLayout/FormLayout.tsx#FormLayout"]={docgenInfo:FormLayout.__docgenInfo,name:"FormLayout",path:"src/components/FormLayout/FormLayout.tsx#FormLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SimpleLayout/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>SimpleLayout});var BackButton=__webpack_require__("./src/components/BackButton/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Inner=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SimpleLayout=_ref=>{let{header,content,footer,withBackButton,backHref,onBack}=_ref;return(0,jsx_runtime.jsxs)(Container,{children:[header||withBackButton?(0,jsx_runtime.jsxs)(Inner,{children:[withBackButton&&(0,jsx_runtime.jsx)(BackButton.o,{href:backHref,onClick:onBack}),header&&(0,jsx_runtime.jsx)(Inner,{children:header})]}):null,content&&(0,jsx_runtime.jsx)(Inner,{children:content}),footer&&(0,jsx_runtime.jsx)(Inner,{children:footer})]})};try{SimpleLayout.displayName="SimpleLayout",SimpleLayout.__docgenInfo={description:"",displayName:"SimpleLayout",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},withBackButton:{defaultValue:null,description:"",name:"withBackButton",required:!1,type:{name:"boolean"}},backHref:{defaultValue:null,description:"",name:"backHref",required:!1,type:{name:"string"}},onBack:{defaultValue:null,description:"",name:"onBack",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SimpleLayout/SimpleLayout.tsx#SimpleLayout"]={docgenInfo:SimpleLayout.__docgenInfo,name:"SimpleLayout",path:"src/components/SimpleLayout/SimpleLayout.tsx#SimpleLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/keycloak-theme/login/pages/RequestInvite.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>pages_RequestInvite});var Template=__webpack_require__("./src/keycloak-theme/login/Template.tsx"),react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),Heading=__webpack_require__("./src/components/Heading/index.ts"),FormLayout=__webpack_require__("./src/components/FormLayout/index.ts"),Input=__webpack_require__("./src/components/Input/index.ts"),regexp=__webpack_require__("./src/utils/regexp.ts"),SimpleLayout=__webpack_require__("./src/components/SimpleLayout/index.ts"),BaseContent=__webpack_require__("./src/components/BaseContent/index.ts"),Button=__webpack_require__("./src/components/Button/index.ts"),routing=__webpack_require__("./src/routing.ts"),login_kcContext=__webpack_require__("./src/keycloak-theme/login/kcContext.tsx");const getLastName=fullName=>(null==fullName?void 0:fullName.trim().split(" ").splice(1).join(" "))||"";var es=__webpack_require__("./node_modules/react-query/es/index.js"),ApiBase=__webpack_require__("./src/services/ApiBase.ts");class HubspotFormsClientModel extends ApiBase.W{constructor(){super(...arguments),this.submitForm=(params,payload)=>this.post(`/submit/${params.portalId}/${params.formGuid}`,payload)}}const HubspotFormsApiClient=new HubspotFormsClientModel({development:"https://api.hsforms.com/submissions/v3/integration",production:"https://api.hsforms.com/submissions/v3/integration"});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RequestInviteForm=()=>{const{kcContext}=(0,login_kcContext.gB)(),[isSuccess,setIsSuccess]=(0,react.useState)(!1),[isError,setIsError]=(0,react.useState)(!1),requestAnInviteMutation=(params={portalId:"8634406",formGuid:"e31c5748-7aed-4df6-9789-fa0156812297"},(0,es.useMutation)((async payload=>{const{data}=await HubspotFormsApiClient.submitForm(params,payload);return data})));var params;const{register,watch,formState:{errors,isSubmitted,isSubmitting},handleSubmit}=(0,index_esm.mN)({defaultValues:{name:"",email:"",companyName:"",creatorName:"",channelUrl:""},mode:"onSubmit"}),values={name:watch("name"),email:watch("email"),companyName:watch("companyName"),creatorName:watch("creatorName"),channelUrl:watch("channelUrl")};return isSuccess?(0,jsx_runtime.jsx)(SimpleLayout.n,{withBackButton:!0,backHref:kcContext.fwUrl.getStartedUrl,header:(0,jsx_runtime.jsx)(Heading.D,{children:"Thank you!"}),content:(0,jsx_runtime.jsx)(BaseContent.J,{children:"We’ll get back to you as soon as we can."}),footer:(0,jsx_runtime.jsx)(Button.$,{href:routing.D.homepage,children:"Back to homepage"})}):(0,jsx_runtime.jsxs)(FormLayout.H,{title:"Request a manager or an agency account",description:"Manager accounts give you unique data insights and the ability to manage multiple websites.",withBackButton:!0,isSubmitting,error:isError?"Something went wrong. Please try again.":void 0,onSubmit:handleSubmit((async()=>{if("production"===kcContext.env||values.email.includes("@fourthwall.com")){const payload={fields:[{name:"firstname",value:(fullName=(formValues=values).name,(null==fullName?void 0:fullName.trim().split(" ")[0])||"")},{name:"lastname",value:getLastName(formValues.name)},{name:"email",value:formValues.email},{name:"referral_url",value:document.referrer},{name:"contact_role",value:"Manager"},{name:"manager_name",value:formValues.name},{name:"manager_email",value:formValues.email},{name:"manager_company_name",value:formValues.companyName},{name:"manager_creator_name",value:formValues.creatorName},{name:"channel_url",value:formValues.channelUrl}]};await requestAnInviteMutation.mutateAsync(payload,{onSuccess:()=>setIsSuccess(!0),onError:()=>setIsError(!0)})}else setIsSuccess(!0);var formValues,fullName})),children:[(0,jsx_runtime.jsx)(Input.p,{name:"name",label:"Your name",errors,register,value:values.name,isSubmitted,disabled:isSubmitting,rules:{required:"Your name is required.",minLength:{value:2,message:"Your name must have at least 3 characters."},maxLength:{value:50,message:"Your name cannot exceed 50 characters."},pattern:{value:regexp.a0,message:"Your name cannot contain HTML tags."}}}),(0,jsx_runtime.jsx)(Input.p,{name:"email",label:"Your email",errors,register,value:values.email,isSubmitted,disabled:isSubmitting,rules:{required:"Your email adress is required.",pattern:{value:regexp.TB,message:"Invalid email address format"}}}),(0,jsx_runtime.jsx)(Input.p,{name:"companyName",label:"Company name (optional)",errors,register,value:values.companyName,isSubmitted,disabled:isSubmitting,rules:{minLength:{value:1,message:"Company name must have at least 1 character."},maxLength:{value:50,message:"Company name cannot exceed 50 characters."},pattern:{value:regexp.a0,message:"Company name cannot contain HTML tags."}}}),(0,jsx_runtime.jsx)(Input.p,{name:"creatorName",label:"Name of creator you work with",errors,register,value:values.creatorName,isSubmitted,disabled:isSubmitting,rules:{required:"Creator name is required.",minLength:{value:2,message:"Company name must have at least 2 characters."},maxLength:{value:50,message:"Creator name cannot exceed 50 characters."},pattern:{value:regexp.a0,message:"Creator name cannot contain HTML tags."}}}),(0,jsx_runtime.jsx)(Input.p,{name:"channelUrl",label:"Creator's primary channel URL",errors,register,value:values.channelUrl,isSubmitted,disabled:isSubmitting,rules:{required:"Channel URL is required.",pattern:{value:regexp._t,message:"This is not valid URL."}}})]})},pages_RequestInvite=()=>(0,jsx_runtime.jsx)(Template.A,{title:"Request an invite",creator:"Stevie",children:(0,jsx_runtime.jsx)(RequestInviteForm,{})})},"./src/utils/regexp.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TB:()=>EMAIL_REGEXP,_t:()=>URL_REGEX,a0:()=>HTML_TAGS_REGEXP});const EMAIL_REGEXP=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,HTML_TAGS_REGEXP=/^[^<>]+$/,URL_REGEX=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~@+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i")}}]);
//# sourceMappingURL=449.84406d43.iframe.bundle.js.map