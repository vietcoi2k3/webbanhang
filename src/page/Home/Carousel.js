import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '560px',
  color: '#fff',
  lineHeight: '560px',
  textAlign: 'center',
  background: '#364d79',
  width: "100%",
};
const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <img style={contentStyle} src="https://img.thesitebase.net/files/10266415/2023/05/30/922x2048_center@1685429504fe0c05be27.jpeg" />
      </div>
      <div>
        <img style={contentStyle} src="https://img.thesitebase.net/files/10266415/2023/05/08/922x2048_center@168351349715d5c28f97.jpeg" />
      </div>
      <div>
        <img style={contentStyle} src="https://img.thesitebase.net/files/10266415/2023/03/23/922x2048_center@167955963808cccf3ce6.jpeg" />
      </div>

    </Carousel>
  );
};
export default App;