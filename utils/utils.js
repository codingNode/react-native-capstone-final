import { useRef, useEffect } from "react";


// same as of previous assignment
export function getSectionListData(data) {
  let newDataArr = [];
  data.map(item => {
    // making sure that no duplication occur
    let obj = newDataArr.find(
      x =>
        x.name == item.category.charAt(0).toUpperCase() + item.category.slice(1)
    );
    if (obj) {
      newDataArr[newDataArr.indexOf(obj)].data.push({
        id: item.id,
        name: item.name,
        price: item.price,
        description: item.description,
        image: item.image,
      });
    } else {
      newDataArr.push({
        name: item.category.charAt(0).toUpperCase() + item.category.slice(1),
        data: [
          {
            id: item.id,
            name: item.name,
            price: item.price,
            description: item.description,
            image: item.image,
          },
        ],
      });
    }
  });
  return newDataArr;
}




export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
