"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[624],{"./src/components/BaseContent/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>BaseContent});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
  font-size: 16px;
  line-height: 150%;
  margin: 0;
  padding: 0;

  color: ${_ref=>{let{appearance}=_ref;return{base:"#10110D",secondary:"#6F6F69"}[appearance]}};
  font-size: ${_ref2=>{let{size}=_ref2;return`${{base:16,small:14}[size]}px`}};

  a {
    text-decoration: underline;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BaseContent=_ref=>{let{children,appearance="base",size="base"}=_ref;return(0,jsx_runtime.jsx)(Container,{appearance,size,children})};try{BaseContent.displayName="BaseContent",BaseContent.__docgenInfo={description:"",displayName:"BaseContent",props:{appearance:{defaultValue:{value:"base"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"secondary"'}]}},size:{defaultValue:{value:"base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"small"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BaseContent/BaseContent.tsx#BaseContent"]={docgenInfo:BaseContent.__docgenInfo,name:"BaseContent",path:"src/components/BaseContent/BaseContent.tsx#BaseContent"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Note/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>Note});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./src/utils/colors.ts");const Container=styled_components_browser_esm.Ay.h1`
  font-size: 12px;
  line-height: 130%; /* 15.6px */
  letter-spacing: 0.24px;
  color: ${colors.J.GS600};

  a {
    text-decoration: underline;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Note=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)(Container,{children})};try{Note.displayName="Note",Note.__docgenInfo={description:"",displayName:"Note",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Note/Note.tsx#Note"]={docgenInfo:Note.__docgenInfo,name:"Note",path:"src/components/Note/Note.tsx#Note"})}catch(__react_docgen_typescript_loader_error){}},"./src/keycloak-theme/login/pages/LoginConfigTotp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>pages_LoginConfigTotp});var index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),login_kcContext=__webpack_require__("./src/keycloak-theme/login/kcContext.tsx"),Template=__webpack_require__("./src/keycloak-theme/login/Template.tsx"),Heading=__webpack_require__("./src/components/Heading/index.ts"),BaseContent=__webpack_require__("./src/components/BaseContent/index.ts"),Note=__webpack_require__("./src/components/Note/index.ts"),Button=__webpack_require__("./src/components/Button/index.ts"),Input=__webpack_require__("./src/components/Input/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=styled_components_browser_esm.Ay.div`
  display: inline-block;
  padding: 2px 8px;
  background: #eaeae9;

  font-family: 'PT Mono', monospace; // TODO: PT Mono
  font-size: 14px;
  line-height: 150%; /* 21px */
  color: #10110d;
`,Code=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)(Container,{children})};try{Code.displayName="Code",Code.__docgenInfo={description:"",displayName:"Code",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Code.tsx#Code"]={docgenInfo:Code.__docgenInfo,name:"Code",path:"src/components/Code.tsx#Code"})}catch(__react_docgen_typescript_loader_error){}const TITLE="Authenticator app setup",pages_LoginConfigTotp=()=>{const{kcContext}=(0,login_kcContext.gB)(),{register,watch}=(0,index_esm.mN)(),{url,isAppInitiatedAction,totp,mode,messagesPerField}=kcContext,algToKeyUriAlg={HmacSHA1:"SHA1",HmacSHA256:"SHA256",HmacSHA512:"SHA512"},policyTypeMap={totp:"Time-based",hotp:"Counter-based"};return(0,jsx_runtime.jsx)("form",{action:url.loginAction,method:"post",children:(0,jsx_runtime.jsx)(Template.A,{title:TITLE,children:(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:16},children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Heading.D,{children:TITLE})}),(()=>{var _algToKeyUriAlg$totp$;if("manual"===mode)return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:16},children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(BaseContent.J,{children:(0,jsx_runtime.jsx)("p",{children:"Open the application and enter the key:"})})}),(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:8},children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Code,{children:totp.totpSecretEncoded})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Note.L,{children:(0,jsx_runtime.jsx)("a",{href:totp.qrUrl,children:"Scan barcode?"})})})]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(BaseContent.J,{children:[(0,jsx_runtime.jsx)("p",{children:"Use the following configuration values if the application allows setting them:"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsxs)("li",{children:["Type: ",policyTypeMap[totp.policy.type]]}),(0,jsx_runtime.jsxs)("li",{children:["Algorithm: ",null!==(_algToKeyUriAlg$totp$=algToKeyUriAlg[totp.policy.algorithm])&&void 0!==_algToKeyUriAlg$totp$?_algToKeyUriAlg$totp$:totp.policy.algorithm]}),(0,jsx_runtime.jsxs)("li",{children:["Digits: ",totp.policy.digits]}),"totp"===totp.policy.type?(0,jsx_runtime.jsxs)("li",{children:["Interval: ",totp.policy.period]}):(0,jsx_runtime.jsxs)("li",{children:["Counter: ",totp.policy.initialCounter]})]})})]})})]})});return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(BaseContent.J,{children:(0,jsx_runtime.jsxs)("p",{children:["Scan the QR code below on any authenticator app. We recommend"," ",(0,jsx_runtime.jsx)("a",{href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2",target:"_blank",children:"Google Authenticator"}),","," ",(0,jsx_runtime.jsx)("a",{href:"https://www.microsoft.com/security/mobile-authenticator-app",target:"_blank",children:"Microsoft Authenticator"}),","," ",(0,jsx_runtime.jsx)("a",{href:"https://freeotp.github.io/",target:"_blank",children:"FreeOTP"}),"."]})}),(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:8},children:[(0,jsx_runtime.jsx)("div",{style:{overflow:"hidden"},children:(0,jsx_runtime.jsx)("img",{src:`data:image/png;base64, ${totp.totpSecretQrCode}`,alt:"Figure: Barcode",style:{width:160,height:160,margin:-16}})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Note.L,{children:(0,jsx_runtime.jsx)("a",{href:totp.manualUrl,children:"Unable to scan?"})})})]})]})})(),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(BaseContent.J,{children:(0,jsx_runtime.jsx)("p",{children:"Enter one-time code provided by the application:"})})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Input.p,{label:"One-time code",name:"totp",autocomplete:"off","aria-invalid":messagesPerField.existsError("totp"),error:messagesPerField.existsError("totp")?messagesPerField.get("totp"):void 0,register,value:watch("totp")}),(0,jsx_runtime.jsx)("input",{type:"hidden",name:"totpSecret",value:totp.totpSecret}),mode&&(0,jsx_runtime.jsx)("input",{type:"hidden",value:mode})]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Input.p,{label:"Device name",message:"Used to help you differentiate devices (e.g., Greg’s iPhone)",name:"userLabel",autocomplete:"off","aria-invalid":messagesPerField.existsError("userLabel"),error:messagesPerField.existsError("userLabel")?messagesPerField.get("userLabel"):void 0,register,value:watch("userLabel")})}),(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:8},children:[(0,jsx_runtime.jsx)(Button.$,{type:"submit",fullwidth:!0,size:"large",children:"Submit"}),isAppInitiatedAction&&(0,jsx_runtime.jsx)(Button.$,{type:"submit",fullwidth:!0,name:"cancel-aia",value:"true",appearance:"secondary",size:"large",children:"Cancel"})]})]})})})}}}]);
//# sourceMappingURL=624.9d23bbb9.iframe.bundle.js.map