webpackJsonp([2],{rkW2:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("WT6e"),t=u("B4Ot"),d=u("t9RT"),o=function(){function l(l){this.webservice=l,this.selectedItems=new Array,this.selectedItemList=[],this.hobbies={}}return l.prototype.ngOnInit=function(){this.getAllItems()},l.prototype.onCheckItems=function(l,n){console.log("item id xxxx>>>",l),this.getSelectedItemBalance(l,n.target.checked)},l.prototype.getAllItems=function(){var l=this;this.webservice.processGet(d.a.BASE_PATH+"/items").subscribe(function(n){l.itemList=n.docs,console.log("item resssss",l.itemList)},function(l){console.log("Error")})},l.prototype.selectItems=function(l){this.selectedItems.push(l)},l.prototype.getSelectedItemBalance=function(l,n){var u=this;this.webservice.processGet(d.a.BASE_PATH+"/inventory/balance/"+l._id).subscribe(function(e){if(u.itemBalance=e[0].itemQuantity,console.log("balance>>>>",u.itemBalance),n)u.selectedItemList.push({itemCode:"IT00"+l.itemCode,itemName:l.itemName,unit:l.unit,balance:u.itemBalance});else{var t=u.selectedItemList.findIndex(function(n){return n==l});u.selectedItemList.splice(t,1)}},function(l){console.log("Error")})},l.prototype.saveBalanceReport=function(){var l=this.selectedItemList,n=new jsPDF("p","pt");n.autoTable([{title:"Item Code",dataKey:"itemCode"},{title:"Item Name",dataKey:"itemName"},{title:"Unit",dataKey:"unit"},{title:"Balance",dataKey:"balance"}],l,{styles:{fillColor:[169,158,201]},margin:{top:60},headerStyles:{},addPageContent:function(l){n.text("Balance Report",40,30)}}),n.save("balance report.pdf")},l}(),i=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),r=function(){function l(l){this.webservice=l}return l.prototype.ngOnInit=function(){this.getAllRevenue()},l.prototype.getAllRevenue=function(){var l=this;this.webservice.processGet(d.a.BASE_PATH+"/billing-revenue-report/1").subscribe(function(n){l.revenueList=n,console.log("revenue resssss",l.revenueList)},function(l){console.log("Error")})},l.prototype.saveRevenueReport=function(){var l=this.revenueList,n=new jsPDF("p","pt");n.autoTable([{title:"Period",dataKey:"createdDate"},{title:"Consulting",dataKey:"consultationFee"},{title:"Pharmaceutical",dataKey:"pharmaceuticalFee"},{title:"Laboratory",dataKey:"laboratoryFee"},{title:"ECG",dataKey:"ECGFee"},{title:"CBS",dataKey:"CBSFee"},{title:"Procedures",dataKey:"procedureFee"},{title:"Others",dataKey:"otherFee"},{title:"Total",dataKey:"totalFee"}],l,{styles:{fillColor:[169,158,201]},margin:{top:60},headerStyles:{},addPageContent:function(l){n.text("Revenue Report",40,30)}}),n.save("revenue report.pdf")},l}(),a=function(){function l(l){this.webservice=l,this.dailyExpense=new Array}return l.prototype.ngOnInit=function(){this.getAllExpense()},l.prototype.getAllExpense=function(){var l=this;this.webservice.processGet(d.a.BASE_PATH+"/expense-report/1").subscribe(function(n){l.expenseList=n,console.log("expense resssss",l.expenseList),l.createExpenseArray()},function(l){console.log("Error")})},l.prototype.createExpenseArray=function(){var l=this;this.expenseList.forEach(function(n){n.expenses.forEach(function(u){l.dailyExpense=[],n._id.voucherDate==u.voucherDate&&l.dailyExpense.push(l.dailyExpense)})}),console.log("daily expense resssss",this.dailyExpense)},l}(),c=function(){},s=u("Xjw4"),p=u("ItHS"),m=e["\u0275crt"]({encapsulation:0,styles:[[".plus-btn-container[_ngcontent-%COMP%]   .plus-btn[_ngcontent-%COMP%]{cursor:pointer;width:62px;margin-left:85%}.card-list[_ngcontent-%COMP%]{cursor:pointer;border-radius:10px;height:70px;position:relative;border:1px solid #a99ec9}.card-list[_ngcontent-%COMP%]   .card-list-selected-line[_ngcontent-%COMP%]{background-color:#6129ff;width:5px;height:100%;border-radius:10px 0 0 10px}.card-list[_ngcontent-%COMP%]   .card-list-selected-line[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15px;position:absolute;top:10px;left:3px}.card-list[_ngcontent-%COMP%]   .card-list-item-name[_ngcontent-%COMP%]{position:absolute;top:11px;left:28px;font-weight:600;font-size:18px;color:#a99ec9}.card-list[_ngcontent-%COMP%]   .card-list-item-title[_ngcontent-%COMP%]{position:absolute;top:11px;left:120px;font-weight:600;font-size:16px;color:#402981}.card-list[_ngcontent-%COMP%]   .card-list-item-status[_ngcontent-%COMP%]{position:absolute;top:37px;left:121px;font-weight:600;font-size:14px;color:#a99ec9}.card-list[_ngcontent-%COMP%]   .card-list-item-delete[_ngcontent-%COMP%]{cursor:pointer;width:20px;position:absolute;top:20px;right:20px}.card-list[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{margin-left:90%;margin-top:-45px}.card-list[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{zoom:1.8}.table-box[_ngcontent-%COMP%]{width:100%;height:500px;border:1px solid #a99ec9;border-radius:10px}input[type=button][_ngcontent-%COMP%]{background-color:#fff;border:3px solid #6129ff;padding:5px 35px;border-radius:50px;color:#6129ff;font-weight:700;font-size:106px;cursor:pointer}input[_ngcontent-%COMP%]:hover[type=button]{background-color:#6129ff;-webkit-box-shadow:0 4px 9px #a07eff;box-shadow:0 4px 9px #a07eff;border:none;padding:8px 39px;border-radius:50px;color:#fff;font-weight:600;font-size:16px;cursor:pointer}.export[_ngcontent-%COMP%]{margin:3% 3% 8% 75%}.dropdown[_ngcontent-%COMP%]{margin-top:200px;margin-left:0}.pagination[_ngcontent-%COMP%]{margin-top:100px;margin-left:52%;color:#000}.card-item-details[_ngcontent-%COMP%], .card-list[_ngcontent-%COMP%]{margin-bottom:5px}"]],data:{}});function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,21,"div",[["class","card-list"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275eld"](2,0,null,null,3,"div",[["class","card-list-selected-line"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](4,0,null,null,0,"img",[["src","../../../../../assets/images/card-list/selected.svg"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n      "])),(l()(),e["\u0275eld"](7,0,null,null,2,"div",[["class","card-list-item-name"]],null,null,null,null,null)),(l()(),e["\u0275ted"](8,null,["\n        IT","\n      "])),e["\u0275ppd"](9,2),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275eld"](11,0,null,null,1,"div",[["class","card-list-item-title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,["\n        ","\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275eld"](14,0,null,null,1,"div",[["class","card-list-item-status"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        Critical\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275eld"](17,0,null,null,3,"div",[["class","checkbox"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](19,0,null,null,0,"input",[["name","list"],["type","checkbox"]],null,[[null,"change"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==l.component.onCheckItems(l.context.$implicit,u)&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n    "]))],null,function(l,n){l(n,8,0,e["\u0275unv"](n,8,0,l(n,9,0,e["\u0275nov"](n.parent,0),n.context.$implicit.itemCode,"3.0"))),l(n,12,0,n.context.$implicit.itemName)})}function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](2,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](3,null,["\n                ","\n              "])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](8,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](9,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](11,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n            "]))],null,function(l,n){l(n,3,0,n.context.$implicit.itemCode),l(n,6,0,n.context.$implicit.itemName),l(n,9,0,n.context.$implicit.unit),l(n,12,0,n.context.$implicit.balance)})}function x(l){return e["\u0275vid"](0,[e["\u0275pid"](0,s.e,[e.LOCALE_ID]),(l()(),e["\u0275ted"](-1,null,["\n\n\n\n\n\n\n"])),(l()(),e["\u0275eld"](2,0,null,null,54,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](4,0,null,null,5,"div",[["class","col-lg-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](7,802816,null,0,s.k,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275ted"](-1,null,["\n\n\n    "])),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n  "])),(l()(),e["\u0275eld"](11,0,null,null,45,"div",[["class","col-lg-7"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275eld"](13,0,null,null,42,"div",[["class","table-box"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275eld"](15,0,null,null,35,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n\n        "])),(l()(),e["\u0275eld"](18,0,null,null,4,"div",[["class","export"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](21,0,null,null,0,"input",[["class","primary-button"],["type","submit"],["value","Export"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.saveBalanceReport()&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275eld"](24,0,null,null,25,"table",[["class","table table-bordered"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](26,0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](28,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](30,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Item code"])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](33,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Item name"])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](36,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Unit"])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](39,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Balance"])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n\n          "])),(l()(),e["\u0275eld"](44,0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](47,802816,null,0,s.k,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n    "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n\n\n\n\n\n\n\n  "]))],function(l,n){var u=n.component;l(n,7,0,u.itemList),l(n,47,0,u.selectedItemList)},null)}var b=e["\u0275ccf"]("app-balance-report-view",o,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"app-balance-report-view",[],null,null,null,x,m)),e["\u0275prd"](512,null,t.a,t.a,[p.c]),e["\u0275did"](2,114688,null,0,o,[t.a],null,null)],function(l,n){l(n,2,0)},null)},{},{},[]),h=e["\u0275crt"]({encapsulation:0,styles:[[".plus-btn-container[_ngcontent-%COMP%]   .plus-btn[_ngcontent-%COMP%]{cursor:pointer;width:62px;margin-left:85%}.card-list[_ngcontent-%COMP%]{cursor:pointer;border-radius:10px;height:70px;position:relative;border:1px solid #a99ec9}.card-list[_ngcontent-%COMP%]   .card-list-selected-line[_ngcontent-%COMP%]{background-color:#6129ff;width:5px;height:100%;border-radius:10px 0 0 10px}.card-list[_ngcontent-%COMP%]   .card-list-selected-line[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15px;position:absolute;top:10px;left:3px}.card-list[_ngcontent-%COMP%]   .card-list-item-name[_ngcontent-%COMP%]{position:absolute;top:11px;left:28px;font-weight:600;font-size:18px;color:#a99ec9}.card-list[_ngcontent-%COMP%]   .card-list-item-title[_ngcontent-%COMP%]{position:absolute;top:11px;left:120px;font-weight:600;font-size:16px;color:#402981}.card-list[_ngcontent-%COMP%]   .card-list-item-status[_ngcontent-%COMP%]{position:absolute;top:37px;left:121px;font-weight:600;font-size:14px;color:#a99ec9}.card-list[_ngcontent-%COMP%]   .card-list-item-delete[_ngcontent-%COMP%]{cursor:pointer;width:20px;position:absolute;top:20px;right:20px}.card-list[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{margin-left:90%;margin-top:-60px}.card-list[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{zoom:1.8}.summary-details-button[_ngcontent-%COMP%]{margin:10px 10px 10px 350px;border-radius:20px}input[type=radio][_ngcontent-%COMP%]{border-radius:20px}.table-box[_ngcontent-%COMP%]{width:100%;height:500px;border:1px solid #a99ec9;border-radius:10px}input[type=button][_ngcontent-%COMP%]{background-color:#fff;border:3px solid #6129ff;padding:5px 35px;border-radius:50px;color:#6129ff;font-weight:700;font-size:16px;cursor:pointer}input[_ngcontent-%COMP%]:hover[type=button]{background-color:#6129ff;-webkit-box-shadow:0 4px 9px #a07eff;box-shadow:0 4px 9px #a07eff;border:none;padding:8px 39px;border-radius:50px;color:#fff;font-weight:600;font-size:16px;cursor:pointer}.export[_ngcontent-%COMP%]{margin:3% 3% 10% 75%}.dropdown-data-range[_ngcontent-%COMP%]{margin:-90px 0 10px}.pagination[_ngcontent-%COMP%]{margin-top:100px;margin-left:52%;color:#000}.card-item-details[_ngcontent-%COMP%], .card-list[_ngcontent-%COMP%]{margin-bottom:5px}"]],data:{}});function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275ted"](-1,null,["\n\n\n\n\n\n\n"])),(l()(),e["\u0275eld"](1,0,null,null,168,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n  \n    "])),(l()(),e["\u0275eld"](3,0,null,null,24,"div",[["class","col-lg-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275eld"](5,0,null,null,20,"div",[["class","card-list"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275eld"](7,0,null,null,3,"div",[["class","card-list-selected-line"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](9,0,null,null,0,"img",[["src","../../../../../assets/images/card-list/selected.svg"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n        "])),(l()(),e["\u0275eld"](12,0,null,null,1,"div",[["class","card-list-item-name"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          IT001\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275eld"](15,0,null,null,1,"div",[["class","card-list-item-title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            Item name 15mg\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275eld"](18,0,null,null,1,"div",[["class","card-list-item-status"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          Critical\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275eld"](21,0,null,null,3,"div",[["class","checkbox"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](23,0,null,null,0,"input",[["name","list"],["type","checkbox"],["value","card"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n    "])),(l()(),e["\u0275eld"](29,0,null,null,139,"div",[["class","col-lg-7"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n\n        "])),(l()(),e["\u0275eld"](31,0,null,null,14,"div",[["class","summary-details-button"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            \n            "])),(l()(),e["\u0275eld"](33,0,null,null,11,"div",[["class","btn-group btn-group-toggle"],["data-toggle","buttons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](35,0,null,null,3,"label",[["class","btn btn-primary active"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](37,0,null,null,0,"input",[["autocomplete","off"],["checked",""],["id","option1"],["name","options"],["type","radio"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Summary\n                "])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](40,0,null,null,3,"label",[["class","btn btn-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](42,0,null,null,0,"input",[["autocomplete","off"],["id","option2"],["name","options"],["type","radio"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Deatail Log\n                "])),(l()(),e["\u0275ted"](-1,null,["\n      \n              "])),(l()(),e["\u0275ted"](-1,null,["\n\n          "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n\n      "])),(l()(),e["\u0275eld"](47,0,null,null,120,"div",[["class","table-box"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n          "])),(l()(),e["\u0275eld"](49,0,null,null,113,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n              "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n\n              "])),(l()(),e["\u0275eld"](52,0,null,null,4,"div",[["class","export"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                  \n                  "])),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](55,0,null,null,0,"input",[["class","primary-button"],["type","submit"],["value","Export"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            \n                "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n\n                "])),(l()(),e["\u0275eld"](58,0,null,null,22,"div",[["class","dropdown-data-range"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](60,0,null,null,1,"button",[["class","btn btn-primary dropdown-toggle"],["data-toggle","dropdown"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                      Select data range\n                    "])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](63,0,null,null,16,"div",[["class","dropdown-menu"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                      "])),(l()(),e["\u0275eld"](65,0,null,null,1,"a",[["class","dropdown-item"],["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Last 07 days"])),(l()(),e["\u0275ted"](-1,null,["\n                      "])),(l()(),e["\u0275eld"](68,0,null,null,1,"a",[["class","dropdown-item"],["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Month to date"])),(l()(),e["\u0275ted"](-1,null,["\n                      "])),(l()(),e["\u0275eld"](71,0,null,null,1,"a",[["class","dropdown-item"],["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Year to date"])),(l()(),e["\u0275ted"](-1,null,["\n                      "])),(l()(),e["\u0275eld"](74,0,null,null,1,"a",[["class","dropdown-item"],["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["All"])),(l()(),e["\u0275ted"](-1,null,["\n                      "])),(l()(),e["\u0275eld"](77,0,null,null,1,"a",[["class","dropdown-item"],["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Custom"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n              "])),(l()(),e["\u0275eld"](82,0,null,null,79,"table",[["class","table table-bordered"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](84,0,null,null,25,"thead",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](86,0,null,null,22,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](88,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Item code"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](91,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Item name"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](94,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Unit"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](97,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["OB"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](100,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Purchase"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](103,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Issues"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](106,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Balance"])),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](111,0,null,null,49,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](113,0,null,null,22,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](115,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["IT001"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](118,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Item name 05mg"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](121,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Nos."])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](124,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["3,000"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](127,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["3,500"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](130,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["(1,500)"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](133,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["5,000"])),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](137,0,null,null,22,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](139,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["IT002"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](142,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Item name 05mg"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](145,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Units"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](148,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["1,000"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](151,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["100"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](154,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["(900)"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](157,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["200"])),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275ted"](-1,null,["\n                 \n                "])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n            "])),(l()(),e["\u0275ted"](-1,null,["\n                \n                "])),(l()(),e["\u0275ted"](-1,null,["\n            \n\n                 \n            "])),(l()(),e["\u0275ted"](-1,null,["\n                 \n                  "])),(l()(),e["\u0275ted"](-1,null,["\n      \n\n    "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n\n\n\n\n\n\n\n"])),(l()(),e["\u0275ted"](-1,null,["\n\n\n\n"]))],null,null)}var C=e["\u0275ccf"]("app-movement-report-view",i,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-movement-report-view",[],null,null,null,v,h)),e["\u0275did"](1,114688,null,0,i,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),y=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function O(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,29,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](2,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](3,null,["\n          ","\n        "])),e["\u0275ppd"](4,1),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](6,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](10,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](12,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](13,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](15,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](16,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](18,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](19,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](21,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](22,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](24,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](25,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](27,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](28,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n      "]))],null,function(l,n){l(n,3,0,e["\u0275unv"](n,3,0,l(n,4,0,e["\u0275nov"](n.parent,0),n.context.$implicit.createdDate))),l(n,7,0,n.context.$implicit.consultationFee),l(n,10,0,n.context.$implicit.pharmaceuticalFee),l(n,13,0,n.context.$implicit.laboratoryFee),l(n,16,0,n.context.$implicit.ECGFee),l(n,19,0,n.context.$implicit.CBSFee),l(n,22,0,n.context.$implicit.procedureFee),l(n,25,0,n.context.$implicit.otherFee),l(n,28,0,n.context.$implicit.totalFee)})}function P(l){return e["\u0275vid"](0,[e["\u0275pid"](0,s.d,[e.LOCALE_ID]),(l()(),e["\u0275eld"](1,0,null,null,48,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n\n  "])),(l()(),e["\u0275eld"](3,0,null,null,3,"div",[["class","export"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275eld"](5,0,null,null,0,"input",[["class","primary-button"],["type","submit"],["value","Export"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.saveRevenueReport()&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](8,0,null,null,40,"table",[["class","table table-bordered"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](10,0,null,null,31,"thead",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](12,0,null,null,28,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](14,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Period"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Consulting"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](20,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Pharmaceutical"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](23,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Laboratory"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](26,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["ECG"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](29,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["CBS"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](32,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Procedures"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](35,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Others"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](38,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Total"])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275eld"](43,0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275and"](16777216,null,null,1,null,O)),e["\u0275did"](46,802816,null,0,s.k,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n"]))],function(l,n){l(n,46,0,n.component.revenueList)},null)}var _=e["\u0275ccf"]("app-revenue-report",r,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"app-revenue-report",[],null,null,null,P,y)),e["\u0275prd"](512,null,t.a,t.a,[p.c]),e["\u0275did"](2,114688,null,0,r,[t.a],null,null)],function(l,n){l(n,2,0)},null)},{},{},[]),w=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,32,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](2,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](3,null,["\n          ","\n        "])),e["\u0275ppd"](4,1),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](6,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](10,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](12,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](13,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](15,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](16,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](18,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](19,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](21,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](22,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](24,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](25,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](27,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](28,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](30,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](31,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n      "]))],null,function(l,n){l(n,3,0,e["\u0275unv"](n,3,0,l(n,4,0,e["\u0275nov"](n.parent,0),n.context.$implicit.createdDate))),l(n,7,0,n.context.$implicit.consultationFee),l(n,10,0,n.context.$implicit.pharmaceuticalFee),l(n,13,0,n.context.$implicit.laboratoryFee),l(n,16,0,n.context.$implicit.ECGFee),l(n,19,0,n.context.$implicit.CBSFee),l(n,22,0,n.context.$implicit.procedureFee),l(n,25,0,n.context.$implicit.otherFee),l(n,28,0,n.context.$implicit.otherFee),l(n,31,0,n.context.$implicit.totalFee)})}function I(l){return e["\u0275vid"](0,[e["\u0275pid"](0,s.d,[e.LOCALE_ID]),(l()(),e["\u0275eld"](1,0,null,null,51,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](3,0,null,null,3,"div",[["class","export"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275eld"](5,0,null,null,0,"input",[["class","primary-button"],["type","submit"],["value","Export"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](8,0,null,null,43,"table",[["class","table table-bordered"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](10,0,null,null,34,"thead",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](12,0,null,null,31,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](14,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Period"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Drugs"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](20,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Salaries"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](23,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Tea Club"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](26,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Stationary"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](29,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Utility Bills"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](32,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Repairs"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](35,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Capex"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](38,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Others"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](41,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Total"])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275eld"](46,0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275and"](16777216,null,null,1,null,M)),e["\u0275did"](49,802816,null,0,s.k,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n"]))],function(l,n){l(n,49,0,n.component.expenseList)},null)}var F=e["\u0275ccf"]("app-expense-report-view",a,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"app-expense-report-view",[],null,null,null,I,w)),e["\u0275prd"](512,null,t.a,t.a,[p.c]),e["\u0275did"](2,114688,null,0,a,[t.a],null,null)],function(l,n){l(n,2,0)},null)},{},{},[]),E=u("7DMc"),k=u("bfOx");u.d(n,"ReportModuleNgFactory",function(){return L});var L=e["\u0275cmf"](c,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[b,C,_,F]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,s.n,s.m,[e.LOCALE_ID,[2,s.t]]),e["\u0275mpd"](4608,E.w,E.w,[]),e["\u0275mpd"](4608,E.e,E.e,[]),e["\u0275mpd"](512,s.b,s.b,[]),e["\u0275mpd"](512,E.t,E.t,[]),e["\u0275mpd"](512,E.h,E.h,[]),e["\u0275mpd"](512,E.q,E.q,[]),e["\u0275mpd"](512,k.o,k.o,[[2,k.t],[2,k.k]]),e["\u0275mpd"](512,c,c,[]),e["\u0275mpd"](1024,k.i,function(){return[[{path:"balance",component:o},{path:"movement",component:i},{path:"revenue",component:r},{path:"expense",component:a}]]},[])])})}});