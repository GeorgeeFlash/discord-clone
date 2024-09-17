"use client";
import { Plus } from "lucide-react";
import React from "react";

import { ActionTootip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

const NavigationAction = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <ActionTootip side="right" align="center" label="Add a server">
        <button
          onClick={() => onOpen("createServer")}
          className="group flex items-center"
        >
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[1rem] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
            <Plus
              className="group-hover:text-white transition text-emerald-500"
              size={25}
            />
          </div>
        </button>
      </ActionTootip>
    </div>
  );
};

export default NavigationAction;
