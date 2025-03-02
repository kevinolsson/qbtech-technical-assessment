'use client';

import { useEffect, useState } from 'react';
import { Switch } from 'react-aria-components';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { cva } from 'class-variance-authority';

const trackStyle = cva(
  ['w-9 h-5 rounded-full transition-colors group-focus-visible:ring-2 ring-offset-2 ring-sky-500'],
  {
    variants: {
      isDark: {
        true: ['bg-sky-600 group-hover:bg-sky-700'],
        false: ['bg-gray-200 group-hover:bg-gray-300'],
      },
    },
  }
);

const thumbStyle = cva(
  ['w-4 h-4 rounded-full bg-white shadow transition-transform translate-y-0.5'],
  {
    variants: {
      isDark: {
        true: ['translate-x-4'],
        false: ['translate-x-0.5'],
      },
    },
  }
);

const iconStyle = cva(
  ['w-4 h-4 stroke-gray-900 dark:stroke-white']
);

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(systemPrefersDark);
    document.documentElement.classList.toggle('dark', systemPrefersDark);
  }, []);

  return (
    <Switch
      className="group flex gap-2 items-center"
      isSelected={isDark}
      onChange={(checked) => {
        setIsDark(checked);
        document.documentElement.classList.toggle('dark', checked);
      }}
    >
      <IconSun className={iconStyle()} />
      <div className={trackStyle({ isDark })}>
        <div className={thumbStyle({ isDark })} />
      </div>
      <IconMoon className={iconStyle()} />
    </Switch>
  );
};
