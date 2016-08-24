var require = meteorInstall({"client":{"Pages":{"About":{"About.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Pages/About/About.jsx                                                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                                                   //
                                                                                                                   //
                                                                                                                   // 1
                                                                                                                   //
var About = function (_Component) {                                                                                //
  _inherits(About, _Component);                                                                                    //
                                                                                                                   //
  function About() {                                                                                               //
    _classCallCheck(this, About);                                                                                  //
                                                                                                                   //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                    //
  }                                                                                                                //
                                                                                                                   //
  About.prototype.render = function () {                                                                           //
    function render() {                                                                                            //
      return React.createElement(                                                                                  // 5
        'h1',                                                                                                      // 6
        null,                                                                                                      // 6
        'About page'                                                                                               // 6
      );                                                                                                           // 6
    }                                                                                                              // 8
                                                                                                                   //
    return render;                                                                                                 //
  }();                                                                                                             //
                                                                                                                   //
  return About;                                                                                                    //
}(Component);                                                                                                      //
                                                                                                                   //
module.export("default",exports.default=(About));                                                                  //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"Abstracts":{"Abstracts.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Pages/Abstracts/Abstracts.jsx                                                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                                                   //
                                                                                                                   //
                                                                                                                   // 1
                                                                                                                   //
var Abstracts = function (_Component) {                                                                            //
  _inherits(Abstracts, _Component);                                                                                //
                                                                                                                   //
  function Abstracts() {                                                                                           //
    _classCallCheck(this, Abstracts);                                                                              //
                                                                                                                   //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                    //
  }                                                                                                                //
                                                                                                                   //
  Abstracts.prototype.render = function () {                                                                       //
    function render() {                                                                                            //
      return React.createElement(                                                                                  // 5
        'h1',                                                                                                      // 6
        null,                                                                                                      // 6
        'Abstracts page'                                                                                           // 6
      );                                                                                                           // 6
    }                                                                                                              // 8
                                                                                                                   //
    return render;                                                                                                 //
  }();                                                                                                             //
                                                                                                                   //
  return Abstracts;                                                                                                //
}(Component);                                                                                                      //
                                                                                                                   //
module.export("default",exports.default=(Abstracts));                                                              //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"HomePage":{"HomePage.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/ultimatejs:tracker-react",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Pages/HomePage/HomePage.jsx                                                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React;module.import('react',{"default":function(v){React=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var TrackerReact;module.import('meteor/ultimatejs:tracker-react',{"default":function(v){TrackerReact=v}});
                                                                                                                   //
                                                                                                                   //
                                                                                                                   // 1
                                                                                                                   // 2
                                                                                                                   // 3
                                                                                                                   //
var HomePage = function (_TrackerReact) {                                                                          //
  _inherits(HomePage, _TrackerReact);                                                                              //
                                                                                                                   //
  function HomePage() {                                                                                            //
    _classCallCheck(this, HomePage);                                                                               //
                                                                                                                   //
    return _possibleConstructorReturn(this, _TrackerReact.apply(this, arguments));                                 //
  }                                                                                                                //
                                                                                                                   //
  HomePage.prototype.render = function () {                                                                        //
    function render() {                                                                                            //
      console.log('HomePage');                                                                                     // 7
      return React.createElement(                                                                                  // 8
        'h1',                                                                                                      // 9
        null,                                                                                                      // 9
        ' Hello'                                                                                                   // 9
      );                                                                                                           // 9
    }                                                                                                              // 11
                                                                                                                   //
    return render;                                                                                                 //
  }();                                                                                                             //
                                                                                                                   //
  return HomePage;                                                                                                 //
}(TrackerReact(React.Component));                                                                                  //
                                                                                                                   //
module.export("default",exports.default=(HomePage));                                                               //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"Program":{"Program.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Pages/Program/Program.jsx                                                                                //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                                                   //
                                                                                                                   //
                                                                                                                   // 1
                                                                                                                   //
var Program = function (_Component) {                                                                              //
  _inherits(Program, _Component);                                                                                  //
                                                                                                                   //
  function Program() {                                                                                             //
    _classCallCheck(this, Program);                                                                                //
                                                                                                                   //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                    //
  }                                                                                                                //
                                                                                                                   //
  Program.prototype.render = function () {                                                                         //
    function render() {                                                                                            //
      return React.createElement(                                                                                  // 5
        'h1',                                                                                                      // 6
        null,                                                                                                      // 6
        'Program page'                                                                                             // 6
      );                                                                                                           // 6
    }                                                                                                              // 8
                                                                                                                   //
    return render;                                                                                                 //
  }();                                                                                                             //
                                                                                                                   //
  return Program;                                                                                                  //
}(Component);                                                                                                      //
                                                                                                                   //
module.export("default",exports.default=(Program));                                                                //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"Registration":{"Registration.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Pages/Registration/Registration.jsx                                                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                                                   //
                                                                                                                   //
                                                                                                                   // 1
//                                                                                                                 //
Participants = new Mongo.Collection("participants");                                                               // 3
// Test = new Mongo.Collection ("test");                                                                           //
                                                                                                                   //
var Registration = function (_Component) {                                                                         //
  _inherits(Registration, _Component);                                                                             //
                                                                                                                   //
  function Registration() {                                                                                        // 7
    _classCallCheck(this, Registration);                                                                           // 7
                                                                                                                   //
    var _this = _possibleConstructorReturn(this, _Component.call(this));                                           // 7
                                                                                                                   //
    _this.state = {                                                                                                // 9
      subscription: {                                                                                              // 10
        participants: Meteor.subscribe('allAbstracts')                                                             // 11
      }                                                                                                            // 10
    };                                                                                                             // 9
    return _this;                                                                                                  // 7
  }                                                                                                                // 14
                                                                                                                   //
  Registration.prototype.participants = function () {                                                              //
    function participants() {                                                                                      //
      // console.log(Participants.find().fetch());                                                                 //
      console.log('test');                                                                                         // 18
      // console.log(Participants.find());                                                                         //
      return Participants.find().fetch();                                                                          // 20
    }                                                                                                              // 21
                                                                                                                   //
    return participants;                                                                                           //
  }();                                                                                                             //
                                                                                                                   //
  Registration.prototype.componentWillMount = function () {                                                        //
    function componentWillMount() {                                                                                //
      console.log('this is willMount');                                                                            // 24
      console.log('Meteor user', Meteor.user());                                                                   // 25
      console.log('Participants', this.participants());                                                            // 26
      this.state = {                                                                                               // 27
        currentUser: Meteor.user()                                                                                 // 28
      };                                                                                                           // 27
      console.log('this state currentUser', this.state.currentUser);                                               // 30
    }                                                                                                              // 31
                                                                                                                   //
    return componentWillMount;                                                                                     //
  }();                                                                                                             //
                                                                                                                   //
  Registration.prototype.componentWillUnmount = function () {                                                      //
    function componentWillUnmount() {                                                                              //
      this.state.subscription.userEmail.stop();                                                                    // 33
    }                                                                                                              // 34
                                                                                                                   //
    return componentWillUnmount;                                                                                   //
  }();                                                                                                             //
                                                                                                                   //
  Registration.prototype.addAbstract = function () {                                                               //
    function addAbstract(event) {                                                                                  //
      event.preventDefault();                                                                                      // 38
                                                                                                                   //
      var participant = {                                                                                          // 40
        title: this.refs.title.value,                                                                              // 41
        authors: this.refs.authors.value,                                                                          // 42
        section: this.refs.section.value,                                                                          // 43
        abstract: this.refs.abstract.value,                                                                        // 44
        organization: this.refs.organization.value                                                                 // 45
      };                                                                                                           // 40
      // console.log (participant);                                                                                //
      // console.log(Meteor.userId());                                                                             //
      // console.log (Meteor.user().emails[0].address);                                                            //
      // Participants.insert(participant);                                                                         //
      Meteor.call('addParticipant', participant);                                                                  // 51
    }                                                                                                              // 52
                                                                                                                   //
    return addAbstract;                                                                                            //
  }();                                                                                                             //
                                                                                                                   //
  Registration.prototype.render = function () {                                                                    //
    function render() {                                                                                            //
      var styles = {                                                                                               // 56
        maxWidth: '90%',                                                                                           // 57
        margin: '0 auto'                                                                                           // 58
      };                                                                                                           // 56
                                                                                                                   //
      // console.log (this.state.currentUser);                                                                     //
      // console.log(this.participants());                                                                         //
      return React.createElement(                                                                                  // 63
        'div',                                                                                                     // 64
        null,                                                                                                      // 64
        React.createElement(                                                                                       // 65
          'div',                                                                                                   // 65
          { className: 'grid-block' },                                                                             // 65
          React.createElement(                                                                                     // 66
            'div',                                                                                                 // 66
            { className: 'grid-container', style: styles },                                                        // 66
            React.createElement(                                                                                   // 67
              'h1',                                                                                                // 67
              null,                                                                                                // 67
              'Registration page'                                                                                  // 67
            ),                                                                                                     // 67
            React.createElement(                                                                                   // 68
              'p',                                                                                                 // 68
              null,                                                                                                // 68
              'Please fill the registration form'                                                                  // 68
            ),                                                                                                     // 68
            React.createElement(                                                                                   // 71
              'form',                                                                                              // 71
              { onSubmit: this.addAbstract.bind(this) },                                                           // 71
              React.createElement(                                                                                 // 72
                'label',                                                                                           // 72
                null,                                                                                              // 72
                ' Abstract title',                                                                                 // 72
                React.createElement('input', { ref: 'title', type: 'text', placeholder: '.medium-6.columns' })     // 73
              ),                                                                                                   // 72
              React.createElement(                                                                                 // 75
                'label',                                                                                           // 75
                null,                                                                                              // 75
                ' Authors',                                                                                        // 75
                React.createElement('input', { ref: 'authors', type: 'text', placeholder: '.medium-6.columns' })   // 76
              ),                                                                                                   // 75
              React.createElement(                                                                                 // 78
                'label',                                                                                           // 78
                null,                                                                                              // 78
                ' Organization',                                                                                   // 78
                React.createElement('input', { ref: 'organization', type: 'text', placeholder: 'Organization' })   // 79
              ),                                                                                                   // 78
              React.createElement(                                                                                 // 81
                'label',                                                                                           // 81
                null,                                                                                              // 81
                ' Select section',                                                                                 // 81
                React.createElement(                                                                               // 82
                  'select',                                                                                        // 82
                  { ref: 'section' },                                                                              // 82
                  React.createElement('option', { value: '' }),                                                    // 83
                  React.createElement(                                                                             // 84
                    'option',                                                                                      // 84
                    { value: 'biology' },                                                                          // 84
                    'Biology'                                                                                      // 84
                  ),                                                                                               // 84
                  React.createElement(                                                                             // 85
                    'option',                                                                                      // 85
                    { value: 'physics' },                                                                          // 85
                    'Physics'                                                                                      // 85
                  ),                                                                                               // 85
                  React.createElement(                                                                             // 86
                    'option',                                                                                      // 86
                    { value: 'chemistry' },                                                                        // 86
                    'Chemistry'                                                                                    // 86
                  )                                                                                                // 86
                )                                                                                                  // 82
              ),                                                                                                   // 81
              React.createElement(                                                                                 // 89
                'label',                                                                                           // 89
                null,                                                                                              // 89
                ' Abstract',                                                                                       // 89
                React.createElement('textarea', { ref: 'abstract', placeholder: 'None', rows: '10', cols: '45' })  // 90
              ),                                                                                                   // 89
              React.createElement('input', { className: 'success button', type: 'submit', placeholder: 'submit' })
            )                                                                                                      // 71
          )                                                                                                        // 66
        )                                                                                                          // 65
      );                                                                                                           // 64
    }                                                                                                              // 99
                                                                                                                   //
    return render;                                                                                                 //
  }();                                                                                                             //
                                                                                                                   //
  return Registration;                                                                                             //
}(Component);                                                                                                      //
                                                                                                                   //
module.export("default",exports.default=(Registration));                                                           //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"Layouts":{"AccountsUI.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Layouts/AccountsUI.jsx                                                                                   //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});
                                                                                                                   //
                                                                                                                   //
                                                                                                                   // 1
                                                                                                                   // 2
                                                                                                                   //
var AccountsUI = function (_Component) {                                                                           //
  _inherits(AccountsUI, _Component);                                                                               //
                                                                                                                   //
  function AccountsUI() {                                                                                          //
    _classCallCheck(this, AccountsUI);                                                                             //
                                                                                                                   //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                    //
  }                                                                                                                //
                                                                                                                   //
  AccountsUI.prototype.componentDidMount = function () {                                                           //
    function componentDidMount() {                                                                                 //
      this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));                  // 7
    }                                                                                                              // 9
                                                                                                                   //
    return componentDidMount;                                                                                      //
  }();                                                                                                             //
                                                                                                                   //
  AccountsUI.prototype.componentWillUnmount = function () {                                                        //
    function componentWillUnmount() {                                                                              //
      Blaze.remove(this.view);                                                                                     // 12
    }                                                                                                              // 13
                                                                                                                   //
    return componentWillUnmount;                                                                                   //
  }();                                                                                                             //
                                                                                                                   //
  AccountsUI.prototype.render = function () {                                                                      //
    function render() {                                                                                            //
      return React.createElement('span', { ref: 'container' });                                                    // 16
    }                                                                                                              // 17
                                                                                                                   //
    return render;                                                                                                 //
  }();                                                                                                             //
                                                                                                                   //
  return AccountsUI;                                                                                               //
}(Component);                                                                                                      //
                                                                                                                   //
module.export("default",exports.default=(AccountsUI));                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MainLayout.jsx":["react","./Navigation.jsx",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Layouts/MainLayout.jsx                                                                                   //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({MainLayout:function(){return MainLayout}});var React;module.import('react',{"default":function(v){React=v}});var Navigation;module.import('./Navigation.jsx',{"default":function(v){Navigation=v}});
                                                                                                                   // 2
                                                                                                                   //
var MainLayout = function MainLayout(_ref) {                                                                       // 4
  var content = _ref.content;                                                                                      // 4
  return React.createElement(                                                                                      // 4
    'div',                                                                                                         // 5
    null,                                                                                                          // 5
    React.createElement(                                                                                           // 6
      'header',                                                                                                    // 6
      { className: 'header' },                                                                                     // 6
      React.createElement(                                                                                         // 7
        'h1',                                                                                                      // 7
        { className: 'main-header' },                                                                              // 7
        'Do It Now!'                                                                                               // 7
      ),                                                                                                           // 7
      React.createElement(Navigation, null)                                                                        // 8
    ),                                                                                                             // 6
    React.createElement(                                                                                           // 11
      'main',                                                                                                      // 11
      null,                                                                                                        // 11
      content                                                                                                      // 12
    )                                                                                                              // 11
  );                                                                                                               // 5
};                                                                                                                 // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Navigation.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","./AccountsUI.jsx",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Layouts/Navigation.jsx                                                                                   //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var AccountsUI;module.import('./AccountsUI.jsx',{"default":function(v){AccountsUI=v}});
                                                                                                                   //
                                                                                                                   //
                                                                                                                   // 1
                                                                                                                   // 2
                                                                                                                   // 3
                                                                                                                   //
var Navigation = function (_Component) {                                                                           //
  _inherits(Navigation, _Component);                                                                               //
                                                                                                                   //
  function Navigation() {                                                                                          //
    _classCallCheck(this, Navigation);                                                                             //
                                                                                                                   //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                    //
  }                                                                                                                //
                                                                                                                   //
  Navigation.prototype.componentDidMount = function () {                                                           //
    function componentDidMount() {}                                                                                //
                                                                                                                   //
    return componentDidMount;                                                                                      //
  }();                                                                                                             //
                                                                                                                   //
  Navigation.prototype.checkCurrentPage = function () {                                                            //
    function checkCurrentPage(page) {                                                                              //
      return Session.get('currentPage') === page ? true : false;                                                   // 10
    }                                                                                                              // 11
                                                                                                                   //
    return checkCurrentPage;                                                                                       //
  }();                                                                                                             //
                                                                                                                   //
  Navigation.prototype.componentWillUnmount = function () {                                                        //
    function componentWillUnmount() {                                                                              //
      Blaze.remove(this.view);                                                                                     // 15
    }                                                                                                              // 16
                                                                                                                   //
    return componentWillUnmount;                                                                                   //
  }();                                                                                                             //
                                                                                                                   //
  Navigation.prototype.render = function () {                                                                      //
    function render() {                                                                                            //
      return React.createElement(                                                                                  // 19
        'ul',                                                                                                      // 20
        { className: 'header-subnav' },                                                                            // 20
        React.createElement(                                                                                       // 21
          'li',                                                                                                    // 21
          null,                                                                                                    // 21
          React.createElement(                                                                                     // 22
            'a',                                                                                                   // 22
            { href: '/', className: this.checkCurrentPage('HomePage') ? 'is-active' : '' },                        // 22
            'Home'                                                                                                 // 22
          )                                                                                                        // 22
        ),                                                                                                         // 21
        React.createElement(                                                                                       // 24
          'li',                                                                                                    // 24
          null,                                                                                                    // 24
          React.createElement(                                                                                     // 25
            'a',                                                                                                   // 25
            { href: '/Registration', className: this.checkCurrentPage('Registration') ? 'is-active' : '' },        // 25
            ' Registration '                                                                                       // 25
          )                                                                                                        // 25
        ),                                                                                                         // 24
        React.createElement(                                                                                       // 27
          'li',                                                                                                    // 27
          null,                                                                                                    // 27
          React.createElement(                                                                                     // 28
            'a',                                                                                                   // 28
            { href: '/Abstracts', className: this.checkCurrentPage('Abstracts') ? 'is-active' : '' },              // 28
            'Abstracts'                                                                                            // 28
          )                                                                                                        // 28
        ),                                                                                                         // 27
        React.createElement(                                                                                       // 30
          'li',                                                                                                    // 30
          null,                                                                                                    // 30
          React.createElement(                                                                                     // 31
            'a',                                                                                                   // 31
            { href: '/Program', className: this.checkCurrentPage('Program') ? 'is-active' : '' },                  // 31
            'Program'                                                                                              // 31
          )                                                                                                        // 31
        ),                                                                                                         // 30
        React.createElement(                                                                                       // 33
          'li',                                                                                                    // 33
          null,                                                                                                    // 33
          React.createElement(                                                                                     // 34
            'a',                                                                                                   // 34
            { href: '/About', className: this.checkCurrentPage('About') ? 'is-active' : '' },                      // 34
            'About'                                                                                                // 34
          )                                                                                                        // 34
        ),                                                                                                         // 33
        React.createElement(                                                                                       // 36
          'li',                                                                                                    // 36
          null,                                                                                                    // 36
          React.createElement(AccountsUI, null)                                                                    // 37
        )                                                                                                          // 36
      );                                                                                                           // 20
    }                                                                                                              // 41
                                                                                                                   //
    return render;                                                                                                 //
  }();                                                                                                             //
                                                                                                                   //
  return Navigation;                                                                                               //
}(Component);                                                                                                      //
                                                                                                                   //
module.export("default",exports.default=(Navigation));                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"Routs.jsx":["react","react-mounter","./Layouts/MainLayout.jsx","./Pages/HomePage/HomePage.jsx","./Pages/About/About.jsx","./Pages/Abstracts/Abstracts.jsx","./Pages/Registration/Registration.jsx","./Pages/Program/Program.jsx",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Routs.jsx                                                                                                //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var React;module.import('react',{"default":function(v){React=v}});var mount;module.import('react-mounter',{"mount":function(v){mount=v}});var MainLayout;module.import('./Layouts/MainLayout.jsx',{"MainLayout":function(v){MainLayout=v}});var HomePage;module.import('./Pages/HomePage/HomePage.jsx',{"default":function(v){HomePage=v}});var About;module.import('./Pages/About/About.jsx',{"default":function(v){About=v}});var Abstracts;module.import('./Pages/Abstracts/Abstracts.jsx',{"default":function(v){Abstracts=v}});var Registration;module.import('./Pages/Registration/Registration.jsx',{"default":function(v){Registration=v}});var Program;module.import('./Pages/Program/Program.jsx',{"default":function(v){Program=v}});
                                                                                                                   // 2
                                                                                                                   //
                                                                                                                   // 4
                                                                                                                   // 5
                                                                                                                   // 6
                                                                                                                   // 7
                                                                                                                   // 8
                                                                                                                   // 9
                                                                                                                   //
Session.set('currentPage', 'HomePage');                                                                            // 11
                                                                                                                   //
FlowRouter.route('/', {                                                                                            // 13
  action: function () {                                                                                            // 14
    function action() {                                                                                            // 13
      Session.set('currentPage', 'HomePage');                                                                      // 15
      mount(MainLayout, {                                                                                          // 16
        content: React.createElement(HomePage, { test: "is-active" })                                              // 17
      });                                                                                                          // 16
    }                                                                                                              // 19
                                                                                                                   //
    return action;                                                                                                 // 13
  }()                                                                                                              // 13
});                                                                                                                // 13
                                                                                                                   //
FlowRouter.route('/Registration', {                                                                                // 22
  action: function () {                                                                                            // 23
    function action() {                                                                                            // 22
      Session.set('currentPage', 'Registration');                                                                  // 24
      mount(MainLayout, {                                                                                          // 25
        content: React.createElement(Registration, { currentPage: "Registration" })                                // 26
      });                                                                                                          // 25
    }                                                                                                              // 28
                                                                                                                   //
    return action;                                                                                                 // 22
  }()                                                                                                              // 22
});                                                                                                                // 22
                                                                                                                   //
FlowRouter.route('/Abstracts', {                                                                                   // 31
  action: function () {                                                                                            // 32
    function action() {                                                                                            // 31
      Session.set('currentPage', 'Abstracts');                                                                     // 33
      mount(MainLayout, {                                                                                          // 34
        content: React.createElement(Abstracts, null)                                                              // 35
      });                                                                                                          // 34
    }                                                                                                              // 37
                                                                                                                   //
    return action;                                                                                                 // 31
  }()                                                                                                              // 31
});                                                                                                                // 31
                                                                                                                   //
FlowRouter.route('/Program', {                                                                                     // 40
  action: function () {                                                                                            // 41
    function action() {                                                                                            // 40
      Session.set('currentPage', 'Program');                                                                       // 42
      mount(MainLayout, {                                                                                          // 43
        content: React.createElement(Program, null)                                                                // 44
      });                                                                                                          // 43
    }                                                                                                              // 46
                                                                                                                   //
    return action;                                                                                                 // 40
  }()                                                                                                              // 40
});                                                                                                                // 40
                                                                                                                   //
FlowRouter.route('/About', {                                                                                       // 49
  action: function () {                                                                                            // 50
    function action() {                                                                                            // 49
      Session.set('currentPage', 'About');                                                                         // 51
      mount(MainLayout, {                                                                                          // 52
        content: React.createElement(About, null)                                                                  // 53
      });                                                                                                          // 52
    }                                                                                                              // 55
                                                                                                                   //
    return action;                                                                                                 // 49
  }()                                                                                                              // 49
});                                                                                                                // 49
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".jsx",".scss",".css"]});
require("./client/Pages/About/About.jsx");
require("./client/Pages/Abstracts/Abstracts.jsx");
require("./client/Pages/HomePage/HomePage.jsx");
require("./client/Pages/Program/Program.jsx");
require("./client/Pages/Registration/Registration.jsx");
require("./client/Layouts/AccountsUI.jsx");
require("./client/Layouts/MainLayout.jsx");
require("./client/Layouts/Navigation.jsx");
require("./client/Routs.jsx");