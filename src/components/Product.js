// COMPOSANT FONCTIONEL */
import react, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Product(props) {
  const [product, setProduct] = useState(props.product);
  const [updated, setUpdated] = useState(0);

  useEffect(() => {
    console.log(
      "I have finished rendering " +
        props.product.name +
        "price: " +
        props.product.price
    );

    return () => {
      console.log("I'm being destroyed");
    };
  });
  const addLike = () => {
    setProduct({
      ...product,
      likes: Number(product.likes) + 1,
    });
    setUpdated((u) => u + 1);
  };
  useEffect(() => {
    console.log(updated);
  }, [updated]);
  return product.likes >= 5 ? (
    <ProductFrameBest>
      <ProductImageWrapperBest>
        <ProductImageBest src={ProductFrameBest.img}></ProductImageBest>
      </ProductImageWrapperBest>
      <ProductInfoWrapperBest>
        <span>Best Product</span>
        <span>
          <a href={"/product/" + product.name}>{product.name}</a>
        </span>
        <span>{product.price}</span>
        <span>Likes : {product.likes}</span>
        <Button onClick={addLike}>Like</Button>
      </ProductInfoWrapperBest>
    </ProductFrameBest>
  ) : (
    <ProductFrame>
      <ProductImageWrapper>
        <ProductImage src={product.img}></ProductImage>
      </ProductImageWrapper>
      <ProductInfoWrapper>
        <span>
          <a  href={"/product/" + product.name}>{product.name}</a>
        </span>
        <span>{product.price}</span>
        <span>Likes : {product.likes}</span>
        <Button onClick={addLike}>Like</Button>
      </ProductInfoWrapper>
    </ProductFrame>
  );
}
const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;
const ProductFrameBest = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: #db7093;
  margin: 10px;
  display: flex;
  flex-direction: column;
  animation: clignote 2s linear infinite;
  @keyframes clignote {
    50% {
      opacity: 0.5;
    }
  }
`;
const ProductImageWrapperBest = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImageBest = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapperBest = styled.div`
  color: white;
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

/* CMPOSANT DE CLASSE */
// import React, { Component } from "react";
// import styled from "styled-components";

// export default class Product extends Component {
//   constructor(props){
//     super(props);
//     this.state = { product: props.product, updated: 0,likes: 0};
//     this.addLikes =this.addLikes.bind(this);
//   }
//   componentDidMount(){
//     console.log(
//       "I have finished rendering" +
//       this.props.product.name +
//       "price:" +
//       this.state.product.price
//       );
//   }
//   componentDidUpdate(){
//     console.log("I have benn updated" +
//     this.state.updated + "times");
//   }
//   componentWillUnmount(){
//     console.log("I'm being destroyed");
//   }
//   render() {
//     return (
//       <div>
//         <ProductFrame>
//           <ProductImageWrapper>
//             <ProductImage src={this.props.product.img}></ProductImage>
//           </ProductImageWrapper>
//           <ProductInfoWrapper>
//             <span>{this.props.product.name}</span>
//             <span>{this.props.product.price}</span>
//             <span>Likes : {this.state.likes}</span>
//             <button onClick={this.addLikes}>Like</button>
//           </ProductInfoWrapper>
//         </ProductFrame>
//       </div>
//     );
//   }
//   addLikes(e){
//     e.preventDefault();
//     this.setState((oldState) => ({
//       likes: oldState.likes+1,
//       updated: oldState.updated + 1,
//     }));
//   }
// }
