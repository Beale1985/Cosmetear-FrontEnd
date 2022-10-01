import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

class SlidesShowBrands extends Component {
  constructor(props) {
    super(props);
    this.state = { 
		activeIndex: 0,
		logo_image: [],
		isFetch: true,
	};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount () {
	fetch("/logo_brands")
	.then(response => response.json())
	.then(logosBrands => this.setState({ logo_image: logosBrands, isFetch: false }))
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.logo_image.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.logo_image.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
	if (this.state.isFetch){
		return "Cargando..."
	}

    const slides = this.state.logo_image.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.logo_image}
        >
          <img src={item.logo_image} alt={item.name} style={{width: "100%"}} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
        <CarouselControl className='cursorIzqSlide' direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl className='cursorDerSlide' direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default SlidesShowBrands;