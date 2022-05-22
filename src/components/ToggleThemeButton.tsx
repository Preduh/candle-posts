import React, { useEffect } from "react"
import { useTheme } from "next-themes"
import { BsMoonFill, BsSunFill } from "react-icons/bs"
import { useState } from "react"
import { Switch } from "@headlessui/react"

function ToggleThemeBtn() {
  const { setTheme, theme } = useTheme()
  const [enabled, setEnabled] = useState(false)

  if (theme === "system") setTheme("dark")

  useEffect(() => {
    if (theme === "dark") setEnabled(true)
  }, [theme])

  const handleChange = () => {
    setEnabled(!enabled)
    if (theme === "dark") setTheme("light")
    else setTheme("dark")
  }

  return (
    <div className="flex justify-end items-center">
      <Switch
        checked={enabled}
        onChange={handleChange}
        className={`${
          enabled ? "bg-primary-orange" : "bg-primary"
        } relative inline-flex h-6 w-11 items-center rounded-full outline-none`}
      >
        <span className="sr-only">Change theme</span>
        <div
          className={`bg-transparent rounded-full transform transition ease-in-out duration-200
          ${enabled ? "translate-x-6" : "translate-x-1"}
        `}
        >
          {enabled ? (
            <BsMoonFill className="text-primary dark:text-white transform transition ease-in-out duration-200" />
          ) : (
            <BsSunFill className="text-white dark:text-primary" />
          )}
        </div>
      </Switch>
    </div>
  )
}

export { ToggleThemeBtn }
