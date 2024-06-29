"use strict";(self.webpackChunksandbox=self.webpackChunksandbox||[]).push([[685],{"./app/components/Stack/Stack.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Stack});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Stack_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./app/components/Stack/Stack.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Stack_module.A,options);const Stack_Stack_module=Stack_module.A&&Stack_module.A.locals?Stack_module.A.locals:void 0,Stack=(0,react.forwardRef)(((props,ref)=>{const{children,direction="column",space="1-x",wrap,...remainingProps}=props,baseClass=Stack_Stack_module.stack,classes="".concat(baseClass);return(0,jsx_runtime.jsx)("div",{ref,className:classes,style:{...remainingProps.style,flexDirection:direction,gap:"var(--space-".concat(space,")"),flexWrap:wrap?"wrap":"nowrap"},...remainingProps,children})}));Stack.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Pass content to the stack."},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"Sets direction of the stack."},space:{required:!1,tsType:{name:"union",raw:"'half-x' | '1-x' | '1-and-half-x' | '2-x' | '3-x' | '5-x'",elements:[{name:"literal",value:"'half-x'"},{name:"literal",value:"'1-x'"},{name:"literal",value:"'1-and-half-x'"},{name:"literal",value:"'2-x'"},{name:"literal",value:"'3-x'"},{name:"literal",value:"'5-x'"}]},description:"Sets the space between stack items."},wrap:{required:!1,tsType:{name:"boolean"},description:"Allows items in the stack to wrap."}},composes:["ComponentProps"]}},"./app/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Text_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./app/components/Text/Text.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Text_module.A,options);const Text_Text_module=Text_module.A&&Text_module.A.locals?Text_module.A.locals:void 0;var utils=__webpack_require__("./app/components/utils.ts");const Text=(0,react.forwardRef)(((props,ref)=>{const{children,display="block",size="1-x",fontWeight="normal",marginInlineStart,marginInlineEnd,marginInline,marginBlockStart,marginBlockEnd,marginBlock,margin,...remainingProps}=props,sizeClass=Text_Text_module["size-".concat(size)];return(0,jsx_runtime.jsx)("div",{style:{...remainingProps.style,fontWeight,display,...(0,utils.d)({marginInlineStart,marginInlineEnd,marginInline,marginBlockStart,marginBlockEnd,marginBlock,margin})},className:"".concat(Text_Text_module.heading," ").concat(sizeClass),ref,...remainingProps,children})}));Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{marginInlineStart:{required:!1,tsType:{name:"union",raw:"'half-x' | '1-x' | '1-and-half-x' | '2-x' | '3-x' | '5-x'",elements:[{name:"literal",value:"'half-x'"},{name:"literal",value:"'1-x'"},{name:"literal",value:"'1-and-half-x'"},{name:"literal",value:"'2-x'"},{name:"literal",value:"'3-x'"},{name:"literal",value:"'5-x'"}]},description:""},marginInlineEnd:{required:!1,tsType:{name:"union",raw:"'half-x' | '1-x' | '1-and-half-x' | '2-x' | '3-x' | '5-x'",elements:[{name:"literal",value:"'half-x'"},{name:"literal",value:"'1-x'"},{name:"literal",value:"'1-and-half-x'"},{name:"literal",value:"'2-x'"},{name:"literal",value:"'3-x'"},{name:"literal",value:"'5-x'"}]},description:""},marginInline:{required:!1,tsType:{name:"union",raw:"'half-x' | '1-x' | '1-and-half-x' | '2-x' | '3-x' | '5-x'",elements:[{name:"literal",value:"'half-x'"},{name:"literal",value:"'1-x'"},{name:"literal",value:"'1-and-half-x'"},{name:"literal",value:"'2-x'"},{name:"literal",value:"'3-x'"},{name:"literal",value:"'5-x'"}]},description:""},marginBlockStart:{required:!1,tsType:{name:"union",raw:"'half-x' | '1-x' | '1-and-half-x' | '2-x' | '3-x' | '5-x'",elements:[{name:"literal",value:"'half-x'"},{name:"literal",value:"'1-x'"},{name:"literal",value:"'1-and-half-x'"},{name:"literal",value:"'2-x'"},{name:"literal",value:"'3-x'"},{name:"literal",value:"'5-x'"}]},description:""},marginBlockEnd:{required:!1,tsType:{name:"union",raw:"'half-x' | '1-x' | '1-and-half-x' | '2-x' | '3-x' | '5-x'",elements:[{name:"literal",value:"'half-x'"},{name:"literal",value:"'1-x'"},{name:"literal",value:"'1-and-half-x'"},{name:"literal",value:"'2-x'"},{name:"literal",value:"'3-x'"},{name:"literal",value:"'5-x'"}]},description:""},marginBlock:{required:!1,tsType:{name:"union",raw:"'half-x' | '1-x' | '1-and-half-x' | '2-x' | '3-x' | '5-x'",elements:[{name:"literal",value:"'half-x'"},{name:"literal",value:"'1-x'"},{name:"literal",value:"'1-and-half-x'"},{name:"literal",value:"'2-x'"},{name:"literal",value:"'3-x'"},{name:"literal",value:"'5-x'"}]},description:""},margin:{required:!1,tsType:{name:"union",raw:"'half-x' | '1-x' | '1-and-half-x' | '2-x' | '3-x' | '5-x'",elements:[{name:"literal",value:"'half-x'"},{name:"literal",value:"'1-x'"},{name:"literal",value:"'1-and-half-x'"},{name:"literal",value:"'2-x'"},{name:"literal",value:"'3-x'"},{name:"literal",value:"'5-x'"}]},description:""},children:{required:!0,tsType:{name:"string"},description:"Sets text."},display:{required:!1,tsType:{name:"union",raw:"'block' | 'inline'",elements:[{name:"literal",value:"'block'"},{name:"literal",value:"'inline'"}]},description:"Sets display type."},size:{required:!1,tsType:{name:"union",raw:"| 'three-quarter-x'\n| '1-x'\n| '1-and-eigth-x'\n| '1-and-half-x'\n| '2-x'\n| '3-x'\n| '5-x'",elements:[{name:"literal",value:"'three-quarter-x'"},{name:"literal",value:"'1-x'"},{name:"literal",value:"'1-and-eigth-x'"},{name:"literal",value:"'1-and-half-x'"},{name:"literal",value:"'2-x'"},{name:"literal",value:"'3-x'"},{name:"literal",value:"'5-x'"}]},description:"Sets font size.\n\n@default '1-x'"},fontWeight:{required:!1,tsType:{name:"union",raw:"'bold' | 'normal'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'normal'"}]},description:"Sets font weight.\n\n@default 'normal'"}},composes:["HTMLAttributes"]}},"./app/components/Text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.E});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/components/Text/Text.tsx")},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./app/components/Stack/Stack.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Stack_stack__a_UbX {\n  display: flex;\n  gap: 16px;\n}\n","",{version:3,sources:["webpack://./app/components/Stack/Stack.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,SAAS;AACX",sourcesContent:[".stack {\n  display: flex;\n  gap: 16px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={stack:"Stack_stack__a_UbX"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./app/components/Text/Text.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Text_heading__ZQWxE {\n  color: var(--color-mode-foreground);\n  font-family: var(--font-family);\n  margin: 0;\n\n  &.Text_size-three-quarter-x__9_KT8 {\n    font-size: var(--font-size-three-quarter-x);\n  }\n\n  &.Text_size-1-x__Ijk2N {\n    font-size: var(--font-size-1-x);\n  }\n\n  &.Text_size-1-and-eigth-x__5QhEx {\n    font-size: var(--font-size-1-and-eighth-x);\n  }\n\n  &.Text_size-1-and-half-x__6OAXy {\n    font-size: var(--font-size-1-and-half-x);\n  }\n\n  &.Text_size-2-x__5IDUQ {\n    font-size: var(--font-size-2-x);\n  }\n\n  &.Text_size-3-x__Kj7PO {\n    font-size: var(--font-size-3-x);\n  }\n\n  &.Text_size-5-x__Ww38J {\n    font-size: var(--font-size-5-x);\n  }\n}\n","",{version:3,sources:["webpack://./app/components/Text/Text.module.css"],names:[],mappings:"AAAA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,SAAS;;EAET;IACE,2CAA2C;EAC7C;;EAEA;IACE,+BAA+B;EACjC;;EAEA;IACE,0CAA0C;EAC5C;;EAEA;IACE,wCAAwC;EAC1C;;EAEA;IACE,+BAA+B;EACjC;;EAEA;IACE,+BAA+B;EACjC;;EAEA;IACE,+BAA+B;EACjC;AACF",sourcesContent:[".heading {\n  color: var(--color-mode-foreground);\n  font-family: var(--font-family);\n  margin: 0;\n\n  &.size-three-quarter-x {\n    font-size: var(--font-size-three-quarter-x);\n  }\n\n  &.size-1-x {\n    font-size: var(--font-size-1-x);\n  }\n\n  &.size-1-and-eigth-x {\n    font-size: var(--font-size-1-and-eighth-x);\n  }\n\n  &.size-1-and-half-x {\n    font-size: var(--font-size-1-and-half-x);\n  }\n\n  &.size-2-x {\n    font-size: var(--font-size-2-x);\n  }\n\n  &.size-3-x {\n    font-size: var(--font-size-3-x);\n  }\n\n  &.size-5-x {\n    font-size: var(--font-size-5-x);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={heading:"Text_heading__ZQWxE","size-three-quarter-x":"Text_size-three-quarter-x__9_KT8","size-1-x":"Text_size-1-x__Ijk2N","size-1-and-eigth-x":"Text_size-1-and-eigth-x__5QhEx","size-1-and-half-x":"Text_size-1-and-half-x__6OAXy","size-2-x":"Text_size-2-x__5IDUQ","size-3-x":"Text_size-3-x__Kj7PO","size-5-x":"Text_size-5-x__Ww38J"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);