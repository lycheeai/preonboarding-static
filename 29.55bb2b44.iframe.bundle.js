"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[29],{"./src/keycloak-theme/login/pages/SelectAuthenticator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>pages_SelectAuthenticator});var react=__webpack_require__("./node_modules/react/index.js"),useConstCallback=__webpack_require__("./node_modules/keycloakify/tools/useConstCallback.js"),login_kcContext=__webpack_require__("./src/keycloak-theme/login/kcContext.tsx"),Template=__webpack_require__("./src/keycloak-theme/login/Template.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TilesContainer=styled_components_browser_esm.Ay.div`
  display: grid;
  gap: 16px;
`,Tiles=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)(TilesContainer,{children})},TilesItemContainer=styled_components_browser_esm.Ay.button`
  background-color: #f5f4f3;
  padding: 20px 24px;
  text-align: left;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;

  svg {
    display: block;
    width: 24px;
    height: 24px;
  }
`,TilesItemTitle=styled_components_browser_esm.Ay.div`
  color: #10110d;
  font-family: "Suisse Int'l";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 28px */
`,TilesItemDescription=styled_components_browser_esm.Ay.div`
  margin-top: 8px;

  color: #6f6f69;
  font-family: "Suisse Int'l";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;Tiles.Item=_ref2=>{let{title,description,icon,onClick}=_ref2;return(0,jsx_runtime.jsxs)(TilesItemContainer,{onClick,children:[icon&&(0,jsx_runtime.jsx)("div",{children:icon}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(TilesItemTitle,{children:title}),(0,jsx_runtime.jsx)(TilesItemDescription,{children:description})]})]})};try{Tiles.displayName="Tiles",Tiles.__docgenInfo={description:"",displayName:"Tiles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tiles.tsx#Tiles"]={docgenInfo:Tiles.__docgenInfo,name:"Tiles",path:"src/components/Tiles.tsx#Tiles"})}catch(__react_docgen_typescript_loader_error){}try{Tiles.Item.displayName="Tiles.Item",Tiles.Item.__docgenInfo={description:"",displayName:"Tiles.Item",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tiles.tsx#Tiles.Item"]={docgenInfo:Tiles.Item.__docgenInfo,name:"Tiles.Item",path:"src/components/Tiles.tsx#Tiles.Item"})}catch(__react_docgen_typescript_loader_error){}var Heading=__webpack_require__("./src/components/Heading/index.ts");const title="Select login method",pages_SelectAuthenticator=()=>{const{kcContext}=(0,login_kcContext.gB)(),{url,auth}=kcContext,selectCredentialsForm=(0,react.useRef)(null),authExecIdInput=(0,react.useRef)(null),selections={"otp-display-name":{title:"Authenticator application",description:"Enter a verification code from authenticator application to sign in.",icon:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,jsx_runtime.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.75 18.75H14.25H9.75ZM4.5 0.75H19.5V23.25H4.5V0.75Z",stroke:"#10110D","stroke-width":"1.5"})})},"password-display-name":{title:"password",description:""},"auth-username-form-display-name":{title:"auth-username-form",description:""},"auth-username-password-form-display-name":{title:"auth-username-password-form",description:""},"webauthn-display-name":{title:"Passkey",description:"Use your passkey (e.g., face or fingerprint scan) to sign in.",icon:(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,jsx_runtime.jsxs)("g",{"clip-path":"url(#clip0_105154_36023)",children:[(0,jsx_runtime.jsx)("path",{d:"M4 18.5C4 18.697 4.0388 18.892 4.11418 19.074C4.18956 19.256 4.30005 19.4214 4.43934 19.5607C4.57863 19.6999 4.74399 19.8104 4.92597 19.8858C5.10796 19.9612 5.30302 20 5.5 20C5.69698 20 5.89204 19.9612 6.07403 19.8858C6.25601 19.8104 6.42137 19.6999 6.56066 19.5607C6.69995 19.4214 6.81044 19.256 6.88582 19.074C6.9612 18.892 7 18.697 7 18.5C7 18.303 6.9612 18.108 6.88582 17.926C6.81044 17.744 6.69995 17.5786 6.56066 17.4393C6.42137 17.3001 6.25601 17.1896 6.07403 17.1142C5.89204 17.0388 5.69698 17 5.5 17C5.30302 17 5.10796 17.0388 4.92597 17.1142C4.74399 17.1896 4.57863 17.3001 4.43934 17.4393C4.30005 17.5786 4.18956 17.744 4.11418 17.926C4.0388 18.108 4 18.303 4 18.5Z",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"}),(0,jsx_runtime.jsx)("path",{d:"M20.5 0.5L10.718 10.283C9.23434 9.51529 7.52506 9.30346 5.89891 9.68579C4.27275 10.0681 2.83693 11.0194 1.8508 12.3678C0.864671 13.7161 0.393258 15.3727 0.521712 17.0383C0.650167 18.7038 1.37002 20.2685 2.55124 21.4497C3.73246 22.631 5.29716 23.3508 6.96272 23.4793C8.62827 23.6077 10.2848 23.1363 11.6332 22.1502C12.9816 21.1641 13.9329 19.7282 14.3152 18.1021C14.6975 16.4759 14.4857 14.7666 13.718 13.283L17 10H18.5V8.5L19 8H20.5V6.5L21 6H22.5V4.5L23.5 3.5V0.5H20.5Z",stroke:"#10110D","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)("clipPath",{id:"clip0_105154_36023",children:(0,jsx_runtime.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]})},"webauthn-passwordless-display-name":{title:"webauthn-passwordless",description:""}},submitForm=(0,useConstCallback.K)((()=>{var _selectCredentialsFor;null===(_selectCredentialsFor=selectCredentialsForm.current)||void 0===_selectCredentialsFor||_selectCredentialsFor.submit()})),onSelectedAuthenticator=(0,useConstCallback.K)((authExecId=>{authExecIdInput.current&&authExecId&&(authExecIdInput.current.value=authExecId,submitForm())}));return(0,jsx_runtime.jsx)(Template.A,{title,children:(0,jsx_runtime.jsx)("form",{ref:selectCredentialsForm,action:url.loginAction,method:"post",children:(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:16},children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Heading.D,{children:title})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(Tiles,{children:[auth.authenticationSelections.map((authenticationSelection=>(0,jsx_runtime.jsx)(Tiles.Item,{title:selections[authenticationSelection.displayName].title,description:selections[authenticationSelection.displayName].description,icon:selections[authenticationSelection.displayName].icon,onClick:()=>onSelectedAuthenticator(authenticationSelection.authExecId)},authenticationSelection.displayName))),(0,jsx_runtime.jsx)("input",{type:"hidden",name:"authenticationExecution",ref:authExecIdInput})]})})]})})})}}}]);
//# sourceMappingURL=29.55bb2b44.iframe.bundle.js.map