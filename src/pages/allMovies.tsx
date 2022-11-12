import React, { useEffect, useState } from "react";
import SearchBar from "components/searchBar";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  name: string;
  category: string;
  image: any;
}
const AllMovies: React.FC = () => {
  const [moviesList, setMoviesList] = useState<Props[]>([]);

  const A = [10, 20, 30];
  const K = 15;

  const twoSumLessThanK = (A, K) => {
    var largest: any = 0;
    var result: any = 0;
    for (var i = 0; i <= largest; i++) {
      if (A[i] > largest) {
        largest = A[i];
      }
    }
    if (parseInt(largest) > K) {
      result = parseInt(largest);
    } else {
      result = -1;
    }
    return result;
  };

  const subsets = (nums) => {
    //write your solution here
    // let res = [[]];
    let res = nums.reduce(
      (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
      [[]]
    );
    return res;
  };

  const nums = [1, 2, 3];
  // const subsets = (nums) => {
  //   //write your solution here

  //   nums.reduce(
  //     (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
  //     [[]]
  //   );
  //   return;
  // };

  console.log(subsets(nums));
  // for (let i = 0; i < components.length; i++) {
  //   A.push(parseInt(components[i]));
  // }
  console.log(twoSumLessThanK(A, K));

  // console.log(calPoints(['6']));
  //   const handlehamada = (array) => {
  //     var singleMatch = 0;
  //     var newArray: any = [];
  //     var sum = 0;
  //     array.map((value, index) => {
  //       if (value) {
  //         if (value === "D") {
  //           singleMatch = parseInt(newArray[newArray.length - 1]) * 2;
  //           newArray.push(singleMatch);
  //         } else if (value === "C") {
  //           newArray.pop();
  //           console.log(newArray);
  //         } else if (value == "+") {
  //           singleMatch =
  //             parseInt(newArray[newArray.length - 1]) +
  //             parseInt(newArray[newArray.length - 2]);
  //           newArray.push(singleMatch);
  //         } else {
  //           newArray.push(value);
  //         }
  //       }
  //     });
  //     console.log(newArray);
  //     for (let i = 0; i < newArray.length; i++) {
  //       sum += parseInt(newArray[i]);
  //     }
  //     return sum;
  //   };

  //   console.log(handlehamada(["1"]));

  //   const testBrackets =(hamoksha)=>{
  // hamoksha
  //   }
  //   console.log(testBrackets('()'))

  // var str = "{()}";
  // const isValid = (expression: any) => {
  //   let leftArr: any = [];
  //   let rightArr: any = [];
  //   for (let i = 0; i < expression.length; i++) {
  //     if (
  //       expression[i] === "(" ||
  //       expression[i] === "[" ||
  //       expression[i] === "{"
  //     ) {
  //       leftArr.push(expression[i]);
  //     }

  //     if (expression[i] === ")") {
  //       rightArr.push("(");
  //     } else if (expression[i] === "}") {
  //       rightArr.push("{");
  //     } else if (expression[i] === "]") {
  //       rightArr.push("[");
  //     }
  //   }

  //   rightArr.reverse();

  //   if (leftArr.length < rightArr.length || leftArr.length > rightArr.length) {
  //     return false;
  //   }

  //   for (let k = 0; k < leftArr.length; k++) {
  //     if (leftArr[k] != rightArr[k]) {
  //       return false;
  //     }
  //   }

  //   return true;
  // };

  // if (isValid(str)) console.log("valid");
  // else console.log("invalid");

  return (
    <>
      <div>
        <SearchBar setMoviesList={setMoviesList} />
      </div>
      <div className="cards mt-10">
        {moviesList?.length > 0 ? (
          moviesList?.map((movie, index) => (
            <Link to={`./${movie.id}`} key={index}>
              <div className="card">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src={movie.image}
                  alt="Your Company"
                />
                <div>
                  <h4>
                    <b>{movie.name}</b>
                  </h4>
                  <p>{movie.category}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          //in case nothing matches the searched word
          <h1>No Movies Maching this Name or Category</h1>
        )}
      </div>
    </>
  );
};
export default AllMovies;
