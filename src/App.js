import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


// pages
import HomePage from './pages/home/home.page'
import ServicesPage from './pages/services/services.page'
import NewsPage from './pages/news/news.page'
import WorkWithUsPage from './pages/work_with_us/work_with_us.page'
import PrivacyPage from './pages/privacy/privacy.page'


function App() {
  return (
    <Router>
      <Switch>

        // home
        <Route exact path="/" component={HomePage} />

        // services
        <Route exact path="/services" 
               component={ServicesPage} />

        // news
        <Route exact path="/news" component={NewsPage} />

        // work with us
        <Route exact path="/work-with-us" 
               component={WorkWithUsPage} />

        // privacy
        <Route exact path="/privacy" 
               component={PrivacyPage} />

      </Switch>
    </Router>
  );
}

export default App;




// import React from "react";
// import Slider from "react-slick";
 
// export default function SimpleSlider() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//   );
// }
// export default App5;