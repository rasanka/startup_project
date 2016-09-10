angular.module('templates-app', ['about/about.tpl.html', 'account/login.tpl.html', 'account/register.tpl.html', 'home/home.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    TicketGuru.LK\n" +
    "    <small>Hassle free solution for buying tickets online.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    bla bla blaaaa...\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    bla bla blaaaa...\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    bla bla blaaaa...\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What TicketGuru.LK Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    bla bla blaaaa...\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    bla bla blaaaa...\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    bla bla blaaaa...\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    bla bla blaaaa...\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Payments</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    bla bla blaaaa...\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "   <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "   <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    bla bla blaa..\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/login.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "      Login\n" +
    "  </h1>\n" +
    "  <form ng-submit=\"login()\">\n" +
    "      <div class=\"form-group\">\n" +
    "          <label>Email:</label>\n" +
    "          <input type=\"text\" ng-model=\"user.email\" class=\"form-control\"/>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "          <label>Password:</label>\n" +
    "          <input type=\"password\" ng-model=\"user.password\" class=\"form-control\"/>\n" +
    "      </div>\n" +
    "      <button class=\"btn btn-success\" type=\"submit\">Login</button>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/register.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "      Register\n" +
    "  </h1>\n" +
    "  <form ng-submit=\"register()\">\n" +
    "      <div class=\"form-group\">\n" +
    "          <label>First Name:</label>\n" +
    "          <input type=\"text\" ng-model=\"user.firstName\" class=\"form-control\" />\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "          <label>Last Name:</label>\n" +
    "          <input type=\"text\" ng-model=\"user.lastName\" class=\"form-control\" />\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "          <label>Gennder:</label>\n" +
    "          <input type=\"text\" ng-model=\"user.gender\" class=\"form-control\" />\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "          <label>Email:</label>\n" +
    "          <input type=\"text\" ng-model=\"user.email\" class=\"form-control\" />\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "          <label>Password:</label>\n" +
    "          <input type=\"password\" ng-model=\"user.password\" class=\"form-control\" />\n" +
    "      </div>\n" +
    "      <button class=\"btn btn-success\" type=\"submit\">Register</button>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>Welcome to TicketGuru.LK</h1>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "    Hassle free solution for buying tickets online.\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"btn-group\" ng-show=\"isLoggedIn()\">\n" +
    "    <a ng-click=\"logout()\" class=\"btn btn-large btn-default\">\n" +
    "      <i class=\"fa fa-book\"></i>\n" +
    "      Logout\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"marketing\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-thumbs-up\"></i> Good to Go!</h4>\n" +
    "      <p>\n" +
    "        Kickstarts your project quickly, with everything you need, so you can \n" +
    "        focus on what matters: your app.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-magic\"></i> Complete Build System</h4>\n" +
    "      <p>\n" +
    "        A smart, <a href=\"http://gruntjs.com\">Grunt</a>-based build system \n" +
    "        designed to save you time and energy.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-retweet\"></i> Modularization</h4>\n" +
    "      <p>\n" +
    "        Supports a structure that maintains separation of concerns while\n" +
    "        ensuring maximum code reuse.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-star\"></i> AngularJS</h4>\n" +
    "      <p>\n" +
    "        JavaScript framework that augments browser-based, single-page \n" +
    "        applications with MVC functionality.\n" +
    "        <a href=\"http://angularjs.org\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-resize-small\"></i> LESS CSS</h4>\n" +
    "      <p>\n" +
    "        The dynamic stylesheet language that extends CSS with efficiency.\n" +
    "        <a href=\"http://lesscss.org\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-twitter\"></i> Twitter Bootstrap</h4>\n" +
    "      <p>\n" +
    "        Sleek, intuitive, and powerful front-end framework for faster and easier\n" +
    "        web development.\n" +
    "        <a href=\"http://getbootstrap.com\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-circle\"></i> Angular UI Bootstrap</h4>\n" +
    "      <p>\n" +
    "        Pure AngularJS components for Bootstrap written by the \n" +
    "        <a href=\"https://github.com/angular-ui?tab=members\">AngularUI Team</a>.\n" +
    "        <a href=\"http://angular-ui.github.com/bootstrap\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-flag\"></i> Font Awesome</h4>\n" +
    "      <p>\n" +
    "        The iconic font designed for use with Twitter Bootstrap.\n" +
    "        <a href=\"http://fortawesome.github.com/Font-Awesome\">\n" +
    "          More &raquo;\n" +
    "        </a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-asterisk\"></i> Placeholders</h4>\n" +
    "      <p>\n" +
    "        Client-side image and text placeholder directives written in pure \n" +
    "        AngularJS to make designing mock-ups wicked-fast.\n" +
    "        <a href=\"http://joshdmiller.github.com/angular-placeholders\">\n" +
    "          More &raquo;\n" +
    "        </a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
