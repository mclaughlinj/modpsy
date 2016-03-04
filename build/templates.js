var Handlebars = require("handlebars");
 exports["views"] = exports["views"] || {};
exports["views"]["partials"] = exports["views"]["partials"] || {};
exports["views"]["partials"]["pageFooter"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"page__footer__byline\">\n  ModPsy WebWorks Limited\n</div>\n\n<p class=\"page__footer__p\">\n  Registered in England & Wales<br />\n  Company Number 08786639<br />\n  VAT No. 177 8452 62\n</p>\n  Contact: <a href=\"mailto:queries@modpsy.co.uk\" class=\"page__footer__a\">queries@modpsy.co.uk</a>\n";
  },"useData":true});
exports["views"]["partials"]["pageHead"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<head>\n  <title>"
    + escapeExpression(((helper = (helper = helpers.pageTitle || (depth0 != null ? depth0.pageTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageTitle","hash":{},"data":data}) : helper)))
    + "</title>\n  <link href=\"/css/main.css\" rel=\"stylesheet\" media=\"screen\" />\n  <script language=\"JavaScript\" type=\"text/javascript\" src=\"/js/ie_html5_elements.js\"></script>\n	<script language=\"JavaScript\" type=\"text/javascript\" src=\"/js/jquery.min.js\"></script>\n	<script language=\"JavaScript\" type=\"text/javascript\" src=\"/js/modpsy.js\"></script>\n  <script language=\"JavaScript\" type=\"text/javascript\" src=\"/js/retina.min.js\"></script>\n  <script language=\"JavaScript\" type=\"text/javascript\" src=\"/js/jquery.mobile.custom.min.js\"></script>\n</head>\n";
},"useData":true});
exports["views"]["partials"]["pageHeader"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1 title=\"ModPsy\" class=\"page__header__h1\">\n  <a href=\"/\" class=\"page__header__a\"><img src=\"/img/modpsy_logo.png\" class=\"page__header__img\"></a>\n</h1>\n";
  },"useData":true});
exports["views"]["partials"]["pageNav"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<ul class=\"page__nav__ul\">\n  <li class=\"page__nav__li\"><a href=\"/\" class=\"page__nav__about__a\">about</a></li>\n  <li class=\"page__nav__li\"><a href=\"/portfolio/\" class=\"page__nav__portfolio__a\">portfolio</a></li>\n  <!-- <li class=\"page__nav__li\"><a href=\"/content/\" class=\"page__nav__content__a\">web&nbsp;content</a></li>\n  <li class=\"page__nav__li\"><a href=\"/design/\" class=\"page__nav__design__a\">web&nbsp;design</a></li>\n  <li class=\"page__nav__li\"><a href=\"/development/\" class=\"page__nav__development__a\">web&nbsp;development</a></li>\n  <li class=\"page__nav__li\"><a href=\"/faq/\" class=\"page__nav__faq__a\">faq</a></li> -->\n</ul>\n<div class=\"page__nav__reveal__div\"></div>\n";
  },"useData":true});
exports["views"]["partials"]["partialTest"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<p>echo: "
    + escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"useData":true});