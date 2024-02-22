import React, { useEffect, useState } from "react";
import Button from "../common/button";
import { X } from "lucide-react";
import clsx from "clsx";
import { inputStyles } from "@/styles/classStyles";
import { useDispatch } from "react-redux";
import { _clearModals, _showModal } from "@/redux/modal-slice";
import {
  addItemToCollection,
  getItemsFromCollection,
} from "@/services/firebase/crud";
import sendConfirmationEmail from "@/services/emails/sendEmails";
import { _showLoader } from "@/redux/loading-slice";
import { v4 as uuidv4 } from "uuid";
import InboxCustomerList from "../search/inbox-customer-list";

export default function ComposeMessage() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [customers, setCustomers] = useState([]);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [sendToAllUsers, setSendToAllUsers] = useState(false);

  const dispatch = useDispatch();
  const dataToUse = sendToAllUsers ? customers : selectedCustomers;

  useEffect(() => {
    getItemsFromCollection("users", ["role", "==", "customer"], (res: any) => {
      if (res.length > 0) {
        let newRes = res?.filter(
          (customer: any) => customer.emailVerified === true
        );
        setCustomers(newRes);
      }
    });
  }, []);

  function handleSendEmail() {
    if (!dataToUse) return alert("Add at least one recipient!");
    if (!subject) return alert("Please add a subject for this email");
    if (!body) return alert("Please add a message for this email");
    sendConfirmationEmail(
      dataToUse,
      {
        subject,
        body,
      },
      (res: any) =>
        dispatch(_showLoader({ type: res ? "full-page-loader" : "" })),
      (res: any) => {
        addMessagesToFirestore(res, () => dispatch(_clearModals()));
      }
    );
  }

  function addMessagesToFirestore(res: any[], onDone?: any) {
    addItemToCollection(
      "inbox",
      {
        id: uuidv4(),
        // todo: change to actual role
        senderDetails: {
          name: "Bismark",
          email: "bismarkamanor@gmail.com",
          role: "customer-service",
        },
        senderId: "bismarkamanor@gmail.com",
        message: {
          subject,
          body: encodeURIComponent(body),
        },
        timeSent: `${new Date().getTime()}`,
        recipients: res,
      },
      "Email sent successfully",
      onDone
    );
  }

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center bg-zinc-700/70">
      <div className="w-[65%] h-fit bg-white shadow-md">
        <div className="flex items-center justify-between px-5 pr-2 py-1.5 border-b border-zinc-200">
          <h3 className="text-lg font-medium">New message</h3>
          <Button
            type="none"
            icon={<X className="w-5 h-5 text-zinc-500" />}
            onClick={() => dispatch(_clearModals())}
          />
        </div>
        <div className="p-5 space-y-5">
          {/* sender */}
          <div
            className={clsx(
              "bg-zinc-200 border-zinc-300",
              inputStyles.main,
              "!mt-0 text-zinc-500"
            )}
          >
            From: Esique Handycraft Team
          </div>
          {/* recievers */}
          <div className="space-y-4">
            <div className="space-x-4 flex-1 flex items-center ">
              <InboxCustomerList
                dataToUse={dataToUse}
                customers={customers}
                selectedCustomers={selectedCustomers}
                setSelectedCustomers={setSelectedCustomers}
                sendToAllUsers={sendToAllUsers}
              />
            </div>
            <div className="mr-auto flex items-center space-x-4">
              <input
                type="checkbox"
                name="sendToAll"
                defaultChecked={sendToAllUsers}
                onChange={(e) => setSendToAllUsers(e.target.checked)}
                className="w-3 h-3 accent-teal-500 fill-white"
              />
              <p className="!text-xs">Send to all customers</p>
            </div>
          </div>
          {/* subject */}
          <div>
            <input
              name="subject"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              className={clsx(inputStyles.main, "!mt-0")}
            />
          </div>
          {/* body */}
          <div>
            <textarea
              name="body"
              placeholder="Type your message..."
              onChange={(e) => setBody(e.target.value)}
              value={body}
              className={clsx(inputStyles.textarea, "!mt-0 !h-full")}
            />
          </div>
          {/* submit */}
          <Button
            onClick={handleSendEmail}
            type="main"
            label={"Send to " + dataToUse.length + " Customers"}
          />
        </div>
      </div>
    </div>
  );
}
