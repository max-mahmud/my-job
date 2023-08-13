import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { all_user } from "../../store/reducers/userReducer";

const User = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(all_user());
  }, []);
  const loading = false;
  return (
    <div>
      <table className="bg-white w-11/12 mx-auto text-center border mt-3">
        <thead className=" bg-slate-300 py-2">
          <tr className="border">
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? "loading......."
            : users?.map((j, i) => {
                return (
                  <tr className="bg-slate-50 hover:bg-slate-300" key={i + 1}>
                    <td className="py-2">{i + 1}</td>
                    <td className="py-2">{j.name}</td>
                    <td>{j.email}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
