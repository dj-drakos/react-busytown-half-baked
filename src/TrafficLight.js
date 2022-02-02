export default function TrafficLight({ lightColor }) {

  function handleLightChange(color) {
    return color === lightColor ? `${color} circle on` : `${color} circle`;
  }

  return (
    // this component takes in a prop called color. It is either 'red', 'yellow' or 'green'.
    <div className='traffic-light'>
      {/* in each of these divs, set it up so that if the color matches, add the css class 'on' to the classNames */}
      {/* for example, the css classes for the div below should be `red circle on`, if props.color is 'red' */}
      <div className={handleLightChange('red')}></div>
      {/* the css classes for the div below should be `yellow circle on`, if props.color is 'yellow' */}
      <div className={handleLightChange('yellow')}></div>
      {/*  the css classes for the div below should be `green circle on`, if props.color is 'green' */}
      <div className={handleLightChange('green')}></div>
    </div>
  );
}
