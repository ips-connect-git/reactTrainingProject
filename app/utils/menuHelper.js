import { Menu } from 'containers/App/menu';

export function findMenuItem(menus, key, value) {
  let foundMenuItem;
  let foundMenuItemIndex = 0;
  let foundParentMenuItem;

  menus.forEach((menu, index) => {
    if (menu[key] === value) {
      foundMenuItem = menu;
      foundMenuItemIndex += index;
    }
    if (menu.children) {
      menu.children.forEach((child, childIndex) => {
        if (child[key] === value) {
          foundParentMenuItem = menu;
          foundMenuItem = child;
          foundMenuItemIndex += index + childIndex;
        }
      });
    }
    if (menu.children && menu.open && !foundMenuItem) {
      foundMenuItemIndex += index + menu.children.length;
    }
  });
  return {
    foundMenuItem,
    foundMenuItemIndex,
    foundParentMenuItem,
  };
}

function scrollToCurrentMenu(menu, className, url) {
  const openMenuElement = document.querySelector(className);
  if (openMenuElement) {
    const { foundMenuItemIndex } = findMenuItem(
      menu,
      'url',
      url || window.location.pathname,
    );
    openMenuElement.scrollTop = foundMenuItemIndex * 48;
  }
}

export function getSelectedMenuItem() {
  let selectedParentMenuItem;
  let selectedMenuItem;
  let selectedIcon;

  Menu.forEach(menuItem => {
    const { icon } = menuItem;
    if (menuItem.url === window.location.pathname) {
      selectedParentMenuItem = menuItem;
      selectedMenuItem = menuItem;
      selectedIcon = icon;
    }
    if (menuItem.children) {
      menuItem.children.forEach(child => {
        if (child.url === window.location.pathname) {
          selectedParentMenuItem = menuItem;
          selectedMenuItem = child;
          selectedIcon = icon;
        }
      });
    }
  });

  return { selectedParentMenuItem, selectedMenuItem, selectedIcon };
}

export function getPreviousSelectedItem(index, openViews) {
  const selectedOpenView = openViews.find(menuItem => menuItem.index === index);

  const previousMenuIndex = openViews.indexOf(selectedOpenView) - 1;
  const previousSelectedMenuItem = openViews[previousMenuIndex];

  return { previousMenuIndex, previousSelectedMenuItem };
}

export function setSidebarHeight(menuSelector, retry) {
  const menuElement = document.querySelector(menuSelector);

  if (menuElement) {
    const height = window.innerHeight - menuElement.offsetTop;
    menuElement.style.height = `${height}px`;
  } else if (!retry) {
    setTimeout(() => {
      setSidebarHeight(menuSelector, true);
    }, 200);
  }
}

export function updateMenuDimensions() {
  const width = window.innerWidth;
  if (width < 960) {
    setSidebarHeight('#sidebar-menu-mobile .menu-list ul');
  } else {
    setSidebarHeight('#sidebar-menu .menu-list ul');
  }
}

export function scrollMenu() {
  setTimeout(() => {
    scrollToCurrentMenu(Menu, '.menu-list ul');
  }, 200);
}

export function scrollOpenViews(openViews, url) {
  setTimeout(() => {
    scrollToCurrentMenu(openViews, '.open-views-list ul', url);
  }, 200);
}

export function scrollOpenViewAndMenu(openViews) {
  scrollOpenViews(openViews);
  scrollMenu();
}

export function getNextIndex(menus) {
  let maxIndex = 0;

  menus.forEach(menu => {
    if (menu.index > maxIndex) {
      maxIndex = menu.index;
    }
    if (menu.children) {
      menu.children.forEach(child => {
        if (child.index > maxIndex) {
          maxIndex = child.index;
        }
      });
    }
  });
  return maxIndex + 1;
}

export function getDynamicItem(id, item) {
  const { text, url, component, parent } = item;
  const dynamicItem = {
    ...item,
    id: item.id.replace(':id', id),
    text: text.replace(':id', id),
    url: url.replace(':id', id),
    component,
  };

  dynamicItem.parent.id = parent.id.replace(':id', id);
  delete dynamicItem.icon;

  return dynamicItem;
}

export function isMobile() {
  let isMobileMode = false;

  if (
    /Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent,
    )
  ) {
    isMobileMode = true;
  }

  return isMobileMode;
}

export default {
  findMenuItem,
  getDynamicItem,
  getNextIndex,
  getPreviousSelectedItem,
  getSelectedMenuItem,
  isMobile,
  setSidebarHeight,
  scrollMenu,
  scrollOpenViews,
  scrollOpenViewAndMenu,
  updateMenuDimensions,
};
