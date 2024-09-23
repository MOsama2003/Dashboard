import React, { useEffect, useRef, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import useBoolean from "@/hooks/useBoolean";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const searchData = [
  {
    label: "Status",
    search: "Request",
    link: "/admin/orders",
    icon: "SomeIcon",
  },
  {
    label: "Table",
    search: "Request",
    link: "/admin/dashboard",
    icon: "SomeIcon",
  },
  {
    label: "Request",
    search: "Request",
    link: "/admin/orders",
    icon: "SomeIcon",
  },
  {
    label: "Item 2",
    search: "Item 2",
    link: "/admin/item2",
    icon: "SomeIcon",
  },
  {
    label: "Item 3",
    search: "Item 3",
    link: "/admin/item3",
    icon: "SomeIcon",
  },
];

type Props = {
  className?: string;
  openClassName?: string;
  options?: {
    icon: any;
    label: string;
    search: string;
    link: string;
  }[];
};

const ComboSearchInput = ({
  className,
  openClassName,
  options = searchData,
}: Props) => {
  const {
    setFalse: closeDropdown,
    setTrue: openDropdown,
    value: isOpen,
  } = useBoolean(false);
  const comboBoxRef = useRef<HTMLDivElement | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOptions = options.filter((item) =>
    item.search.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasResults = filteredOptions.length > 0;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        comboBoxRef.current &&
        !comboBoxRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeDropdown]);

  return (
    <div ref={comboBoxRef}>
      <Command
        className={cn(
          "relative rounded-lg border",
          className,
          isOpen ? openClassName : ""
        )}
      >
        <CommandInput
          placeholder="Type here to search..."
          className="h-9"
          onFocus={openDropdown}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {isOpen && (
          <CommandList className="lg:h-[265px]">
            {!hasResults ? (
              <CommandEmpty>No results found.</CommandEmpty>
            ) : (
              <CommandGroup>
                {filteredOptions.map((item) => (
                  <div key={item.label}>
                    <CommandItem>
                      <Link
                        className="w-full h-6"
                        to={item.link}
                        onClick={closeDropdown} // Close the dropdown when an option is clicked
                      >
                        {item.label}
                      </Link>
                    </CommandItem>
                    <CommandSeparator />
                  </div>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        )}
      </Command>
    </div>
  );
};

export default ComboSearchInput;
