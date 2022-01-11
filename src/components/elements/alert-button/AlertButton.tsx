import { motion, AnimatePresence } from "framer-motion";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { Button } from "../../elements";

/* eslint-disable-next-line */
export interface AlertButtonProps {
  buttonText: string;
  title: string;
  description: string;
  cancelText?: string;
  actionText: string;
  onActionClick: () => void;
  isLoading?: boolean;
}

export function AlertButton({
  buttonText = "Delete",
  title,
  description,
  cancelText = "Cancel",
  actionText = "Yes, delete",
  onActionClick,
  isLoading = false,
}: AlertButtonProps) {
  return (
    <AnimatePresence>
      <AlertDialogPrimitive.Root>
        <AlertDialogPrimitive.Trigger asChild>
          <Button type="button" variant="danger">
            {buttonText}
          </Button>
        </AlertDialogPrimitive.Trigger>
        <AlertDialogPrimitive.Portal>
          <AlertDialogPrimitive.Overlay asChild>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-10"
            ></motion.div>
          </AlertDialogPrimitive.Overlay>
          <AlertDialogPrimitive.Content asChild>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-20 bg-white rounded-md fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[90vw] max-w-[500px] max-h-[85vh] p-6 focus:outline-none"
            >
              <AlertDialogPrimitive.Title className="text-gray-800 text-lg font-bold">
                {title}
              </AlertDialogPrimitive.Title>
              <AlertDialogPrimitive.Description className="mt-2 text-gray-600">
                {description}
              </AlertDialogPrimitive.Description>
              <div className="mt-6 flex justify-end space-x-4">
                <AlertDialogPrimitive.Cancel asChild>
                  <Button variant="gray" type="button">
                    {cancelText}
                  </Button>
                </AlertDialogPrimitive.Cancel>
                <AlertDialogPrimitive.Action asChild>
                  <Button
                    variant="danger"
                    isLoading={isLoading}
                    onClick={onActionClick}
                  >
                    {actionText}
                  </Button>
                </AlertDialogPrimitive.Action>
              </div>
            </motion.div>
          </AlertDialogPrimitive.Content>
        </AlertDialogPrimitive.Portal>
      </AlertDialogPrimitive.Root>
    </AnimatePresence>
  );
}

export default AlertButton;
