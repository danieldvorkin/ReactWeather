var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is a weather app built on <a href="https://facebook.github.io/react/">React</a> and <a href="http://openweathermap.org/">OpenWeatherMap</a>.
      </p>
      <p>
        <a href="https://github.com/zakmysta/ReactWeather">Github source</a> for app.
      </p>
    </div>
  );
};

module.exports = About;
