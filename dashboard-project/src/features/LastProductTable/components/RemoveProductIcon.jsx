import { HiOutlineTrash } from "react-icons/hi";
import Modal from "../../../components/common/Modal";

const RemoveProductIcon = ({ product, handler }) => {
  const Trigger = () => (
    <button className="cursor-pointer text-xl text-red-500">
      <HiOutlineTrash className="text-xl" />
    </button>
  );

  return (
    <Modal
      title="حذف محصول"
      Trigger={<Trigger />}
      onSubmit={() => handler(product.id)}
    ></Modal>
  );
};

export default RemoveProductIcon;
