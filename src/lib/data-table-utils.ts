import { SORT_ORDERS } from "@/constants/data-table";

export const parseFilters = (input) => {
  if (!input) return [];
  const result = [];
  const pairs = input.split("&");

  pairs.forEach((pair) => {
    const [key, values] = pair.split("=");
    const valueArray = values.split(",");
    result.push({ id: key, value: valueArray });
  });

  return result;
};

export const parseSort = (sort: string, order: string) => {
  if (!sort) return [];
  if (!order) return [];

  return [
    {
      id: sort,
      value: order === SORT_ORDERS.DESC,
    },
  ];
};
