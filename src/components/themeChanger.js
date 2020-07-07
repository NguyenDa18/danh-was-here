import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <input
          type="checkbox"
          className="theme-changer"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />{' '}
        <div className="mode-container">
          <i className="gg-sun" style={{ color: 'gold' }}></i>
          <i className="gg-moon" style={{ color: 'blue' }}></i>
        </div>
      </label>
    )}
  </ThemeToggler>
)