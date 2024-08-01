import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";

import React from "react";

const Modal = ({ deleteMail }) => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>Delete</AlertDialogTrigger>
        <AlertDialogContent className="border border-[#484E53] bg-gradient-to-tr from-[#141517] to-[#232528] z-50 text-white text-center flex justify-center items-center flex-col content-center gap-8">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center mb-3">
              Are you sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Your selected email will be deleted
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-[#25262B] mx-5">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="text-white bg-gradient-to-r from-[#FA5252] to-[#A91919] mx-5"
              onClick={deleteMail}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Modal;
