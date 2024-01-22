import { IoSettingsOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { PiUsersThreeLight, PiUsersThin  } from "react-icons/pi";
import { GoChecklist } from "react-icons/go";
import { MdOutlineAnalytics } from "react-icons/md";
import { TbUserShare } from "react-icons/tb";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";

export const sidebarItems = [
  {
    title: 'Dashboard',
    href: 'dashboard',
    user: ['admin'],
    Icon: MdOutlineSpaceDashboard
  },
  {
    title: 'Settings',
    href: 'settings',
    user: ['admin', 'user'],
    Icon: IoSettingsOutline
  },
  {
    title: 'My Courses',
    href: 'my-courses',
    user: ['user'],
    Icon: CiViewList
  },
  {
    title: 'Create Course',
    href: 'create-course',
    user: ['admin'],
    Icon: CiViewList
  },
  {
    title: 'Courses',
    href: 'courses',
    user: ['admin'],
    Icon: CiViewList
  },
  {
    title: 'Users',
    href: 'users',
    user: ['admin'],
    Icon:PiUsersThreeLight
  },
  {
    title: 'Invoices',
    href: 'invoices',
    user: ['admin'],
    Icon: GoChecklist
  },
  {
    title: 'Manage Team',
    href: 'team',
    user: ['admin'],
    Icon: TbUserShare
  },
  {
    title: 'Courses Analytics',
    href: 'courses-analytics',
    user: ['admin'],
    Icon: MdOutlineAnalytics
  },
  {
    title: 'Users Analytics',
    href: 'users-analytics',
    user: ['admin'],
    Icon: PiUsersThin
  },
  {
    title: 'Orders Analytics',
    href: 'orders-analytics',
    user: ['admin'],
    Icon: LuShoppingCart
  },
]