import { ModalState } from "@/redux/modal-slice";
import React from "react";
import { useSelector } from "react-redux";
import ComposeMessage from "./inbox/compose-message-pop-up";

export default function ModalWrapper() {
  const { type } = useSelector((state: { modal: ModalState }) => state.modal);

  if (type === "compose-message") return <ComposeMessage />;
}
