$(document).ready(function(){
  $(function(){
          $("#elastic_grid_demo").elastic_grid({
              'showAllText' : 'All',
              'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
              'hoverDirection': true,
              'hoverDelay': 0,
              'hoverInverse': false,
              'expandingSpeed': 500,
              'expandingHeight': 500,
              'items' :
              [
                  {
                      'title'         : 'STUDENT DATABASE MANAGEMENT APP - ANGULARJS',
                      'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                      'thumbnail'     : ['/../images/school angular/1.png', '/../images/school angular/2.png', '/../images/school angular/3.png', '/../images/school angular/4.png', '/../images/school angular/5.png'],
                      'large'         : ['/../images/school angular/1.png', '/../images/school angular/2.png', '/../images/school angular/3.png', '/../images/school angular/4.png', '/../images/school angular/5.png'],
                      'button_list'   :
                      [
                          { 'title':'Demo', 'url' : 'http://aaqib29292.github.io/school_database_angular/', 'new_window' : true },
                          { 'title':'Code', 'url':'https://github.com/aaqib29292/school_database_angular', 'new_window' : false}
                      ],
                      'tags'          : ['HTML', 'Yeamon Generator', 'Bootstrap', 'AngularJS']
                  },
                  {
                      'title'         : 'STUDENT DATABASE MANAGEMENT APP - IONIC',
                      'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                      'thumbnail'     : ['/../images/school ionic/1.png', '/../images/school ionic/2.png', '/../images/school ionic/3.png','/../images/school ionic/4.png', '/../images/school ionic/5.png', '/../images/school ionic/6.png', '/../images/school ionic/7.png'],
                      'large'         : ['/../images/school ionic/1.png', '/../images/school ionic/2.png', '/../images/school ionic/3.png', '/../images/school ionic/4.png', '/../images/school ionic/5.png',  '/../images/school ionic/6.png', '/../images/school ionic/7.png'],
                      'button_list'   :
                      [
                          { 'title':'Demo', 'url' : 'https://school-db-ionic.herokuapp.com/', 'new_window' : true },
                          { 'title':'Code', 'url':'https://github.com/aaqib29292/School_Database_Ionic', 'new_window' : true}
                      ],
                      'tags'          : ['HTML', 'AngularJS', 'Ionic']
                  },
                  {
                      'title'         : 'STUDENT DATABASE MANAGEMENT APP - RUBY ON RAILS',
                      'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                      'thumbnail'     : ['/../images/school rails/1.png', '/../images/school rails/2.png', '/../images/school rails/3.png','/../images/school rails/4.png', '/../images/school rails/5.png'],
                      'large'         : ['/../images/school rails/1.png', '/../images/school rails/2.png', '/../images/school rails/3.png', '/../images/school rails/4.png', '/../images/school rails/5.png'],
                      'button_list'   :
                      [
                          { 'title':'Demo', 'url' : 'https://school-db-rails.herokuapp.com/', 'new_window' : true },
                          { 'title':'Code', 'url':'https://github.com/aaqib29292/School_database_rails', 'new_window' : true}
                      ],
                      'tags'          : ['HTML', 'Bootstrap', 'Ruby on Rails', 'JavaScript/jQuery']
                  },
                  {
                      'title'         : 'SELLER STORE APP - RUBY ON RAILS',
                      'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                      'thumbnail'     : ['/../images/seller store/1.png', '/../images/seller store/2.png', '/../images/seller store/3.png','/../images/seller store/4.png', '/../images/seller store/5.png'],
                      'large'         : ['/../images/seller store/1.png', '/../images/seller store/2.png', '/../images/seller store/3.png', '/../images/seller store/4.png', '/../images/seller store/5.png'],
                      'button_list'   :
                      [
                          { 'title':'Demo', 'url' : 'https://seller-store.herokuapp.com/', 'new_window' : true },
                          { 'title':'Code', 'url':'https://github.com/aaqib29292/seller_store', 'new_window' : true}
                      ],
                      'tags'          : ['HTML', 'Bootstrap', 'Bootswatch', 'Ruby on Rails', 'JavaScript/jQuery']
                  },
                  {
                      'title'         : 'CALCULATOR APP - JAVASCRIPT/JQUERY',
                      'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                      'thumbnail'     : ['/../images/Calc/1.png'],
                      'large'         : ['/../images/Calc/1.png'],
                      'button_list'   :
                      [
                          { 'title':'Demo', 'url' : 'http://aaqib29292.github.io/calculator/', 'new_window' : true },
                          { 'title':'Code', 'url':'https://github.com/aaqib29292/calculator', 'new_window' : true}
                      ],
                      'tags'          : ['HTML', 'CSS', 'Bootstrap', 'JavaScript/jQuery']
                  },
                  {
                      'title'         : 'FOOD ASTRA - STATIC WEBSITE',
                      'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                      'thumbnail'     : ['/../images/restaurant/1.png', '/../images/restaurant/2.png', '/../images/restaurant/2-1.png','/../images/restaurant/2-1-1.png', '/../images/restaurant/2-2.png', '/../images/restaurant/2-2-1.png', '/../images/restaurant/2-3.png', '/../images/restaurant/2-3-1.png','/../images/restaurant/3.png', '/../images/restaurant/4.png'],
                      'large'         : ['/../images/restaurant/1.png', '/../images/restaurant/2.png', '/../images/restaurant/2-1.png','/../images/restaurant/2-1-1.png', '/../images/restaurant/2-2.png', '/../images/restaurant/2-2-1.png', '/../images/restaurant/2-3.png', '/../images/restaurant/2-3-1.png','/../images/restaurant/3.png', '/../images/restaurant/4.png'],
                      'button_list'   :
                      [
                          { 'title':'Demo', 'url' : 'http://aaqib29292.github.io/restaurant/', 'new_window' : true },
                          { 'title':'Code', 'url':'https://github.com/aaqib29292/restaurant', 'new_window' : true}
                      ],
                      'tags'          : ['HTML', 'Bootstrap', 'CSS']
                  },
                  {
                      'title'         : 'SHERLOCK HOLMES - STATIC WEBSITE',
                      'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                      'thumbnail'     : ['/../images/sherlock/1.png', '/../images/sherlock/2.png', '/../images/sherlock/3.png'],
                      'large'         : ['/../images/sherlock/1.png', '/../images/sherlock/2.png', '/../images/sherlock/3.png'],
                      'button_list'   :
                      [
                          { 'title':'Demo', 'url' : 'http://aaqib29292.github.io/sherlock/', 'new_window' : true },
                          { 'title':'Code', 'url':'https://github.com/aaqib29292/sherlock', 'new_window' : true}
                      ],
                      'tags'          : ['Middleman', 'HTML', 'CSS', 'SASS', 'Bootstrap']
                  },
                  {
                      'title'         : 'ESCAPE - PSD TO HTML',
                      'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                      'thumbnail'     : ['/../images/escape/1.png', '/../images/escape/2.png', '/../images/escape/3.png','/../images/escape/4.png', '/../images/escape/5.png', '/../images/escape/6.png'],
                      'large'         : ['/../images/seller store/1.png', '/../images/seller store/2.png', '/../images/seller store/3.png', '/../images/seller store/4.png', '/../images/seller store/5.png'],
                      'button_list'   :
                      [
                          { 'title':'Demo', 'url' : 'http://aaqib29292.github.io/escape', 'new_window' : true },
                          { 'title':'Code', 'url':'http://github.com/aaqib29292/escape', 'new_window' : true}
                      ],
                      'tags'          : ['HTML', 'CSS', 'SASS', 'Bootstrap']
                  }

              ]
          });
      });
    });
