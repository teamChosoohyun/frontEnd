export const SetCategory = (cate) => {
  let category = "";
  switch (cate) {
    case "1":
      category = "레고";
      break;
    case "2":
      category = "소프트웨어";
      break;
    case "3":
      category = "메이커";
      break;
    case "4":
      category = "기타";
      break;
  }
  return category;
};
