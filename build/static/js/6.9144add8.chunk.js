(this.webpackJsonpstudentreport=this.webpackJsonpstudentreport||[]).push([[6],{242:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t.n(a),l=t(6),i=t.p+"static/media/AuthHero.3e23331c.webp",r=t(2),d=function(e){return console.log(" hero rendering"),Object(a.useEffect)((function(){console.log("pehli baar render")}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"w-1/2 h-screen text-white bg-black md:block lg:block sm:hidden ",children:Object(r.jsx)("img",{src:i,className:"mx-auto my-44 h-96 w-96",alt:""})})})};d.defaultProps={};var o=c.a.memo(d),n=t(15),m=t(28),b=t(25),j=t(129),x=t(130),h=t(132),u=t(131),p=t(34),O=t(19),f=function(){var e=Object(l.g)(),s=Object(O.b)(),t=Object(u.a)({initialValues:{email:"",password:""},validationSchema:h.c().shape({email:h.d().required("*Email is a required field!*").email("*Must be a valid Email!*"),password:h.d().required("*Password is a required field!*").min(8,"*Password must be of atleast 8 chars!*")}),onSubmit:function(t){Object(p.a)(t).then((function(t){s({type:"me/login",payload:t}),e.push("/dashboard")}))}}),c=t.getFieldProps,i=t.handleSubmit,d=t.touched,o=t.isSubmitting,f=t.errors,g=Object(a.useState)({email:"",password:""}),v=Object(m.a)(g,2),N=v[0],w=v[1];console.log(w);var y=Object(a.useState)(!1),S=Object(m.a)(y,2),P=S[0],q=S[1],k=h.d().required().email(),V=h.d().required().min(8),F=h.a().required().of(h.b().negative()),C=h.c().shape({email:h.d().required().email(),password:h.d().required().min(8)});try{C.validateSync(N)}catch(E){console.log(E)}return console.log(F),console.log("isformvalid",C.isValidSync(N)),console.log("email validator",k.isValidSync(""),k.isValidSync(void 0),k.isValidSync("hello"),k.isValidSync(5),k.isValidSync("hello@gmail.com"),k.isValidSync("hi@codespx.io")),console.log("password validator",V.isValidSync(""),V.isValidSync(void 0),V.isValidSync("hello"),V.isValidSync(5),V.isValidSync("hello@gmail.com"),V.isValidSync("hi@codespx.io")),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("form",{className:"mt-32 lg:ml-36 sm:ml-12",onSubmit:i,children:[Object(r.jsxs)("div",{className:"mb-6 text-5xl font-semibold text-blue-600",children:["Log In to ",Object(r.jsx)("span",{className:"font-extrabold",children:"DEVS"})]}),Object(r.jsxs)("div",{className:"mb-12 font-bold",children:["New here? ",Object(r.jsx)(b.b,{to:"/auth/signup",className:"text-indigo-600 underline hover:text-indigo-900",children:"Create an account"})]}),Object(r.jsxs)("div",{className:"flex flex-col",children:[Object(r.jsxs)("div",{className:"flex items-center my-6 space-x-4 text-left border-b border-gray-300",children:[Object(r.jsx)("label",{htmlFor:"email",className:"sr-only"}),Object(r.jsx)(j.b,{className:"text-indigo-600",style:{margin:"0px"}}),Object(r.jsx)("input",Object(n.a)({className:"outline-none ",type:"email",placeholder:"Email address",id:"email-address",autoComplete:"email",required:!0},c("email"))),d.email&&Object(r.jsx)("div",{className:"h-6 text-sm font-semibold text-red-500 ",children:f.email})]}),Object(r.jsxs)("div",{className:"flex items-center my-6 space-x-4 text-left border-b border-gray-300",children:[Object(r.jsx)("label",{htmlFor:"Password:"}),Object(r.jsx)(x.a,{className:"text-indigo-600",style:{margin:"0px"}}),Object(r.jsx)("input",Object(n.a)({className:"outline-none",type:P?"text":"password",placeholder:"Password",required:!0},c("password"))),d.password&&Object(r.jsx)("div",{className:"h-6 text-sm font-semibold text-red-500",children:f.password})]})]}),o&&Object(r.jsx)(j.a,{className:"mx-auto mt-8 animate-spin"}),Object(r.jsxs)("div",{className:"flex flex-row items-center space-x-4 text-center mt-11",children:[Object(r.jsx)("div",{className:"items-center justify-center font-bold",children:"Show Password"}),Object(r.jsx)("div",{className:"shadow-md",children:Object(r.jsx)("input",{onClick:function(){q(!1===P)},className:"shadow-md cursor-pointer",type:"checkbox"})}),Object(r.jsxs)("div",{className:"flex flex-row space-x-4",children:[Object(r.jsxs)("div",{className:"ml-32",children:[" ",Object(r.jsx)("button",{type:"submit",className:"p-1 px-4 text-white bg-indigo-500 border-2 rounded-md shadow-md hover:opacity-60",children:"Login"})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"button",onClick:function(e){console.log("cancel button clicked"),e.preventDefault()},className:"p-1 px-4 text-white bg-indigo-500 border-2 rounded-md shadow-md hover:opacity-60",children:"Cancel"})})]})]}),Object(r.jsx)("div",{className:"mt-8 ml-32",children:Object(r.jsx)(b.b,{className:"pt-8 font-semibold tracking-widest text-blue-800 text-md",to:"/auth/forgotpassword",children:"Forgot Password?"})}),Object(r.jsx)("p",{className:"mt-16 font-semibold text-blue-600",children:"\xa9 2020 All Rights Reserved. Cookie Preferences, Privacy, and Terms."})]})})};f.defaultProps={};var g=c.a.memo(f),v=t(239),N=t(93),w=["touched","error","className","id","placeholder"],y=function(e){var s=e.touched,t=e.error,a=e.className,c=e.id,l=e.placeholder,i=Object(N.a)(e,w);return Object(r.jsxs)("div",{children:[c&&l&&Object(r.jsx)("label",{htmlFor:c,className:"sr-only",children:l}),Object(r.jsx)("input",Object(n.a)(Object(n.a)({id:c},i),{},{className:"outline-none w-full "+a,placeholder:l})),s&&Object(r.jsx)("div",{className:"text-red-500",children:t})]})};y.defaultProps={};var S=c.a.memo(y),P=function(e){var s=Object(l.g)(),t=Object(u.a)({initialValues:{email:"",password:""},validationSchema:h.c().shape({email:h.d().required("*Email is a required field!*").email("*Must be a valid Email!*"),password:h.d().required("*Password is a required field!*").min(8,"*Password must be of atleast 8 chars!*")}),onSubmit:function(e){console.log("form submitting",e),setTimeout((function(){console.log("successfull"),s.push("/dashboard")}),5e3)}}),c=t.getFieldProps,i=t.handleSubmit,d=t.touched,o=t.isSubmitting,p=t.errors,O=Object(a.useState)({email:"",password:""}),f=Object(m.a)(O,2),g=f[0],N=f[1];console.log(N);var w=Object(a.useState)(!1),y=Object(m.a)(w,2),P=y[0],q=y[1],k=h.c().shape({email:h.d().required().email(),password:h.d().required().min(8)});try{k.validateSync(g)}catch(V){console.log(V)}return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{children:Object(r.jsxs)("form",{className:"mt-32 ml-36",onSubmit:i,children:[Object(r.jsxs)("div",{className:"flex flex-col space-y-4",children:[Object(r.jsx)("div",{className:"mb-8 text-3xl font-bold text-indigo-600",children:"Get started with a free account"}),Object(r.jsxs)("div",{className:"mb-12",children:[Object(r.jsx)("p",{className:"inline font-semibold",children:"Already have an account? "}),Object(r.jsx)(b.b,{to:"/auth/login",className:"font-bold text-blue-700 underline",children:"Log in"})]})]}),Object(r.jsxs)("div",{className:"flex flex-col mt-12 space-y-10",children:[Object(r.jsxs)("div",{className:"flex items-center space-x-4 text-left border-b border-gray-300",children:[Object(r.jsx)(j.b,{className:"text-indigo-600",style:{margin:"0px"}}),Object(r.jsx)(S,{placeholder:"Username"})]}),Object(r.jsxs)("div",{className:"flex items-center space-x-4 text-left border-b border-gray-300",children:[Object(r.jsx)("label",{htmlFor:"email",className:"sr-only"}),Object(r.jsx)(v.a,{className:"text-indigo-600",style:{margin:"0px"}}),Object(r.jsx)("input",Object(n.a)({className:"outline-none ",type:"email",placeholder:"Email address",id:"email-address",autoComplete:"email",required:!0},c("email"))),d.email&&Object(r.jsx)("div",{className:"text-sm font-semibold text-red-500 ",children:p.email})]}),Object(r.jsxs)("div",{className:"flex items-center space-x-4 text-left border-b border-gray-300",children:[Object(r.jsx)("label",{htmlFor:"Password:"}),Object(r.jsx)(x.a,{className:"text-indigo-600",style:{margin:"0px"}}),Object(r.jsx)("input",Object(n.a)({className:"outline-none",type:P?"text":"password",placeholder:"Password",required:!0},c("password"))),d.password&&Object(r.jsx)("div",{className:"text-sm font-semibold text-red-500",children:p.password})]}),Object(r.jsxs)("div",{className:"mt-4",children:[Object(r.jsx)("input",{type:"checkbox"}),Object(r.jsx)("span",{className:"text-blue-600",children:" I agree to the terms and conditions"})," "]})]}),o&&Object(r.jsx)(j.a,{className:"mx-auto mt-8 animate-spin"}),Object(r.jsxs)("div",{className:"flex flex-row items-center space-x-4 text-center mt-11",children:[Object(r.jsx)("div",{className:"items-center justify-center font-bold",children:"Show Password"}),Object(r.jsx)("div",{className:"shadow-md",children:Object(r.jsx)("input",{onClick:function(){q(!1===P)},className:"shadow-md cursor-pointer",type:"checkbox"})}),Object(r.jsxs)("div",{className:"flex flex-row space-x-4",children:[Object(r.jsxs)("div",{className:"ml-32",children:[" ",Object(r.jsx)("button",{type:"submit",className:"p-1 px-4 text-white bg-indigo-500 border-2 rounded-md shadow-md hover:opacity-60",children:"Get started"})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"button",onClick:function(e){console.log("cancel button clicked"),e.preventDefault()},className:"p-1 px-4 text-white bg-indigo-500 border-2 rounded-md shadow-md hover:opacity-60",children:"Cancel"})})]})]}),Object(r.jsx)("p",{className:"mt-16 font-semibold text-blue-600",children:"\xa9 2020 All Rights Reserved. Cookie Preferences, Privacy, and Terms."})]})})})};P.defaultProps={};var q=c.a.memo(P),k=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("p",{children:"password recovery page."})})};k.defaultProps={};var V=c.a.memo(k),F=function(){return Object(r.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{path:"/auth/login",children:Object(r.jsx)(g,{})}),Object(r.jsx)(l.b,{path:"/auth/signup",children:Object(r.jsx)(q,{})}),Object(r.jsx)(l.b,{path:"/auth/forgotpassword",children:Object(r.jsx)(V,{})})]}),Object(r.jsx)(o,{})]})};F.defaultProps={};s.default=c.a.memo(F)}}]);
//# sourceMappingURL=6.9144add8.chunk.js.map